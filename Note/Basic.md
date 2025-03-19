```
holidays
打卡

```

```
Update npm
Update node
Install ssms
Configuration outlook
Configuration git
Install git
Install typora
Install zip
Install Visual Studio 2022

```

```
ssms: hsonline
```

```
(?PKValue)
(?FindState_Id)
(?FindState_If)
```

```
Data Builder
	- ACCOUNT_RM
	 - Find Object
```

```
SQL build same name
	- task
```

### ======

### Add k1 no

```
(Account)
Data Build
	- ACCOUNT_RN
		- Find Object
			- (右键)Modify
	- （Back）ACCOUNT
		- Find Database Name -> Designer (出现model)
			- （点击一个位置） Insert -> 输入 （Designer）
			
```

### ======

### Add User

- `Account ERP Add User`

```
Run Application
	- Admin -> Security -> Users
		- 点击 Last 查看最后User的Number（10042），按NEW，输入新的Number（10043）
		- ID输入HOO, FIRST: HOO, STAUTS: AH1, GROUP: AH1 -> 点击OK
		- Admin -> password -> 放大镜Icon搜寻用户，确认第一次密码，
		- 注：用户第一次登入，会要求用户自己更好密码
		
ID: Hoo
P: 0844
```



```
Current Taks:
Install
Learning

```

```
192.1.1.8 -> IT_Documents -> IT -> Program Installation
ERP Testing Account

X:\HSA_ACC
```

```
9096844HWChwc
```

```
电脑已安装
VFP 8
Visual Fox Pro 9
NetAdvantageCOM51
CrystalReport9.2
VPM8 and VPM9

安装
Exgrid4
Janus GridEx
DevExpress
```

```
Instances 界面
	- 下面选择 Security
	- 点击 Security groups
		- Edit inbound rules
```

```
New Remote View
	 - New View
	 - （出现Models） 寻找你要的table
```

```
mtrailer_type2
```

```
SELECT trailer_type_id, trailer_type_if, createby, createdt, modifyby, modifydt FROM mtrailer_type2 WHERE trailer_type_id LIKE ?PKValue and trailer_type_id LIKE ?FindTrailer_Type_Id and trailer_type_if LIKE ?FindTrailer_Type_If

Build的结果：TRAILER_TYPE_ID C(50), TRAILER_TYPE_IF C(100), CREATEBY C(10), CREATEDT T, MODIFYBY C(10), MODIFYDT T
```

