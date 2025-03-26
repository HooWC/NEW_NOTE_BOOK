```
开发Mobile

1. ios也能打开
2. link在net，http
3. node 看法 api
4. note + react native
```

```
node server

hsaapi
4200
4201

hscp
4300
```

```
remote / 30
192.1.1.30
D
```

```
npm install express

```

## Project

### Node

```
npm install express cors body-parser bcryptjs jsonwebtoken joi mssql fs
mkdir _helpers _middleware users plans weightCerts
npm install expo-linear-gradient

```



```
1. 最后记得更换 sql 连接
2. 
```

```
http://localhost:5000/users/authenticate
```

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTc0Mjg2NTYzNSwiZXhwIjoxNzQzNDcwNDM1fQ.pgjxpm_lpuMpfPgkZxiaJ7UYERg4mKegQgYMuKEeEu4
```



```
React Native 是 react native expo 的项目
用npx expo 安装的

hsaapi 是 node api 项目

我要你把login界面的用户登入用上api来登入，你可以看hsaapi的node项目，我刚刚在postman拿到数据了，一开始拿token，http://localhost:5000/users/authenticate，然后拿到了。

你可以用我的node 提供的api来修改login page，要有真的用户可以登入的，用户的密码是乱码：$2a$10$IWPPJ/P6B7sXJ4lZTrP38OMPiVnfKhsy8lTwKl870nh/YeqGYXJJy
你可以自己翻译，看node项目的代码。

先弄login的，如果登入错误就给错误信息，登入成功就进入Home page，Home page可以log out

先弄这些
```



### 正

```
Postman 使用

1. 获得 Token
- http://localhost:5000/users/authenticate
{
  "username": "cmengjin",
  "password": "hsonline"
}
- 复制 Token

2. http://localhost:5000/weightCerts
- 放 Token ， Send
```

```
手机连接 API

打开cmd，输入 ipconfig
拿ipv4 比如 http://10.10.10.14:5000/users/authenticate
就可以了。
```







```
http://192.1.1.30:5000

http://hongsenghq.ddns.net:

192.1.1.15
```

```
4200
4201
```

```
一开始你自动登入看看有没有拿到token

用户名是：cmengjin
密码是：hsonline

用http://10.0.2.2:4200/users/authenticate 
或者
http://10.0.2.2:5000/users/authenticate 
或者
http://hongsenghq.ddns.net:4200/users/authenticate 
```





```
1. 每次去下一页的时候，那个加载中换成因为 Loading...
2. 那个 PlanListing的Body Type的apidata太长了，你能不能弄自动换行，要美观的
3. 然后在PlanDetails 右上角的plan按钮再美化
4. A4 和 Letter 是一个select，默认是A4
```

```
1. PlanListing的search我要可以search全部。
plan_id
model_id
body_type
bdm
wheelbase
2. body_type还是一样不好看，自动换行，两行，句子不要去到左边，尽量给一个固定的大小，padding，后面就overview

3. 那个A4和Letter的界面，如果你可以弄到的话，就弄一个把Plan Details显示，然后可以print出来的，手机的我没有试过print，就是连接一个设备这样的。。。

这是以前别人用flutter写的代码，不知道react native可不可以？但是不能就不能吧

import 'dart:io';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:hsa_app/models/plan.dart';
import 'package:pdf/pdf.dart';
import 'package:printing/printing.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:http/http.dart' as http;
import 'package:hsa_app/config.dart';
import 'package:flutter/services.dart';

class PdfNewScreen extends StatefulWidget {
  const PdfNewScreen({super.key, required this.plan});

  final Plan plan;
  @override
  State<StatefulWidget> createState() {
    return _PdfNewScreen();
  }
}

class _PdfNewScreen extends State<PdfNewScreen> {
  String displayData = 'Loading...';
  String myContent = '';
  File? urlFile;
  String? fileDir = '';
  Uint8List? bytes;

  // late PDFViewController _pdfViewController;

/*   void requestPersmission() async {
    PermissionStatus permission =
        await Permission.manageExternalStorage.request();
    if (permission == PermissionStatus.granted) {
      // print("granted");
    }
    if (permission == PermissionStatus.denied) {
      // print("denied");
    }
    if (permission == PermissionStatus.permanentlyDenied) {
      openAppSettings();
    }
  } */

  Future<Uint8List?> _loadPdfFile() async {
    final id = widget.plan.id;

    try {
      SharedPreferences prefs = await SharedPreferences.getInstance();
      final token = prefs.getString('token');
      final uri = Uri.http(url2, '/plans/$id');

      final response = await http.get(
        uri,
        headers: {
          HttpHeaders.authorizationHeader: 'Bearer $token',
          HttpHeaders.contentTypeHeader: 'application/json',
        },
      );

      final fetchedData = jsonDecode(response.body);

      myContent = fetchedData['content'];

      bytes = base64.decode(myContent);

      // print('File size: + ${bytes!.lengthInBytes}');

      return bytes;
    } catch (error) {
      throw 'Error to load PDF file';
    }
  }

  @override
  void initState() {
    // requestPersmission();
    // _loadPdf();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;

    return Scaffold(
      appBar: AppBar(
        title: Text(
          widget.plan.planId,
          style: const TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
          ),
        ),
        backgroundColor: Colors.blue[600],
      ),
      body: FutureBuilder<Uint8List?>(
        future: _loadPdfFile(),
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return InteractiveViewer(
              child: PdfPreview(
                maxPageWidth: width < 600 ? width : width - 100,
                initialPageFormat: PdfPageFormat.a4,
                build: (format) => snapshot.data!,
              ),
            );
          }
          return const Center(
            child: CircularProgressIndicator(),
          );
        },
        // child: PdfPreview(
        //   maxPageWidth: 700,
        //   build: (format) => _loadPdfFile(),
        // ),
      ),
    );
  }
}
```

```
1. print 那一页给loading就可以了，不要给错误
2. 
```

```
1. 在hsaapi node api 的项目开新的一个api连接，我们已经有了users, weightCerts, plans。 根据公司老板的要求 添加一个新的cmd文件夹，写cmd.service.js , cmd.controller.js， 代码写法就跟users, weightCerts, plans这些文件一样就可以了。

2. 在server里，api的link你写  cmh,例如：http://10.10.10.14:5000/cmh

3. 在database 这个table的名字是 mstock ,SELECT * FROM mstock

属性有
id
stock_id
internal_id
item_id
mgroup_id
fg_id
quot_id
ddate
po_id
poi_id
vendor
status
so_id
so_id
location
arrivedt
acc_arrivedt
sir
siri
grn_id
grni_id
job_id
do_id
doi_id
customer
p_status
remark
service
contra
obsolete
com_no
m_reg_no
code
corigin_if
pcode
porigin_if
containercs_id
containercb_id
inv_no_cs
inv_no_cb
picloc1
picloc2
print_qty
selectbit
createby
createdt
modifyby
modifydt
timemark
identitymark
```

```
api_getAllMstock
api_getMstockByChassis
```

```
修改代码，api_getAllmstock是拿全部cmh数据的，api_getmstockBychassis是byid的，我只要getAll和找id而已。只修改cmh的代码
```

```
使用 Tric（）
```



### API Link

```
http://10.0.2.2:4200/users/authenticate 
http://10.0.2.2:5000/users/authenticate 
http://hongsenghq.ddns.net:4200/users/authenticate 
http://10.10.10.14:5000/plans
```

可能

```
可能导致的原因是因为

1. WIFI不一样
2. 可以复制 ipv4看看？
```

