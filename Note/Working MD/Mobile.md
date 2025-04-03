```
我的node 项目里有hongsenghq_ddns_net.pem 和 hsa-key.key

然后我的server.js代码是


require('rootpath')(); // 让 require() 可以使用相对路径，避免使用 ../../../ 这种复杂路径
const cors = require('cors'); // 允许跨域访问
const express = require('express'); // 引入 Express 框架
const https = require("https"); // HTTPS 服务器
const http = require("http"); // HTTP 服务器
const fs = require("fs"); // 处理文件系统
const app = express(); // 创建 Express 应用实例

const errorHandler = require('_middleware/error-handler'); // 引入全局错误处理中间件

// 配置 Express 解析 JSON 和 URL 编码请求
app.use(express.json()); // 解析 JSON 格式的请求体
app.use(express.urlencoded({ extended: true })); // 解析 URL 编码格式的请求体
app.use(cors()); // 允许跨域请求

app.use('/users', require('./users/users.controller')); // 处理 /users 相关 API
app.use('/weightCerts', require('./weightCerts/weightCerts.controller')); // 处理 /weightCerts 相关 API
app.use('/plans', require('./plans/plans.controller')); // 处理 /plans 相关 API
app.use('/cmh', require('./cmh/cmh.controller')); // 添加 CMH 路由
app.use('/chassismh', require('./chassismh/chassismh.controller'));
app.use('/dsoi', require('./dsoi/dsoi.controller'));
app.use('/quote', require('./quote/quote.controller'));
app.use('/chassisfile', require('./chassisfile/chassisfile.controller'));

// 全局错误处理
app.use(errorHandler);

// 配置 HTTPS 证书
const options = {
    key: fs.readFileSync("hsa-key.key"), // 读取私钥文件
    cert: fs.readFileSync("hongsenghq_ddns_net.pem"), // 读取 SSL 证书文件
    passphrase: "hsonlinehsgroup1234%" // 证书解密密码
};

// 设定 HTTP 和 HTTPS 服务器端口
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 3000) : 5230; // HTTP 端口
const port_ssl = process.env.NODE_ENV === 'production' ? (process.env.PORT || 3443) : 5231; // HTTPS 端口

// 启动 HTTP 服务器
http.createServer(options, app).listen(port, () => 
    console.log('Server listening on port ' + port)
);

// 启动 HTTPS 服务器
https.createServer(options, app).listen(port_ssl, () => 
    console.log('Server listening on port ' + port_ssl)
);


========

我启动了，https://hongsenghq.ddns.net:5231/users/authenticate
我输入
{
  "username": "cmengjin",
  "password": "hsonline"
}

得到
Could not send request
Error: Request timed out

不能使用啊，怎么解决？？

但是localhost可以拿到data，hongsenghq.ddns.net不能，

但是另一个远程，已经有node启动这个hongsenghq.ddns.net了，但是是4200和4201,应该没什么影响吧？
```





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
我的CMHListing.js 里的search 速度太慢了，有没有更快的方法？