```
- Database
	- 创建一个新的Database，名为 HSG
	- 选择 InfoHP 数据库
		- Defaults
			- dbo.def_blank 和 dbo.def_currentdate 右键 -> Script Default as -> CREATE To -> New Q
			- 修改 USE [HSG] -> Execute 执行
		- Tables
			- dbo.acc_ap_inv_cndn_payment 和 dbo.acc_ar_inv_cndn_receipt 右键 -> Script Default as -> CREATE To -> New Q
			- 修改 USE [HSG] -> Execute 执行
		
==/
		
- Security
	- Logins 右键
		- General
			- (出现Models) Login name: HSG
			- 打勾 SQL Server authertication
				- 输入 密码? hsonline
			- 取消打勾 Enforce password policy
			- Default database：HSG
		- User Mapping
			- 打勾 HSG
			- 打勾 db_owner
		- 点击 OK
		
==/

打开 ERP （Account）
	- Copy Project
		- Database 那边点击Find
			- Computer -> D 盘 -> InfoApps -> IHP_ACC -> sacfpjd.pjd
			- (出现Models) New Project: Name: HSG Sdn Bhd (Accounting)
			- Version: 1.01
			- Home Dir: D:\INFOAPPS\HSG_ACC
			- 点击 Copy 
			
- InfoApps (192.168.1.15)(X:) -> IHP_ACC -> 复制 ICONS , UpdateProgram
- 放在 HSG_ACC, Update Program
	- RenewEXE9.PIT 打开
		- (出现Models) Tables -> table_transfe -> 点击 Browse
			- All
				- 修改： HSGACC EXE
				- X:\HSG_ACC\ ; 全部改成 X:\HSG_ACC\ -> 按 x
			- Code
				- 选择 system_main -> modify (出现Models)
					- 把IHPACC.EXE 修改 -> HSGACC.EXE (可以用Find来更改) ，把所有的IHP更改HSG
					- 按 x 保存
				- 选择 system_main -> Build （出现Models）
					- 点击 OK -> Save As 在 UpdateProgram/IHPACC_Application -> 换名字 HSGACC_Application, 保存
		- 全部关闭
			
- 来到192.168.1.15(X) > HSG_ACC > UpdateProgram 删掉 IHPACC Application
- 打开 ERP(A)
	- Find Database
		- Computer/(192.168.1.15)(X:)/HSG_ACC -> sacfpjd.pjd
		- Open (HSG Sdn Bhd (Accounting) 1.01)
- 打开 Control Panel
	- Administrative Tools
		- ODBC Data Source Administrator (32-bit)
		- 点击 System DSN -> 按 Add
			- 点击 SQL Server
			- (出现Models) 
				- Name: HSG, Des: HSG, Server: 192.168.1.15 -> Next
				- Login ID: HSG , Password: ? -> Next
				- 打勾 Change the default database to: HSG -> Next -> Finish
				- 点击 Test Data -> ok -> ok -> ok
- 打开 ERP(A)
	- Open/Close -> 出现信息(Project has been moved make x:\hsg_acc the new home directory) -> 点击 Yes
	- (出现Models) -> saccfman -> Modify
		- (出现Models) NEWREMOTE
		- 修改CASE LOCAL ->
			- catalog=HSG , 两个
			==
			- reportDATABASE=HSG
			- reportPATH=C:\Projects\HSC_ACC\Reports\
		- 修改CASE NEWREMOTE ->
			- uid=HSG
			- User ID=HSG
			- Catalog=HSG
			==
			- reportDATABASE=HSG
			- reportUSER=HSG
			- reportPATH=X:\HSG_ACC\Reports\
		- 修改 OTHERWISE ->
			- uid=HSG
			- User ID=HSG
			- Catalog=HSG
			- catalog=HSG
			==
			- reportDATABASE=HSG
			- reportUSER=HSG
			- reportPATH=X:\HSG_ACC\Reports\
		- 按 x -> 保存
	- 点击[Menu]Data Build
		- ACCOUNT_RM -> Designer(出现Models)
			- 右键 Connections -> Modify (出现Models)
				- Data source:HSG, Userid: HSG, Password: hsonline, Database:HSG
				- 按 Verify Connection (Connection succeeded) -> OK -> Close -> 按 X
	- Build Application -> Run Application
	- 输入 SUPER*** 登入
		- (Menu) File->Exit
	- (Menu) Open/Close
		- Docs -> Saccssa -> Modify
			- 右键 IHP PRIORITY MANAGEMENT SDN BHD -> Properties
				- 把 Capition 旁边 换成 HSG SDN BHD -> X -> X -> Save
	- Build Application
	
- SSMS
	- InfoHP -> Table
	- db0.acc_dept 右键 -> Script Default as -> CREATE To -> New Q
	- 修改 USE [HSG] -> Execute 执行
	
- 再 Build Application and Run
	- 输入 SUPER*** 登入
		- Setup -> Department Setup
			- 按 Menu 里的[白纸]
			- Department #: -, Des: -, Remarks: 空
			- Menu 按保存 -> 按x 关闭Models
			- File -> Exit
			
- SSMS
	- 找到HSG table -> 右键 Q
	- 输入 SELECT * FROM ACC_DEPT
```



```
看图片
找excel文件
现在LDO
```

### Install_SRP (x)

```
- 192.168.1.15(X)
	- Copy [HCV] to CDisk
- Open ODBC Data
	- 选择 System DSN
		- Add
			- SQL Server
			- Name: HCVTruck, Des: HCVTruck, Server: 192.168.1.15 -> Next
			- 打勾 With SQL
			- Login ID: HCVTruck, Pass: hsonline -> Next
			- 打勾 Change the default database to: HCVTruck -> Next -> Finish -> Test Data -> OK
- Back to File
	- Open HCV -> UpdateProgram
		- Click HCV App
```

```
Setup
	- Item Master
	- Name: Mitem.SCX
	- RUN
	
	
VPM Enterprise
Microsoft Visual FoxPro 9
```

```

```



### FoxPro 语法

```
create students
LIST ALL
CLEAR
LIST NAME
LIST NAME, RN
BROWSE
LIST OFF Name 输出（不显示字段名）

SET HEADING OFF
LIST NAME
CLOSE DATABASE
```



```

```





### ===

```
你的 ERP 学习方式
✅ 你需要学习的重点
如何打开和管理 ERP 项目（VPM Enterprise 9.1）
如何编辑 ERP 里的表单（Forms）
如何修改 ERP 数据库（DBF 表、SQL 查询）
如何使用 FoxPro 语法，调整 ERP 业务逻辑
如何运行和测试 ERP 功能
```

```
你的 ERP 可能包含的文件
项目文件（.PJX） → ERP 的 核心
表（.DBF） → 存储数据，比如 客户、订单、库存
表单（.SCX） → ERP 界面的按钮、文本框等
报表（.FRX） → 生成发票、库存报表等
代码（.PRG） → 业务逻辑，比如 订单处理、库存管理
菜单（.MNX） → ERP 里上方的 菜单栏
```



```
1. check full time resigntion need how long to inform HR know
```





