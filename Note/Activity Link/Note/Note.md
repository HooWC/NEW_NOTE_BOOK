### Create New Table

#### Part 1

- Create new table in SSMS and ERP SYSTEM (ACCOUNT)
- Connection data auto save to SSMS
- Create new table `Example` note document

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

==/

- 来到192.168.1.15(X) > HSG_ACC > UpdateProgram 删掉 IHPACC Application

==/

- 打开 ERP(A)
	- Find Database
		- Computer/(192.168.1.15)(X:)/HSG_ACC -> sacfpjd.pjd
		- Open (HSG Sdn Bhd (Accounting) 1.01)
		
==/

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
				
==/

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

==/

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

==/

- SSMS
	- 找到HSG table -> 右键 Q
	- 输入 SELECT * FROM ACC_DEPT
	
- Show Data (Success)
```

#### Part 2

```
==/

- ERP(A)
	- Tools -> Product Builder -> Build EXE
	- EXE Name: HSGACC -> Build
	- File -> Exit

==/

- OPEN 192.168.1.15(X)
	- IHP_ACC
		- Enter REPORTS
			- Copy [Accounting] File
	- HSG_ACC
        - Delete ihpacc
		- Enter REPORTS
			- paste [Accounting] File
				- open [acc_listing]
				- Change Name: LIST OF ACCOUNTS FOR HSG SDN BHD
				- (Menu)Database -> Set Database Location
					- History -> 192.168.1.15
						- User ID: HSG
						- Password: hsonline
						- Database: HSG
						- Next -> Finish
					- Click HSG
						- Click dbo (3 table inside)
							- acc_ap_inv_cndn_payment
							- acc_ar_inv_cndn_receipt
							- acc_dept
						- 选择 acc_ap_inv_cndn_payment -> Update -> Close
				- File -> Exit
```