我的http://10.10.10.14:5000/cmh?page=${pageNum}&size=${pageSize}写法是这样的
USE [InfoHSA]
GO
/****** Object:  StoredProcedure [dbo].[api_getAllMstock_page]    Script Date: 27/03/2025 3:33:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[api_getAllMstock_page] 
    @page INT = 1,
    @size INT = 100 
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @offset INT;
    SET @offset = (@page - 1) * @size;

    WITH CTE AS (
      --  SELECT *, ROW_NUMBER() OVER (ORDER BY createdt DESC) AS RowNum
     --   FROM mstock
	 select mstock.stock_id, mstock.internal_id, mstock.item_id, mstock.mgroup_id, 
		mstock.quot_id, mstock.ddate, mstock.po_id, mstock.vendor, mstock.status, mstock.so_id,
		mstock.location, mstock.p_status,mstock.remark, mstock.contra, mstock.customer, 
		mstock.createby, mstock.createdt, mstock.timemark, mitem.category, 
		mmgroup.make, dsoi.allc_id, dsoi.engine_id, dsoi.eserial_no, dsoi.ap_status, 
		vmimport.ap_id, vreg_no.reg_no,mbc.bc_if,
		ROW_NUMBER() OVER (ORDER BY mstock.createdt DESC) AS RowNum
		from mstock INNER JOIN mitem ON mstock.item_id = mitem.item_id 
		INNER JOIN vreg_no ON mstock.stock_id = vreg_no.cserial_no 
		LEFT OUTER JOIN dsoi ON mstock.stock_id = dsoi.cserial_no 
		LEFT OUTER JOIN mmgroup ON mstock.mgroup_id = mmgroup.mgroup_id 
		LEFT OUTER JOIN  vmimport ON mstock.stock_id = vmimport.cserial_no_rf 
		left outer join mbc on mstock.customer = mbc.bc_id
    )
    SELECT * 
    FROM CTE
    WHERE RowNum BETWEEN @offset + 1 AND @offset + @size;
END

所以有没有可以优化search的方法？因为数据有7万多个，我要找一个数据需要很久的时间，有没有更加快速的方法？
```

```
USE [InfoHSA]
GO
/****** Object:  StoredProcedure [dbo].[api_getAllMstock_page]    Script Date: 27/03/2025 2:57:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[api_getAllMstock_page] 
    @page INT = 1,
    @size INT = 100 
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @offset INT;
    SET @offset = (@page - 1) * @size;

    WITH CTE AS (
      --  SELECT *, ROW_NUMBER() OVER (ORDER BY createdt DESC) AS RowNum
     --   FROM mstock
	 select mstock.stock_id, mstock.internal_id, mstock.item_id, mstock.mgroup_id, 
		mstock.quot_id, mstock.ddate, mstock.po_id, mstock.vendor, mstock.status, mstock.so_id,
		mstock.location, mstock.p_status,mstock.remark, mstock.contra, mstock.customer, 
		mstock.createby, mstock.createdt, mstock.timemark, mitem.category, 
		mmgroup.make, dsoi.allc_id, dsoi.engine_id, dsoi.eserial_no, dsoi.ap_status, 
		vmimport.ap_id, vreg_no.reg_no,
		ROW_NUMBER() OVER (ORDER BY mstock.createdt DESC) AS RowNum
		from mstock INNER JOIN mitem ON mstock.item_id = mitem.item_id 
		INNER JOIN vreg_no ON mstock.stock_id = vreg_no.cserial_no 
		LEFT OUTER JOIN dsoi ON mstock.stock_id = dsoi.cserial_no 
		LEFT OUTER JOIN mmgroup ON mstock.mgroup_id = mmgroup.mgroup_id 
		LEFT OUTER JOIN  vmimport ON mstock.stock_id = vmimport.cserial_no_rf 
    )
    SELECT * 
    FROM CTE
    WHERE RowNum BETWEEN @offset + 1 AND @offset + @size;
END
```

```
USE [InfoHSA]
GO
/****** Object:  StoredProcedure [dbo].[api_getAllMstock_page]    Script Date: 27/03/2025 2:57:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[api_getAllMstock_page] 
    @page INT = 1,
    @size INT = 100 
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @offset INT;
    SET @offset = (@page - 1) * @size;

    WITH CTE AS (
      --  SELECT *, ROW_NUMBER() OVER (ORDER BY createdt DESC) AS RowNum
     --   FROM mstock
	 select mstock.stock_id, mstock.internal_id, mstock.item_id, mstock.mgroup_id, 
		mstock.quot_id, mstock.ddate, mstock.po_id, mstock.vendor, mstock.status, mstock.so_id,
		mstock.location, mstock.p_status,mstock.remark, mstock.contra, mstock.customer, 
		mstock.createby, mstock.createdt, mstock.timemark, mitem.category, 
		mmgroup.make, dsoi.allc_id, dsoi.engine_id, dsoi.eserial_no, dsoi.ap_status, 
		vmimport.ap_id, vreg_no.reg_no,
		ROW_NUMBER() OVER (ORDER BY mstock.createdt DESC) AS RowNum
		from mstock INNER JOIN mitem ON mstock.item_id = mitem.item_id 
		INNER JOIN vreg_no ON mstock.stock_id = vreg_no.cserial_no 
		LEFT OUTER JOIN dsoi ON mstock.stock_id = dsoi.cserial_no 
		LEFT OUTER JOIN mmgroup ON mstock.mgroup_id = mmgroup.mgroup_id 
		LEFT OUTER JOIN  vmimport ON mstock.stock_id = vmimport.cserial_no_rf 
    )
    SELECT * 
    FROM CTE
    WHERE RowNum BETWEEN @offset + 1 AND @offset + @size;
END
```



```
ALTER PROCEDURE [dbo].[api_getAllMstock_page]
    @page INT = 1,
    @size INT = 100,
    @search NVARCHAR(255) = NULL
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @offset INT;
    SET @offset = (@page - 1) * @size;

    -- 查询
    WITH CTE AS (
        SELECT 
            mstock.stock_id, mstock.internal_id, mstock.item_id, mstock.mgroup_id, 
            mstock.quot_id, mstock.ddate, mstock.po_id, mstock.vendor, mstock.status, mstock.so_id,
            mstock.location, mstock.p_status, mstock.remark, mstock.contra, mstock.customer, 
            mstock.createby, mstock.createdt, mstock.timemark, mitem.category, 
            mmgroup.make, dsoi.allc_id, dsoi.engine_id, dsoi.eserial_no, dsoi.ap_status, 
            vmimport.ap_id, vreg_no.reg_no,
            ROW_NUMBER() OVER (ORDER BY mstock.createdt DESC) AS RowNum
        FROM mstock 
        INNER JOIN mitem ON mstock.item_id = mitem.item_id 
        INNER JOIN vreg_no ON mstock.stock_id = vreg_no.cserial_no 
        LEFT OUTER JOIN dsoi ON mstock.stock_id = dsoi.cserial_no 
        LEFT OUTER JOIN mmgroup ON mstock.mgroup_id = mmgroup.mgroup_id 
        LEFT OUTER JOIN vmimport ON mstock.stock_id = vmimport.cserial_no_rf 
        WHERE 
            (@search IS NULL OR 
            (mstock.stock_id LIKE @search + '%' OR  
             mstock.item_id LIKE @search + '%' OR
             mstock.mgroup_id LIKE @search + '%' OR
             mstock.customer LIKE @search + '%')) 
    )
    SELECT * 
    FROM CTE
    WHERE RowNum BETWEEN @offset + 1 AND @offset + @size;
END
```

```
可以了，现在美化Home Page的设计，Quick Actions 不需要，可以删除，美化所有，要专业的UIUX设计

美化 WeightCert List page, Plans List page, Chassis Movement List page

只是美化而已，要专业的，世界级的！设计！！！！！！
```

```
USE [InfoHSA]
GO
/****** Object:  StoredProcedure [dbo].[api_getAllMstock_page]    Script Date: 28/03/2025 12:09:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[api_getAllMstock_page] 
    @page INT = 1,
    @size INT = 300 
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @offset INT;
    SET @offset = (@page - 1) * @size;

    WITH CTE AS (
      --  SELECT *, ROW_NUMBER() OVER (ORDER BY createdt DESC) AS RowNum
     --   FROM mstock
	 select mstock.stock_id, mstock.internal_id, mstock.item_id, mstock.mgroup_id, 
		mstock.quot_id, mstock.ddate, mstock.po_id, mstock.vendor, mstock.status, mstock.so_id,
		mstock.location, mstock.p_status,mstock.remark, mstock.contra, mstock.customer, 
		mstock.createby, mstock.createdt, mstock.timemark, mitem.category, 
		mmgroup.make, dsoi.allc_id, dsoi.engine_id, dsoi.eserial_no, dsoi.ap_status, 
		vmimport.ap_id, vreg_no.reg_no,mbc.bc_if,
		ROW_NUMBER() OVER (ORDER BY mstock.createdt DESC) AS RowNum
		from mstock INNER JOIN mitem ON mstock.item_id = mitem.item_id 
		INNER JOIN vreg_no ON mstock.stock_id = vreg_no.cserial_no 
		LEFT OUTER JOIN dsoi ON mstock.stock_id = dsoi.cserial_no 
		LEFT OUTER JOIN mmgroup ON mstock.mgroup_id = mmgroup.mgroup_id 
		LEFT OUTER JOIN  vmimport ON mstock.stock_id = vmimport.cserial_no_rf 
		left outer join mbc on mstock.customer = mbc.bc_id
		where mstock.createdt > '20140101' 
    )
    SELECT * 
    FROM CTE
    WHERE RowNum BETWEEN @offset + 1 AND @offset + @size
	order by cte.createdt asc;
END
```

```
1. 我在search的时候遇到 iterator method is not callable 的错误，修复

是在CMHListing.js的search
```

```
1. Home page 的 navigation的颜色换，我的logo是蓝和红色，你放蓝色的话，我的logo就看不见了,还有navigation的铃铛icon不要了，没用到。

2. 然后 weight cert list 换 红色， plan 换 黑色， chassis movement 换 蓝色

3. 然后每一个 weight cert, plan, chassis 的detail界面，上面的navigation颜色记得也要换
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
 (item.stock_id && item.stock_id.toString().toLowerCase().includes(searchLower)) ||
      (item.item_id && item.item_id.toString().toLowerCase().includes(searchLower)) ||
      (item.mgroup_id && item.mgroup_id.toString().toLowerCase().includes(searchLower)) ||
      (item.customer && item.customer.toString().toLowerCase().includes(searchLower)) ||
      (item.status && item.status.toString().toLowerCase().includes(searchLower)) ||
      (item.location && item.location.toString().toLowerCase().includes(searchLower)) ||
      (item.createdt && new Date(item.createdt).toLocaleDateString().toLowerCase().includes(searchLower))
```

```
weightcert 的颜色是 #F43F5E', '#FB7185

plan 的颜色是 #0F172A', '#334155

chassis 的颜色是 #2563EB', '#3B82F6

Login.js 的界面设计也要专业的设计，专业的UIUX
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
zhangsan
123444
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
soi_id
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

```
api_getMchassismh
api_getSOQ
api_getChasissfile
```

```
用get还是post?

我只需要提供stock_id, 例如stock_id是*YV2A4DAC6XC761283*

完整的api是http://10.10.10.14:5000/chassismh/*YV2A4DAC6XC761283*

你先处理chassismh.service

我要去postman看有没有data 

属于放两个就可以了
var id = res.recordset[i].id;
var chassismh_id = res.recordset[i].chassismh_id;
```

```
ok，hsaapi项目已经好了

1. 
expo@52.0.40 - expected version: ~52.0.41
更新

2. 
接下来开发React Native 的项目，设计，Chassis Movement History (CMH)
一样有list page，detail page， detail page 和 Weighy Certificate 一样 有 Main, Chassis, Details
设计跟其他List page一样，但是这个cmh的 list page design就不一样，因为这个cmh有77008数据，我希望你可以一次加载10，有更多的按钮，按一次加载10个这样。

设计两个page，cmh的 list page, details page
```

```
数据太多了

如果search的话怎么办？

More按钮？
```

```
CREATE PROCEDURE [dbo].[api_getAllMstock_page] 
    @page INT = 1,
    @size INT = 100 
AS
BEGIN
    SET NOCOUNT ON;

    SELECT * 
    FROM mstock
    ORDER BY createdt DESC
    OFFSET (@page - 1) * @size ROWS FETCH NEXT @size ROWS ONLY;
END
```

```
CREATE PROCEDURE [dbo].[api_getAllMstock_page] 
    @page INT = 1,
    @size INT = 100 
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @offset INT;
    SET @offset = (@page - 1)

    SELECT * 
    FROM mstock
    ORDER BY createdt DESC
    OFFSET @offset ROWS FETCH NEXT @size ROWS ONLY;
END
```

```
还是一样啊

{
    "message": "page is not defined"
}

============
我的node api 代码

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sql = require('mssql');

const { secret } = require('config.json');
const db = require('_helpers/db');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    const conn = await db.getConnection();
    const res = await conn.request()
        .input('page', sql.Int, page)
        .input('size', sql.Int, size)
        .execute("api_getAllMstock_page");
   
    var mstock = new Array();
    
    for (var i = 0; i < res.recordset.length; i++) {
        var id = res.recordset[i].id;
        var stock_id = res.recordset[i].stock_id;
        var internal_id = res.recordset[i].internal_id;
        var item_id = res.recordset[i].item_id;
        var mgroup_id = res.recordset[i].mgroup_id;
        var fg_id = res.recordset[i].fg_id;
   
        
        mstock.push({
            'id': id, 
            'stock_id': stock_id, 
            'internal_id': internal_id,
            'item_id': item_id,
            'mgroup_id': mgroup_id,
            'fg_id': fg_id,
           
        });
    }
    
    return mstock;
}

async function getById(id) {
    const conn = await db.getConnection();
    const res = await conn.request()
        .input('id', id)
        .execute("api_getmstockbychassis");
   
    if (res.recordset.length != 1) {
        throw 'Record not found';
    }
    
    var item = res.recordset[0];
    
    return {
        'id': item.id, 
        'stock_id': item.stock_id, 
        'internal_id': item.internal_id,
        'item_id': item.item_id,
        'mgroup_id': item.mgroup_id,
        'fg_id': item.fg_id,
        'quot_id': item.quot_id,
        'ddate': item.ddate,
        'po_id': item.po_id,
        'poi_id': item.poi_id,
        'vendor': item.vendor,
        'status': item.status
    };
}

async function create(params) {
    const conn = await db.getConnection();
    const result = await conn.request()
        .input('stock_id', params.stock_id)
        .input('internal_id', params.internal_id)
        .input('item_id', params.item_id)
        .input('mgroup_id', params.mgroup_id)
        .input('fg_id', params.fg_id)
        .input('quot_id', params.quot_id)
        .input('ddate', params.ddate)
        .input('po_id', params.po_id)
        .input('poi_id', params.poi_id)
        .input('vendor', params.vendor)
        .input('status', params.status)
        .execute("api_createmstock");
    return result.recordset[0];
}

async function update(id, params) {
    const conn = await db.getConnection();
    const result = await conn.request()
        .input('id', id)
        .input('stock_id', params.stock_id)
        .input('internal_id', params.internal_id)
        .input('item_id', params.item_id)
        .input('mgroup_id', params.mgroup_id)
        .input('fg_id', params.fg_id)
        .input('quot_id', params.quot_id)
        .input('ddate', params.ddate)
        .input('po_id', params.po_id)
        .input('poi_id', params.poi_id)
        .input('vendor', params.vendor)
        .input('status', params.status)
        .execute("api_updatemstock");
    return result.rowsAffected[0];
}

async function _delete(id) {
    const conn = await db.getConnection();
    const result = await conn.request()
        .input('id', id)
        .execute("api_deletemstock");
    return result.rowsAffected[0];
}

=====

sql build api 写法

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[api_getAllMstock_page] 
    @page INT = 1,
    @size INT = 100 
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @offset INT;
    SET @offset = (@page - 1) * @size;

    WITH CTE AS (
        SELECT *, ROW_NUMBER() OVER (ORDER BY createdt DESC) AS RowNum
        FROM mstock
    )
    SELECT * 
    FROM CTE
    WHERE RowNum BETWEEN @offset + 1 AND @offset + @size;
END
GO

=====

postman的
http://10.10.10.14:5000/cmh?page=1&size=50

我在postman得到
{
    "message": "page is not defined"
}

怎么解决
```

```
node api 的代码

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sql = require('mssql');

const { secret } = require('config.json');
const db = require('_helpers/db');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    const conn = await db.getConnection();
    const res = await conn.request()
    .input('page', sql.Int, page)  // 传入 page 参数
    .input('size', sql.Int, size)  // 传入 size 参数
    .execute("api_getAllMstock_page");
   
    var mstock = new Array();
    
    for (var i = 0; i < res.recordset.length; i++) {
        var id = res.recordset[i].id;
        var stock_id = res.recordset[i].stock_id;
        var internal_id = res.recordset[i].internal_id;
        
        mstock.push({
            'id': id, 
            'stock_id': stock_id, 
            'internal_id': internal_id
        });
    }
    
    return mstock;
}

async function getById(id) {
    const conn = await db.getConnection();
    const res = await conn.request()
        .input('id', id)
        .execute("api_getmstockbychassis");
   
    if (res.recordset.length != 1) {
        throw 'Record not found';
    }
    
    var item = res.recordset[0];
    
    return {
        'id': item.id, 
        'stock_id': item.stock_id, 
        'internal_id': item.internal_id,
        'item_id': item.item_id,
        'mgroup_id': item.mgroup_id,
        'fg_id': item.fg_id,
        'quot_id': item.quot_id,
        'ddate': item.ddate,
        'po_id': item.po_id,
        'poi_id': item.poi_id,
        'vendor': item.vendor,
        'status': item.status
    };
}

async function create(params) {
    const conn = await db.getConnection();
    const result = await conn.request()
        .input('stock_id', params.stock_id)
        .input('internal_id', params.internal_id)
        .input('item_id', params.item_id)
        .input('mgroup_id', params.mgroup_id)
        .input('fg_id', params.fg_id)
        .input('quot_id', params.quot_id)
        .input('ddate', params.ddate)
        .input('po_id', params.po_id)
        .input('poi_id', params.poi_id)
        .input('vendor', params.vendor)
        .input('status', params.status)
        .execute("api_createmstock");
    return result.recordset[0];
}

async function update(id, params) {
    const conn = await db.getConnection();
    const result = await conn.request()
        .input('id', id)
        .input('stock_id', params.stock_id)
        .input('internal_id', params.internal_id)
        .input('item_id', params.item_id)
        .input('mgroup_id', params.mgroup_id)
        .input('fg_id', params.fg_id)
        .input('quot_id', params.quot_id)
        .input('ddate', params.ddate)
        .input('po_id', params.po_id)
        .input('poi_id', params.poi_id)
        .input('vendor', params.vendor)
        .input('status', params.status)
        .execute("api_updatemstock");
    return result.rowsAffected[0];
}

async function _delete(id) {
    const conn = await db.getConnection();
    const result = await conn.request()
        .input('id', id)
        .execute("api_deletemstock");
    return result.rowsAffected[0];
}

==

sql build api
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[api_getAllMstock_page] 
    @page INT = 1,
    @size INT = 100 
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @offset INT;
    SET @offset = (@page - 1) * @size;

    WITH CTE AS (
        SELECT *, ROW_NUMBER() OVER (ORDER BY createdt DESC) AS RowNum
        FROM mstock
    )
    SELECT * 
    FROM CTE
    WHERE RowNum BETWEEN @offset + 1 AND @offset + @size;
END
GO

====

postman的api=http://10.10.10.14:5000/cmh?page=1&size=50

{
    "message": "page is not defined"
}
得到错误，怎么解决？

```

```
我已经修改了CMHlisting page，接下来你修改，

1. search filter：
stock_id
item_id
mgroup_id
customer
status
location
createdt

2. 改CMHListing 点击后去PlanDetails，我要去CMHDetails,传的data也要改，看CMHDETAILs怎么拿data
```

```
修改 进入CMHDetails
点击Chassis Movement History 的 item 进入 details后，我需要用 stock_id 来找data

第一个界面 Chassis的api是http://10.10.10.14:5000/chassismh/*YV2A4DAC6XC761283*
*YV2A4DAC6XC761283*是example的stock_id

第二个界面的History api是有两个api
http://10.10.10.14:5000/dsoi/*YV2A4DAC6XC761283*
http://10.10.10.14:5000/quote/*YV2A4DAC6XC761283*

第三个Picture是
http://10.10.10.14:5000/chassisfile/BU212-0001474
BU212-0001474是stock_id
```

```
修改 Main界面的

一开始用stock_id 去找 http://10.10.10.14:5000/chassismh/*YV2A4DAC6XC761283*

然后一开始有默认的Main Information的box

在这里用stock_id 找到api，假如一共找到有三个data
你就在Main information box下面创建三个box，用户可以点击进入看详细信息的。

这个box显示 cmh.chassismh_id 和 cmd.ddate
然后有一个>的icon，告诉让用户知道这是可以点击进去的.

然后开新的界面，里面就只有一页而已，也是一个box，记得我点击进去的那个data,就那一行全部data转给那一页
```

```
ALTER PROCEDURE [dbo].[api_getAllMstock_page] 
    @page INT = 1,
    @size INT = 100 
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @offset INT;
    SET @offset = (@page - 1) * @size;

    WITH CTE AS (
        SELECT 
            mstock.stock_id, 
            mstock.internal_id, 
            mstock.item_id, 
            mstock.mgroup_id, 
            mstock.quot_id, 
            mstock.ddate, 
            mstock.po_id, 
            mstock.vendor, 
            mstock.status, 
            mstock.so_id,
            mstock.location, 
            mstock.p_status, 
            mstock.remark, 
            mstock.contra, 
            mstock.customer, -- here curtomer data is BC19-00096
            mstock.createby, 
            mstock.createdt, 
            mstock.timemark, 
            mitem.category, 
            mmgroup.make, 
            dsoi.allc_id, 
            dsoi.engine_id, 
            dsoi.eserial_no, 
            dsoi.ap_status, 
            vmimport.ap_id, 
            vreg_no.reg_no,
            ROW_NUMBER() OVER (ORDER BY mstock.createdt DESC) AS RowNum
        FROM mstock 
        INNER JOIN mitem ON mstock.item_id = mitem.item_id 
        INNER JOIN vreg_no ON mstock.stock_id = vreg_no.cserial_no 
        LEFT OUTER JOIN dsoi ON mstock.stock_id = dsoi.cserial_no 
        LEFT OUTER JOIN mmgroup ON mstock.mgroup_id = mmgroup.mgroup_id 
        LEFT OUTER JOIN vmimport ON mstock.stock_id = vmimport.cserial_no_rf 
    )
    SELECT * 
    FROM CTE
    WHERE RowNum BETWEEN @offset + 1 AND @offset + @size;
END;


======

I need customer all name, example:LAHAD DATU AUTO PARTS SDN BHD, you can change name to customer_n
```

```
api_getmstockbychassis

also need to add
```

```
接下来弄History的部分

有两个部分，一个是Quot,一个是SO

假如有很多quoteData,也是一样弄title是 Quot, 然后显示 quot_id， 可以点击进入的，就是也要开新的界面，显示这个 quot的detail

SO也是一样，so是dsoiData

一样，没有data就显示 No data
```

```
dsoi table no this date data
```



### 信息

```
1. dquoti 如果是null，就不要弄出来
```



```
复制node 项目 去 30 ， 启动， 拿vp看看能不能
```

```
http://10.10.10.14:5000/users/authenticate
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

```
mchassismh

chassismh_id
stock_id
ddate
location
jobi_id
chassism_id
movement
status
info1
info2
remark
sdo_id
after_do
createby
createdt
timemark
identitymark

var chassismh_id = res.recordset[i].chassismh_id;
var stock_id = res.recordset[i].stock_id;
var ddate = res.recordset[i].ddate;
var location = res.recordset[i].location;
var jobi_id = res.recordset[i].jobi_id;
var chassism_id = res.recordset[i].chassism_id;
var movement = res.recordset[i].movement;
var status = res.recordset[i].status;
var info1 = res.recordset[i].info1;
var info2 = res.recordset[i].info2;
var remark = res.recordset[i].remark;
var sdo_id = res.recordset[i].sdo_id;
var after_do = res.recordset[i].after_do;
var createby = res.recordset[i].createby;
var createdt = res.recordset[i].createdt;
var timemark = res.recordset[i].timemark;
var identitymark = res.recordset[i].identitymark;

====


 'chassismh_id': chassismh_id,
    'stock_id': stock_id,
    'ddate': ddate,
    'location': location,
    'jobi_id': jobi_id,
    'chassism_id': chassism_id,
    'movement': movement,
    'status': status,
    'info1': info1,
    'info2': info2,
    'remark': remark,
    'sdo_id': sdo_id,
    'after_do': after_do,
    'createby': createby,
    'createdt': createdt,
    'timemark': timemark,
    'identitymark': identitymark
```

```
dsoi

soi_id
so_id
seq
nature
item_id
item_desc
make
mgroup_id
engine_id
cc
model_id
wheelbase
bdm
axle
cserial_no
eserial_no
plan_id
body_type
cabin_colour
tyre_type
cyear
qty
uom
guprice
disc_price
uprice
subtotal
deliverydt
job_id
status
b_ass
b_assdt
b_assby
completeby
completedt
fg_complete
fg_completeby
fg_completedt
qty_ship
qty_bill
remark
remark2
oaxle
owheelbase
rebuilt_header
myear
ori_condition
condition
change_con
application
startdt
version
body_grp
obody_grp
fueltype
reserve
reserveby
reservedt
allc_id
service
contra
ege_status
ap_status
transmission
volvo_version
bahan_bakar
dum_type
enter
selectbit
do_wheelbase
do_axle
do_cyear
include_cn
batch_no
batch_no_pk
createby
createdt
timemark
identitymark

把以上的换成
'stock_id': stock_id, 


var soi_id = res.recordset[i].soi_id;
var so_id = res.recordset[i].so_id;
var seq = res.recordset[i].seq;
var nature = res.recordset[i].nature;
var item_id = res.recordset[i].item_id;
var item_desc = res.recordset[i].item_desc;
var make = res.recordset[i].make;
var mgroup_id = res.recordset[i].mgroup_id;
var engine_id = res.recordset[i].engine_id;
var cc = res.recordset[i].cc;
var model_id = res.recordset[i].model_id;
var wheelbase = res.recordset[i].wheelbase;
var bdm = res.recordset[i].bdm;
var axle = res.recordset[i].axle;
var cserial_no = res.recordset[i].cserial_no;
var eserial_no = res.recordset[i].eserial_no;
var plan_id = res.recordset[i].plan_id;
var body_type = res.recordset[i].body_type;
var cabin_colour = res.recordset[i].cabin_colour;
var tyre_type = res.recordset[i].tyre_type;
var cyear = res.recordset[i].cyear;
var qty = res.recordset[i].qty;
var uom = res.recordset[i].uom;
var guprice = res.recordset[i].guprice;
var disc_price = res.recordset[i].disc_price;
var uprice = res.recordset[i].uprice;
var subtotal = res.recordset[i].subtotal;
var deliverydt = res.recordset[i].deliverydt;
var job_id = res.recordset[i].job_id;
var status = res.recordset[i].status;
var b_ass = res.recordset[i].b_ass;
var b_assdt = res.recordset[i].b_assdt;
var b_assby = res.recordset[i].b_assby;
var completeby = res.recordset[i].completeby;
var completedt = res.recordset[i].completedt;
var fg_complete = res.recordset[i].fg_complete;
var fg_completeby = res.recordset[i].fg_completeby;
var fg_completedt = res.recordset[i].fg_completedt;
var qty_ship = res.recordset[i].qty_ship;
var qty_bill = res.recordset[i].qty_bill;
var remark = res.recordset[i].remark;
var remark2 = res.recordset[i].remark2;
var oaxle = res.recordset[i].oaxle;
var owheelbase = res.recordset[i].owheelbase;
var rebuilt_header = res.recordset[i].rebuilt_header;
var myear = res.recordset[i].myear;
var ori_condition = res.recordset[i].ori_condition;
var condition = res.recordset[i].condition;
var change_con = res.recordset[i].change_con;
var application = res.recordset[i].application;
var startdt = res.recordset[i].startdt;
var version = res.recordset[i].version;
var body_grp = res.recordset[i].body_grp;
var obody_grp = res.recordset[i].obody_grp;
var fueltype = res.recordset[i].fueltype;
var reserve = res.recordset[i].reserve;
var reserveby = res.recordset[i].reserveby;
var reservedt = res.recordset[i].reservedt;
var allc_id = res.recordset[i].allc_id;
var service = res.recordset[i].service;
var contra = res.recordset[i].contra;
var ege_status = res.recordset[i].ege_status;
var ap_status = res.recordset[i].ap_status;
var transmission = res.recordset[i].transmission;
var volvo_version = res.recordset[i].volvo_version;
var bahan_bakar = res.recordset[i].bahan_bakar;
var dum_type = res.recordset[i].dum_type;
var enter = res.recordset[i].enter;
var selectbit = res.recordset[i].selectbit;
var do_wheelbase = res.recordset[i].do_wheelbase;
var do_axle = res.recordset[i].do_axle;
var do_cyear = res.recordset[i].do_cyear;
var include_cn = res.recordset[i].include_cn;
var batch_no = res.recordset[i].batch_no;
var batch_no_pk = res.recordset[i].batch_no_pk;
var createby = res.recordset[i].createby;
var createdt = res.recordset[i].createdt;
var timemark = res.recordset[i].timemark;
var identitymark = res.recordset[i].identitymark;

==

'soi_id': soi_id,
    'so_id': so_id,
    'seq': seq,
    'nature': nature,
    'item_id': item_id,
    'item_desc': item_desc,
    'make': make,
    'mgroup_id': mgroup_id,
    'engine_id': engine_id,
    'cc': cc,
    'model_id': model_id,
    'wheelbase': wheelbase,
    'bdm': bdm,
    'axle': axle,
    'cserial_no': cserial_no,
    'eserial_no': eserial_no,
    'plan_id': plan_id,
    'body_type': body_type,
    'cabin_colour': cabin_colour,
    'tyre_type': tyre_type,
    'cyear': cyear,
    'qty': qty,
    'uom': uom,
    'guprice': guprice,
    'disc_price': disc_price,
    'uprice': uprice,
    'subtotal': subtotal,
    'deliverydt': deliverydt,
    'job_id': job_id,
    'status': status,
    'b_ass': b_ass,
    'b_assdt': b_assdt,
    'b_assby': b_assby,
    'completeby': completeby,
    'completedt': completedt,
    'fg_complete': fg_complete,
    'fg_completeby': fg_completeby,
    'fg_completedt': fg_completedt,
    'qty_ship': qty_ship,
    'qty_bill': qty_bill,
    'remark': remark,
    'remark2': remark2,
    'oaxle': oaxle,
    'owheelbase': owheelbase,
    'rebuilt_header': rebuilt_header,
    'myear': myear,
    'ori_condition': ori_condition,
    'condition': condition,
    'change_con': change_con,
    'application': application,
    'startdt': startdt,
    'version': version,
    'body_grp': body_grp,
    'obody_grp': obody_grp,
    'fueltype': fueltype,
    'reserve': reserve,
    'reserveby': reserveby,
    'reservedt': reservedt,
    'allc_id': allc_id,
    'service': service,
    'contra': contra,
    'ege_status': ege_status,
    'ap_status': ap_status,
    'transmission': transmission,
    'volvo_version': volvo_version,
    'bahan_bakar': bahan_bakar,
    'dum_type': dum_type,
    'enter': enter,
    'selectbit': selectbit,
    'do_wheelbase': do_wheelbase,
    'do_axle': do_axle,
    'do_cyear': do_cyear,
    'include_cn': include_cn,
    'batch_no': batch_no,
    'batch_no_pk': batch_no_pk,
    'createby': createby,
    'createdt': createdt,
    'timemark': timemark,
    'identitymark': identitymark
```

```
dquoti

quoti_id
quot_id
seq
nature
item_id
item_desc
make
mgroup_id
engine_id
cc
model_id
wheelbase
bdm
axle
cserial_no
eserial_no
plan_id
body_type
cabin_colour
tyre_type
cyear
uom
guprice
disc_price
uprice
subtotal
deliverydt
job_id
status
remark
rebuilt_header
myear
condition
application
version
body_grp
createby
createdt
timemark
identitymark


把以上的换成
var createby = res.recordset[i].createby;



var quoti_id = res.recordset[i].quoti_id;
var quot_id = res.recordset[i].quot_id;
var seq = res.recordset[i].seq;
var nature = res.recordset[i].nature;
var item_id = res.recordset[i].item_id;
var item_desc = res.recordset[i].item_desc;
var make = res.recordset[i].make;
var mgroup_id = res.recordset[i].mgroup_id;
var engine_id = res.recordset[i].engine_id;
var cc = res.recordset[i].cc;
var model_id = res.recordset[i].model_id;
var wheelbase = res.recordset[i].wheelbase;
var bdm = res.recordset[i].bdm;
var axle = res.recordset[i].axle;
var cserial_no = res.recordset[i].cserial_no;
var eserial_no = res.recordset[i].eserial_no;
var plan_id = res.recordset[i].plan_id;
var body_type = res.recordset[i].body_type;
var cabin_colour = res.recordset[i].cabin_colour;
var tyre_type = res.recordset[i].tyre_type;
var cyear = res.recordset[i].cyear;
var uom = res.recordset[i].uom;
var guprice = res.recordset[i].guprice;
var disc_price = res.recordset[i].disc_price;
var uprice = res.recordset[i].uprice;
var subtotal = res.recordset[i].subtotal;
var deliverydt = res.recordset[i].deliverydt;
var job_id = res.recordset[i].job_id;
var status = res.recordset[i].status;
var remark = res.recordset[i].remark;
var rebuilt_header = res.recordset[i].rebuilt_header;
var myear = res.recordset[i].myear;
var condition = res.recordset[i].condition;
var application = res.recordset[i].application;
var version = res.recordset[i].version;
var body_grp = res.recordset[i].body_grp;
var createby = res.recordset[i].createby;
var createdt = res.recordset[i].createdt;
var timemark = res.recordset[i].timemark;
var identitymark = res.recordset[i].identitymark;


===


 'quoti_id': quoti_id,
    'quot_id': quot_id,
    'seq': seq,
    'nature': nature,
    'item_id': item_id,
    'item_desc': item_desc,
    'make': make,
    'mgroup_id': mgroup_id,
    'engine_id': engine_id,
    'cc': cc,
    'model_id': model_id,
    'wheelbase': wheelbase,
    'bdm': bdm,
    'axle': axle,
    'cserial_no': cserial_no,
    'eserial_no': eserial_no,
    'plan_id': plan_id,
    'body_type': body_type,
    'cabin_colour': cabin_colour,
    'tyre_type': tyre_type,
    'cyear': cyear,
    'uom': uom,
    'guprice': guprice,
    'disc_price': disc_price,
    'uprice': uprice,
    'subtotal': subtotal,
    'deliverydt': deliverydt,
    'job_id': job_id,
    'status': status,
    'remark': remark,
    'rebuilt_header': rebuilt_header,
    'myear': myear,
    'condition': condition,
    'application': application,
    'version': version,
    'body_grp': body_grp,
    'createby': createby,
    'createdt': createdt,
    'timemark': timemark,
    'identitymark': identitymark
```

```
mitem_file

pk
doctype
cserial_no
make
mgroup_id
engine_id
axle
plan_id
body_grp
makei_pk
body_type
body_desc
file_path
file_version
prev_pk
file_desc
createby
createdt
modifyby
modifydt
status
timemark
identitymark


把以上的换成



var pk = res.recordset[i].pk;
var doctype = res.recordset[i].doctype;
var cserial_no = res.recordset[i].cserial_no;
var make = res.recordset[i].make;
var mgroup_id = res.recordset[i].mgroup_id;
var engine_id = res.recordset[i].engine_id;
var axle = res.recordset[i].axle;
var plan_id = res.recordset[i].plan_id;
var body_grp = res.recordset[i].body_grp;
var makei_pk = res.recordset[i].makei_pk;
var body_type = res.recordset[i].body_type;
var body_desc = res.recordset[i].body_desc;
var file_path = res.recordset[i].file_path;
var file_version = res.recordset[i].file_version;
var prev_pk = res.recordset[i].prev_pk;
var file_desc = res.recordset[i].file_desc;
var createby = res.recordset[i].createby;
var createdt = res.recordset[i].createdt;
var modifyby = res.recordset[i].modifyby;
var modifydt = res.recordset[i].modifydt;
var status = res.recordset[i].status;
var timemark = res.recordset[i].timemark;
var identitymark = res.recordset[i].identitymark;

===

'pk': pk,
    'doctype': doctype,
    'cserial_no': cserial_no,
    'make': make,
    'mgroup_id': mgroup_id,
    'engine_id': engine_id,
    'axle': axle,
    'plan_id': plan_id,
    'body_grp': body_grp,
    'makei_pk': makei_pk,
    'body_type': body_type,
    'body_desc': body_desc,
    'file_path': file_path,
    'file_version': file_version,
    'prev_pk': prev_pk,
    'file_desc': file_desc,
    'createby': createby,
    'createdt': createdt,
    'modifyby': modifyby,
    'modifydt': modifydt,
    'status': status,
    'timemark': timemark,
    'identitymark': identitymark
```

