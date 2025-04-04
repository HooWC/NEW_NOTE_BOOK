### Setup

```
【Setup】[ERP 9]

1. Item Master (MITEM - Item Master)（1）setup
物品主档管理，记录所有商品或库存物品的信息，如物品编号、名称、类别、成本、供应商信息等。
一般来说，Item Master 主要记录自己公司的库存物品，但这些库存物品可能包括以下几种情况：
采购回来的原材料或商品（从供应商处购买，用于生产或直接销售）
公司自行生产的成品或半成品（工厂制造的产品）
公司用于运营的物品（如办公设备，但这种情况较少）
通常，Item Master 是整个库存管理的基础，无论是买来的还是生产的，都会记录在这里。

2. Item Master (Serialize) (MITEM2 - Item Master For Serialize Item)（2）setup
序列号物品管理，适用于需要唯一序列号跟踪的商品（如电子产品、汽车零件等），确保库存中的每件物品都有唯一编号。

Item Master (Serialize) (MITEM2 - Item Master For Serialize Item) 和 Item Master (MITEM) 的区别？
区别在于“序列号管理”：
Item Master (MITEM) 适用于不需要序列号的普通库存物品，例如螺丝、包装材料等，你只需要记录数量即可。
Item Master (Serialize) (MITEM2) 适用于需要唯一序列号的物品，例如：
电子设备（如电脑、手机，每台设备都有唯一序列号）
机械设备（如发动机、机器部件，每个部件有独立编号）
车辆（每辆车有唯一的 VIN 车架号）

举个例子：
如果你卖的是普通笔记本电脑，可能在 Item Master (MITEM) 记录库存，比如“100台笔记本电脑”。
但如果你卖的是带序列号的笔记本电脑，你需要在 Item Master (Serialize) (MITEM2) 记录每一台的唯一序列号，比如：
SN001 - MacBook Pro 16"
SN002 - MacBook Pro 16"
SN003 - MacBook Pro 16"
这样，系统可以追踪每台设备的历史记录（如维修、更换、销售情况等）。

3. Allocation File (MALLOCATION - Allocation File)（4）setup
分配文件管理，用于分配库存、采购或生产中的物品，确保库存管理的合理性。例如，某个产品的库存应如何分配给不同的仓库或订单。

这个通常用于汽车行业，专门管理车架号（Chassis）和发动机编号（Engine）。
Chassis（车架号，VIN）：每辆车都有一个独一无二的“车架号”（Vehicle Identification Number, VIN），类似于身份证号码。
Engine（发动机编号）：每个发动机也有自己的编号，可以用来追踪具体的发动机型号、来源等信息。
举个例子：
你公司可能是汽车制造商、汽车维修厂，或者是销售二手车的公司。

如果你们是汽车制造商，每辆生产的车都需要有 车架号 和 发动机编号。
如果你们是汽车维修厂，你们可能需要在系统里记录更换的发动机信息。
如果你不是做汽车相关的业务，这个功能可能跟你的工作关系不大。

4. Business Contact (MBC - Master Business Contact)（5）setup
业务联系人管理，存储供应商、客户、合作伙伴的详细信息，如公司名称、联系人、地址、电话等。

5. Chassis & Engine (MSTOCK - Chassis & Engine)（8）setup
车架号和发动机管理，通常用于汽车制造或维修行业，记录车辆的车架号（Chassis）和发动机编号（Engine），确保车辆零部件的正确匹配。

6. Document Master (MDOC - Document Master)（9）setup
文件管理模块，用于存储和管理各种与业务相关的文档，如发票、合同、订单、检验报告等。

7. Document Type (MDOCTYPE - Document Type)（11）setup
文件类型管理，定义不同类别的文件，如采购订单、销售发票、运输单等，使系统能更有效地分类和检索文档。

- 车身类型图片（BODY TYPE PICTURE）
可能是不同车辆车身类型的图片，例如：
轿车（Sedan）
SUV
皮卡（Pickup）
厢式货车（Van）
货柜车（Container Truck）
这些图片可能用于帮助用户在系统中选择车辆类型，比如当用户录入车辆信息时，系统可以显示对应的车身图片。

- 卡车型号图片（TRUCK MODEL PICTURE）
可能是不同卡车型号的图片，例如：
Hino 500 Series
Isuzu NPR75
Scania P-series
Volvo FH16
这些图片用于展示具体的卡车型号，可能和系统里的车辆数据库关联，方便查找特定型号的卡车。
```

### Purchasing

```
【Purchasing】[ERP 9]

1. Purchase Order（PPO - 采购订单）是公司买入还是卖出？
Purchasing -> Purchase Order

采购订单（Purchase Order, PO）是公司向供应商买入物品，所以是公司买入。
采购（Purchasing）就是公司花钱买原材料、零件或商品，以便用于生产或销售。
👉 例子：
公司生产汽车零件，需要购买钢板。

公司向供应商A购买100吨钢板。
供应商A提供报价，公司同意价格后，创建采购订单（PO）。
供应商A收到采购订单后，安排发货，并开具发票。
公司收到钢板后，入库并付款给供应商A。
✅ 总结：

采购订单（PPO）= 公司向外部供应商买东西的订单。
不是卖出，而是买入！

==////////

2. Subcon P/O（PSPO - 外包采购订单）例子
Purchasing -> Subcon P/O

Subcon（Subcontracting）是外包，意思是公司把部分生产流程交给外部供应商处理，然后再取回产品。
👉 例子：
公司生产发动机外壳，但需要外包喷漆。

公司生产了100个发动机外壳，但没有喷漆设备。
公司联系外包供应商B，让他们帮忙喷漆。
公司创建 Subcon P/O（外包采购订单），注明：
发送100个发动机外壳给供应商B。
供应商B负责喷漆，每个收费RM10，总价RM1000。
供应商B完成喷漆后，把外壳送回来，公司付款给供应商B。
✅ 总结：

Subcon P/O = 外包加工的订单（不是买东西，而是买服务）。
PPO 是买原材料，PSPO 是外包加工，两者不同！
```

### Sales

```
【Sales】[ERP 9]

1. Sales Quotation（销售报价）
📌 模块：DQUOT - Sales Quotation Master
📌 作用：用于记录销售报价（客户询价时，提供价格信息）
📌 作用：用于给客户提供报价，确认价格、数量、折扣等信息，但不代表客户一定会购买。

👉 示例：
客户A 询问 100个轮胎 的价格。
公司创建 Sales Quotation（销售报价单），报价 RM 1000/个，总价 RM 100,000。
发送报价给客户A，客户可以接受、拒绝或要求修改报价。
✅ 总结：销售报价只是报价，客户还没正式下单。

👉 流程示例：
客户A向公司询价，想买100个零件。
公司创建销售报价单（Sales Quotation），注明价格、折扣和有效期。
发送报价单给客户A。
客户A同意价格后，公司再创建销售订单（Sales Order）。
✅ 总结：销售报价是销售的第一步，主要用于报价和客户谈判。

2. Sales Order（销售订单）
📌 模块：DSO - Sales Order Master
📌 作用：记录客户的订单，确认交易
📌 作用：当客户确认购买时，创建 Sales Order（销售订单），作为正式交易记录。

👉 流程：
客户A 接受报价，正式下单购买 100个轮胎。
公司创建 Sales Order，记录：
客户信息（客户A）
购买商品（100个轮胎）
总价（RM 100,000）
交货日期（2025-03-22）
订单确认后，仓库准备货物，安排发货。
✅ 总结：Sales Order 是客户确认购买的正式订单，订单完成后才能出货和收款。

👉 流程示例：
客户A接受报价，正式下单购买100个零件。
公司创建销售订单（Sales Order, SO），确认销售的数量、价格和交货日期。
生产或仓库准备货物，安排发货。
订单完成后，财务开具发票给客户A。
✅ 总结：销售订单是客户确认购买后的正式记录，是公司出货和收款的依据。

3. Sales Header（销售订单头部）
📌 模块：MHEADER - Sales Header
📌 作用：存储销售订单的基本信息（如订单编号、客户名称、销售日期等）

👉 示例：
Sales Order No.	Customer	Order Date	Total Amount
SO-001	客户A	2025-03-20	RM 10,000
SO-002	客户B	2025-03-21	RM 15,500
✅ 总结：Sales Header 主要记录订单的整体信息，不会包含具体的商品明细。

4. Sales Description（销售描述）
📌 模块：MSALES_DESC - Sales Description
📌 作用：存储订单的详细产品信息（如商品名称、数量、单价等）

👉 示例（对应 Sales Header）：
Sales Order No.	Item Code	  Description	Quantity	Unit Price
SO-001		    P001	      轮胎			10	     RM 1000
SO-001		    P002	      车灯			20	     RM 500
✅ 总结：Sales Description 记录了订单的具体商品内容，和 Sales Header 搭配使用。

📌 作用：存储 销售订单的总体信息，和 Sales Order（销售订单） 是 同一个订单的不同部分。

Sales Order 是完整的订单数据（包括客户、商品、数量等）。
Sales Header 只记录订单的基本信息（如订单编号、客户、日期）。
Sales Description 存储订单的详细商品信息（见下图对比）。
👉 示例：
```

`Sales Header（订单头部）（MHEADER）：`

| Sales Order No. | Customer | Order Date | Total Amount |
| --------------- | -------- | ---------- | ------------ |
| SO-001          | 客户A    | 2025-03-20 | RM 100,000   |
| SO-002          | 客户B    | 2025-03-21 | RM 50,000    |

`**Sales Description（订单详细）**（MSALES_DESC）：`

| Sales Order No. | Item Code | Description | Quantity | Unit Price |
| --------------- | --------- | ----------- | -------- | ---------- |
| SO-001          | P001      | 轮胎        | 100      | RM 1000    |
| SO-002          | P002      | 车灯        | 50       | RM 1000    |

✅ **总结**：

- **Sales Header** 记录**订单的整体信息**（如订单编号、客户、订单日期）。
- **Sales Description** 记录**订单的商品明细**（如具体买了什么、多少个、单价多少）。
- **Sales Order 包含 Sales Header 和 Sales Description**。

```
5. Rebuild Header（重建订单头部）
📌 模块：MREBUILD_HEADER - Rebuild Header
📌 作用：用于修复或重新整理销售订单数据（可能是系统维护功能）
📌 作用：重新整理或修复订单数据，主要用于数据库维护，不是日常销售操作。

👉 可能的用途：
修复损坏的订单数据（如果数据库异常，可能需要重建订单信息）。
重新生成订单编号或排序（例如订单编号错乱，系统需要重新编号）。
合并或拆分订单数据（如果数据重复，可能需要重新整理）。
✅ 总结：Rebuild Header 主要用于 IT 维护，普通销售人员一般不会使用。

👉 可能的用途：
修复损坏的订单数据（如果数据库异常，可能需要重建订单信息）
重新生成订单编号或排序
合并重复订单数据
✅ 总结：这个功能一般用于数据库维护，不是日常销售操作，主要由IT人员使用。
```

`**总结**`

| **功能**          | **模块**        | **用途**                                 |
| ----------------- | --------------- | ---------------------------------------- |
| Sales Quotation   | DQUOT           | 记录销售报价，给客户报价用               |
| Sales Order       | DSO             | 记录客户的正式订单                       |
| Sales Header      | MHEADER         | 订单的基本信息（如客户、订单日期）       |
| Sales Description | MSALES_DESC     | 订单的详细商品信息（如产品、数量、单价） |
| Rebuild Header    | MREBUILD_HEADER | 用于修复或重建订单数据                   |

### Production

```
【Production】[ERP 9]

Production（生产）模块功能解析
在 ERP 系统中，生产（Production）模块 主要用于管理 制造、装配、零件更换、报废、发货等流程。以下是详细解释及例子：

==//

1. Job Order（生产工单 - JOB）
📌 作用：创建和管理 生产任务，分配资源，安排生产流程。
📌 使用场景：当公司要生产新产品时，需要创建 Job Order（生产工单） 以跟踪生产进度。

👉 示例：
订单要求生产 100 台汽车底盘（Chassis）。
生产经理创建 Job Order，指定 生产车间、使用的材料、预计完成时间。
生产完成后，更新工单状态为 完成（Completed）。
✅ 总结：Job Order 是生产计划的核心，决定了哪些产品被制造、何时生产、由谁生产。

2. Change Engine（更换引擎 - JCHGENG）
📌 作用：用于更换车辆或设备的引擎，并记录更换的历史信息。
📌 使用场景：如果客户的车辆 引擎故障，需要更换新引擎，则系统需要更新记录。

👉 示例：
车辆 V1234 的引擎 E5678 发生故障。
维修团队更换新引擎 E91011。
在系统中更新 Change Engine 记录，原引擎 E5678 -> E91011，并注明更换日期。
✅ 总结：用于跟踪引擎更换记录，确保维修或更换后的数据正确。

3. Chassis Movement（底盘移动 - MCHASSISM） √
📌 作用：跟踪 车辆底盘（Chassis）的移动，记录它从一个位置到另一个位置的变动。
📌 使用场景：当车辆底盘从 仓库A 移动到 装配车间B，系统需要更新位置信息。

👉 示例：
100 个底盘 从仓库 A 移动到 装配车间 B。
在 Chassis Movement 里更新：
底盘编号（CH1234）
原位置（仓库 A）
目标位置（装配车间 B）
移动时间（2025-03-21）
✅ 总结：记录底盘从一个地点到另一个地点的移动信息，确保物流透明化。

4. Chassis Movement (After Open DO)（底盘移动 - 发货后 - MCHASSIS_DO） √
📌 作用：跟踪 底盘在交货单（Delivery Order, DO）开出后的移动情况。
📌 使用场景：当 底盘已售出，但是尚未交付，系统会继续跟踪它的移动状态。

👉 示例：
客户下单购买 10 个底盘，公司开出 Delivery Order（DO-001）。
但底盘还在 仓库等待运输，并没有立刻发货。
使用 Chassis Movement (After Open DO) 记录：
底盘编号（CH5678）
当前状态（待发货）
目标地点（客户仓库）
✅ 总结：用于追踪已售出的底盘，在交货前的物流信息。

5. Chassis Registration No（底盘注册编号 - MCHASSIS_REG_NO）
📌 作用：为生产的 车辆底盘 生成唯一的 注册编号，确保每个底盘都有唯一的标识。
📌 使用场景：新生产的底盘需要录入系统，生成注册编号，以便跟踪。

👉 示例：
生产完成 100 个底盘。
在系统中为每个底盘分配 注册编号（如 CH1234567890）。
以后可以用这个编号查询 生产日期、销售记录、客户信息。
✅ 总结：相当于“底盘身份证”，确保每个底盘有唯一编号，方便后续管理。

6. Chassis Movement History（底盘移动历史 - MSTOCK2）
📌 作用：存档 过往所有的 底盘移动记录，可以回溯历史数据。
📌 使用场景：如果管理层想知道 某个底盘过去的移动记录，可以在这里查询。

👉 示例：
查询底盘 CH5678 的所有移动记录，系统显示：
2025-01-01 -> 仓库 A
2025-02-10 -> 装配车间 B
2025-03-15 -> 客户交货
✅ 总结：提供底盘的历史移动记录，方便追踪。

7. Scrap Reporting（报废报告 - JSCRAP）
📌 作用：记录损坏或不合格的零件，并进行报废处理。
📌 使用场景：如果某些 底盘、零件损坏或不合格，公司需要正式报废，不能再使用。

👉 示例：
检测到 5 个底盘因生产缺陷需要报废。
在系统中记录 Scrap Report：
零件编号（CH9999）
报废原因（裂缝）
日期（2025-03-20）
处理方式（销毁 / 退回供应商）
✅ 总结：确保不合格的零件不会流入市场，保持产品质量。

8. Subcon D/O（外包交货单 - JSDO）
📌 作用：当公司将部分生产流程 外包给第三方供应商，使用 Subcon D/O 记录外包交货。
📌 使用场景：如果公司不自己生产某个零件，而是让 外包厂商 制造，则需要创建 外包交货单（Subcon Delivery Order, Subcon D/O）。

👉 示例：
公司需要生产 500 个汽车底盘，但部分零件需要外包给供应商 A。
公司向 供应商 A 发送 Subcon D/O，要求提供 300 个车轴。
供应商 A 完成生产后，交付 300 个车轴，公司在系统中更新状态。
✅ 总结：用于管理外包生产的零件或组件，并跟踪供应商交货情况。
```

**最终总结**

| **功能**                             | **作用**           | **示例**               |
| ------------------------------------ | ------------------ | ---------------------- |
| **Job Order（生产工单）**            | 生产任务管理       | 生产 100 个底盘        |
| **Change Engine（更换引擎）**        | 记录更换车辆引擎   | 车 A 更换新引擎        |
| **Chassis Movement（底盘移动）**     | 记录底盘位置变动   | 底盘从仓库 A 到车间 B  |
| **Chassis Movement (After Open DO)** | 记录发货后底盘移动 | 已售出但尚未交货的底盘 |
| **Chassis Registration No**          | 生成底盘唯一编号   | 底盘 CH1234567890      |
| **Chassis Movement History**         | 记录历史移动       | 底盘 CH5678 曾在仓库 A |
| **Scrap Reporting（报废报告）**      | 记录报废零件       | 5 个底盘因裂缝报废     |
| **Subcon D/O（外包交货单）**         | 记录外包供应商交货 | 供应商提供 300 车轴    |

**✅ 总结**

| **功能**                    | **Chassis Movement（MCHASSISM）** | **Chassis Movement (After Open DO)（MCHASSIS_DO）** |
| --------------------------- | --------------------------------- | --------------------------------------------------- |
| **用途**                    | 记录工厂内部的底盘移动            | 记录底盘发货后的移动                                |
| **是否已开 DO（发货单）？** | ❌ **未开 DO**                     | ✅ **已开 DO**                                       |
| **涉及客户订单？**          | ❌ 否，仅限内部调动                | ✅ 是，和客户发货有关                                |
| **示例场景**                | 底盘在车间/仓库之间移动           | 底盘发往客户/外包商                                 |

### Store

```
【Store】[ERP 9]

📌 Store（仓库管理）模块解释
这个模块主要是管理仓库库存，包括原材料、半成品、成品的收货、发货、库存调整等操作。

1. Store Bin Card（仓库物料卡 - SBC）
🔹 作用：

记录每种物料（原材料、半成品、成品）在仓库的库存变化。
类似于“库存台账”，详细记录入库、出库、当前库存。

🛠 例子：
生产部从仓库领取100个螺丝 🡆 SBC 记录 -100
供应商送来500个螺丝 🡆 SBC 记录 +500
盘点时发现库存短缺，调整**-10个螺丝** 🡆 SBC 记录 -10
✅ 用于追踪单个物料的进出情况，避免库存错误。

2. FG Bin Card（成品库存卡 - SFBC）
🔹 作用：

专门用于**成品（Finished Goods）**的库存管理。
记录成品生产、销售出库、库存调整。

🛠 例子：
生产完成10辆摩托车 🡆 SFBC 记录 +10
客户购买3辆摩托车 🡆 SFBC 记录 -3
发现1辆摩托车损坏，调整库存**-1** 🡆 SFBC 记录 -1
✅ 和 Store Bin Card 类似，但专门用于成品**，方便管理出货和库存。

3. Store Issue & Receipt（仓库出库 & 入库 - SIR）
🔹 作用：

记录物料的出库（Issue）和入库（Receipt），确保库存数量正确。
出库：工厂领取原材料、客户退货等。
入库：采购收货、成品入库等。

🛠 例子：
生产车间领用100个轮胎 🡆 出库记录 -100
供应商送来200个轮胎 🡆 入库记录 +200
客户退回1辆摩托车 🡆 入库记录 +1
✅ 用于控制实际库存数量，防止物料短缺或过剩。

4. Change Item/Model Group（更改物料/型号分组 - SCHGITEM）
🔹 作用：

允许更改物料分类或产品型号分组，方便库存管理。
适用于物料编号错误、产品升级换代等情况。

🛠 例子：
旧型号 ABC-100 升级为 ABC-200，需要把库存从 ABC-100 移到 ABC-200。
发现某个产品错误归类，需要重新归类到正确的产品组。
✅ 主要用于数据调整，不会影响实际库存数量。

5. Good Receive Note（收货单 - SGRN）
🔹 作用：

记录采购物料的收货情况，确保仓库收到的物料数量与采购订单一致。
通常和采购部门、财务部门关联，影响付款流程。

🛠 例子：
采购订单上写着订购 500 个轮胎。
供应商送来货物，仓库检查后发现实际收到 480 个（短缺 20 个）。
SGRN 记录 480 个轮胎入库，并通知采购部门要求供应商补货或退款。
✅ 用于确认供应商送货是否正确，避免采购/库存误差。
```

**✅ 总结**

| **功能**                      | **用途**                           | **示例**                         |
| ----------------------------- | ---------------------------------- | -------------------------------- |
| **Store Bin Card（SBC）**     | 记录物料库存变化                   | 螺丝、轮胎等原材料的进出记录     |
| **FG Bin Card（SFBC）**       | 记录成品库存变化                   | 摩托车的生产、销售、库存调整     |
| **Store Issue & Receipt**     | 记录出库（Issue）和入库（Receipt） | 车间领取原材料、供应商送货入库   |
| **Change Item/Model Group**   | 更改物料分类或产品型号             | 旧型号 ABC-100 升级为 ABC-200    |
| **Good Receive Note（SGRN）** | 记录采购物料的收货情况             | 采购 500 个轮胎，实际收到 480 个 |

### Shipping

```
【Shipping】[ERP 9]

📌 Shipping（运输管理）模块解释
这个模块主要管理货物的发货，包括送货单（Delivery Note）、寄售订单（Consignment Order）等。

1. Consignment Order（寄售订单 - LDO）
🔹 作用：

记录寄售商品的发货情况。
寄售（Consignment）：客户先收到货物，但不会立刻付款，等销售完成后再结算。
🛠 例子：

客户 A 需要 50 台摩托车，但暂时不会立刻付款。
公司先发货，让客户 A 拿去卖。
客户 A 每卖出一台摩托车，就按销售数量支付货款。
最后，公司和客户对账，客户把卖不掉的退回来，或者结清剩余货款。
✅ 适用于大经销商或长期合作客户，避免一次性付款压力，但公司需要跟进库存和回款。

🛠 例子：摩托车公司 & 代理商
假设你在一家公司工作，公司主要生产摩托车，你的客户是摩托车代理商（经销商）。

1️⃣ 代理商 A 需要 50 台摩托车，但不想立即付款。
2️⃣ 公司创建 Consignment Order（LDO），把 50 台摩托车发给代理商 A。
3️⃣ 代理商 A 拿去卖，但没有付款记录，因为还没卖出。
4️⃣ 代理商 A 每卖出一台摩托车，就通知公司，并按销售数量付款。
5️⃣ 如果有摩托车卖不出去，代理商 A 可以把剩余的退回给公司。
6️⃣ 公司最终结算账款，完成交易。

2. Unbilling CO（未开票寄售订单）
🔹 作用：

查询**哪些寄售订单（Consignment Order）**还没有开发票。
用于财务对账，确保所有发出的货物最终都能收到付款或退货。
🛠 例子：

之前给客户 A 发了 50 台摩托车，但还没结算。
客户 A 只卖了 30 台，还有 20 台未付款。
Unbilling CO 里会显示这 20 台摩托车，提醒财务跟进。
财务可以选择开票结算，或者联系客户退回未售出的货物。
✅ 用于确保寄售的货款不会被遗忘，方便财务管理和催款。
```

**✅ 总结**

| **功能**                     | **用途**             | **示例**                                        |
| ---------------------------- | -------------------- | ----------------------------------------------- |
| **Consignment Order（LDO）** | 记录寄售商品的发货   | 先发 50 台摩托车给客户 A，等卖掉后才付款        |
| **Unbilling CO**             | 追踪未开票的寄售订单 | 发现客户 A 还有 20 台摩托车未付款，提醒财务催款 |

### Documentation

```
【Documentation】[ERP 9]

Document Master（文档主数据）

(GDOC - Government Document)
用于存储和管理政府相关的文件，如进口/出口许可、车辆注册证书等。
例子：公司需要向政府提交车辆进口许可，相关文件会存储在这里以便后续查询。
C.O.M. (Others)（其他公司的制造证书）

(GDOC2 - Government Document Other Company)
记录与其他公司相关的制造/改造证书。
例子：如果公司为其他企业代加工车辆并需要政府认证，这些证书会存储在这里。
C.O.M.（制造/改造证书）

(GCOM - Government Certificate Of Manufacture/Rebuild)
记录公司生产或改造的车辆所需的政府制造认证。
例子：如果公司生产或改装了一批卡车，需要向政府申请制造证书，就会在这里存档。
C.O.O.R.（原产地证书 - 改造车辆）

(GCOOR - Government Certificate Of Origin Rebuild)
记录车辆改造后的原产地证书，证明车辆来源合规。
例子：一辆被改造过的商用车，需要证明它的原产地信息，以便出口或登记。
Sales Letter（销售信函）

(GSJ - Government Certificate of Origin Rebuild)
记录销售过程中涉及的官方文件，如销售确认信、政府要求的销售证明等。
例子：公司卖出一辆卡车，政府要求提供销售证明，该文件会存储在这里。
Engineer Cert（工程师证书）

(GSPJP - Government Certificate of Origin Rebuild)
记录由工程师认证的车辆技术文件，例如结构改造或发动机更换后的检验报告。
例子：公司对车辆底盘进行了改造，工程师检验合格并出具认证文件，该文件存储在这里。
Plan Loan（贷款计划）

(GPLANLOAN - Government Plan Loan)
记录与政府提供的贷款计划相关的文件，如分期付款计划、融资批准等。
例子：公司为客户提供政府支持的汽车融资方案，相关贷款文件会在这里存档。
Vehicle File Movement History（车辆文件流转历史）

(MVFILEMH)
记录车辆相关文件的流转历史，例如文件的创建、审批、归档等。
例子：某辆车的注册文件从财务部门转交到政府审批，审批后又转交至客户，整个过程的记录会保存在这里。
File（车辆文件管理）

(MVFILEM - Vehicle File Movement)
主要用于管理与车辆相关的所有文件，包括注册证书、保险文件、维修记录等。
例子：一辆商用卡车的保险单、维修记录等文件会存储在这里，便于随时查阅。
```

### Spare Parts

```
【Spare Parts】[ERP 9]

1. Spare Parts（备件管理）
此模块用于管理公司库存的零件，包括收货、调整、转移和报告功能。

Setup（设置）
	- Item Master（物料主数据）：管理所有物料的基本信息，例如零件编号、名称、描述和价格。
	示例：添加一个新的刹车片（Brake Pad），设置其编号、品牌、价格等信息。
	- Store Setup（仓库设置）：配置仓库的基本信息，例如仓库编号、地址和管理规则。
	示例：新建一个仓库 "WH2" 专门存放发动机配件。
	- Location Setup（位置设置）：设置仓库内具体存储位置，例如货架编号。
	示例：给仓库 "WH1" 设定存储区域，如 "A1"、"B2" 等。
	- Item Group（物料组）：对物料进行分类，如发动机零件、底盘零件等。
	示例：创建 "Engine Parts" 组，所有发动机相关零件都归入该组。
	- Sub Group（子组）：进一步细分物料组。
	示例："Engine Parts" 组下设立 "Pistons"（活塞）、"Filters"（过滤器）子组。
	- Brand（品牌）：管理物料的品牌，如 Toyota、Honda。
	示例：添加 "Toyota Genuine Parts" 作为一个品牌选项。
	- Group（组别）：可能用于归类不同类型的物料管理。
	
其他操作
Good Receive Note（收货单）：记录收到的零件并入库。
示例：供应商送来100个刹车片，操作员记录收货信息并入库。

Delivery Order（送货单）：管理零件的出库与送货。
示例：客户订购了20个轮胎，系统生成送货单进行出库。

Store Bin Card（仓库库存卡）：记录物料的存储情况和历史变动。
示例：查看 "Brake Pad" 在不同仓库的库存数量和历史变动。

Stock Adjustment（库存调整）：调整库存数量，例如因损坏或盘点差异进行修改。
示例：发现某个零件数量少了10个，手动调整库存。

Branch Stock Transfer（分支库存转移）：在不同仓库或分支间转移库存。
示例：从槟城仓库转移50个刹车片到吉隆坡仓库。

Internal Use（内部使用）：公司内部使用零件的记录。
示例：维修公司车辆时，使用了5个火花塞。

Parts Request（零件请求）：员工或部门提出零件需求。
示例：维修部门申请10个机油滤清器。

Parts Return（零件退回）：退回库存的零件，例如错误采购或质量问题。
示例：供应商送错型号，退回50个不合适的刹车片。

Report（报表）
	- Stock Balance Report（库存余额报表）：查看当前库存数量和价值。
	示例：查看所有刹车片的库存情况。
	
	- Stock Balance By Date Report（按日期库存报表）：查看某个时间点的库存情况。
	示例：查看2025年3月1日的库存数量。
	
	- Sales Summary Report（销售汇总报表）：统计零件销售情况。
	示例：查看上个月卖出了多少个轮胎，每个客户购买了多少。
```

### Service

```
【Service】[ERP 9] Nothing
```

### Accounting

```
【Accounting】[ERP 9]

Accounting（财务模块）解析
财务模块主要用于管理公司财务，包括开票、费用管理、货币转换等功能。

1. Currency Converter（货币转换）
用于不同货币的换算，比如美元（USD）转换为马币（MYR）。
适用于国际交易或财务结算时需要换算汇率的情况。

2. Batch Create Invoice（批量创建发票）
一次性创建多张发票，提高效率。
适用于有大量销售订单需要开票的情况，比如月底结算时统一开发票。

3. Batch Cancel Invoice（批量取消发票）
用于一次性撤销多张发票，减少手动操作。
适用于财务调整，比如某批订单作废，需要统一撤销发票。

4. Batch Create Subcon Invoice（批量创建外包发票）
用于给外包供应商（Subcontractor）开票。
适用于制造业或建筑行业，需要定期向外包商结算费用。

5. Shipping Cost（运费管理）
记录并计算运输成本，确保财务清楚每笔订单的运费支出。
适用于公司需要为客户支付或收取运费的情况。

6. Sales Invoice（销售发票）
生成销售发票，作为客户付款的依据。
适用于所有销售交易，比如卖出一批货物后给客户开发票。

7. Expenses (Others)（其他费用管理）
记录各种额外开支，比如办公用品、维修费用等。
适用于记录日常运营成本，便于公司做财务分析。

8. Setup（设置）
可能用于配置财务系统，比如税率、发票模板、账户信息等。
适用于财务管理员进行初始设置或调整系统参数。
```

### Reports

```
【Reports】[ERP 9]
```

**1. Model Group & Model (WC)（型号组 & 型号 - 关联工作中心）**

**作用**：

- 用于管理产品型号，并将其与特定的 **工作中心（Work Center, WC）** 关联。
- 适用于制造业，例如汽车制造、电子产品组装等，以确保每种型号在正确的生产线上处理。

**例子**：

公司生产不同型号的打印机：

- **Model Group:** “HP LaserJet 系列”
- **Model (WC):**
  - HP LaserJet Pro MFP M428dw → **工作中心：组装线 1**
  - HP LaserJet 1020 → **工作中心：组装线 2**

如果要查询某个型号在哪条生产线制造，可以通过此选项查看。

------

 **2. Model Group（型号组）**

**作用**：

- 将产品按照型号进行分类，方便管理和查询。
- 适用于企业拥有多个产品系列，例如汽车、手机、电子设备等。

**例子**：

一家汽车公司生产多个系列的车辆：

- **SUV 系列**
  - Honda CR-V
  - Toyota RAV4
- **轿车系列**
  - Honda Civic
  - Toyota Corolla

在 ERP 系统中，管理者可以通过 **Model Group** 来快速筛选某一系列的产品。

------

**3. Pending Model Group（待审批型号组）**

 **作用**：

- 记录尚未正式启用或需要审批的新型号组。
- 适用于新产品开发阶段，或者产品升级时，等待经理或高层批准。

 **例子**：

公司计划推出一款新的智能手机，但尚未正式投产：

- **Pending Model Group:** “XYZ Phone Series”
  - XYZ Phone X1（等待批准）
  - XYZ Phone X2（等待批准）

审批完成后，这些型号组会被移入正式的 **Model Group**。

------

 **4. Plan（计划）**

 **作用**：

- 用于制定生产计划、采购计划或销售计划。
- 确保物料、生产资源、工人排班等信息得到合理安排。

 **例子**：

公司需要安排下个月的生产计划：

| 日期       | 生产型号       | 数量   | 生产线   |
| ---------- | -------------- | ------ | -------- |
| 2025-04-01 | Toyota Corolla | 200 辆 | 生产线 1 |
| 2025-04-05 | Honda Civic    | 150 辆 | 生产线 2 |

使用 **Plan** 选项，工厂可以确保足够的原材料和人力资源。

------

 **5. Serial Checking（序列号检查）**

 **作用**：

- 检查产品的唯一序列号，以进行库存管理、售后服务或质量追踪。
- 确保每个产品都可以追溯到其生产批次、供应商等信息。

 **例子**：

一家电子厂生产了以下笔记本电脑：

- **产品型号:** Dell Inspiron 15
- **序列号:**
  - ABCD12345 → **生产日期：2025-03-10**
  - ABCD67890 → **生产日期：2025-03-11**

如果客户报告某个笔记本电脑有问题，企业可以通过 **Serial Checking** 找到该产品的生产批次，调查问题根源。

------

 **6. Allocation File（分配文件）**

 **作用**：

- 记录物料、设备或人力资源的分配情况。
- 确保生产过程中资源合理使用，避免浪费或短缺。

**例子**：

公司有 1000 个 LCD 屏幕，需要分配给不同的生产线：

| 生产线   | 分配数量 |
| -------- | -------- |
| 生产线 1 | 500 个   |
| 生产线 2 | 300 个   |
| 生产线 3 | 200 个   |

在 ERP 系统中，可以通过 **Allocation File** 追踪这些分配记录。

------

 **7. Alloc. # Not Allocated（未分配编号）**

**作用**：

- 显示尚未被分配的资源或产品编号。
- 适用于生产完成但未分配至特定客户或库存的情况。

**例子**：

公司生产了 500 台冰箱，但其中 50 台尚未分配到具体的仓库：

- **未分配产品编号:**
  - SN001 - SN050（未分配）
  - SN051 - SN500（已分配到仓库 A）

使用 **Alloc. # Not Allocated**，仓库管理员可以及时处理这些未分配的库存。

------

8. Master Summary List（主数据汇总）**

**作用**：

- 生成所有主要数据的综合报告。
- 适用于管理层快速查看公司整体情况，包括库存、生产、销售等信息。

**例子**：

某公司 ERP 系统中的 **Master Summary List**：

| 数据类别   | 数量      | 备注             |
| ---------- | --------- | ---------------- |
| 当前库存   | 50,000 件 | 包含所有仓库     |
| 生产计划   | 10,000 件 | 未来 30 天内生产 |
| 待审批型号 | 3 款      | 需要经理批准     |
| 未分配库存 | 500 件    | 需安排仓库       |

这个列表帮助管理层做出快速决策，例如增加产量、优化库存等。

------

**总结**

在 **Reports -> Master** 菜单中，各个功能的作用如下：

| 选项                     | 主要用途                  | 适用场景           |
| ------------------------ | ------------------------- | ------------------ |
| Model Group & Model (WC) | 产品型号分类 + 关联生产线 | 确保正确生产       |
| Model Group              | 产品型号分类              | 按产品系列管理     |
| Pending Model Group      | 待审批型号                | 新产品开发         |
| Plan                     | 生产/采购计划             | 确保供应链稳定     |
| Serial Checking          | 序列号检查                | 质量追踪、售后管理 |
| Allocation File          | 物料分配                  | 避免资源浪费       |
| Alloc. # Not Allocated   | 未分配库存                | 及时处理库存       |
| Master Summary List      | 数据汇总                  | 供管理层决策       |

这些功能主要用于管理生产、库存、资源分配等，确保企业运营的高效性和可追溯性。

======================

**1. Spare Parts（备件管理）**

**作用**：

- 主要用于管理企业的 **备件库存**，包括备件的种类、数量、供应情况等。
- 适用于制造业、汽车维修、电子设备维护等行业，确保生产和售后服务有足够的备件支持。

**菜单选项**：

**Parts Listing（备件清单）**

- 显示所有备件的列表，包括：
  - **备件编号**
  - **备件名称**
  - **库存数量**
  - **供应商**
  - **存放位置**

**例子**：

汽车公司管理备件库存：

| 备件编号 | 备件名称 | 库存数量 | 供应商   | 存放位置 |
| -------- | -------- | -------- | -------- | -------- |
| SP-001   | 刹车片   | 200      | 供应商 A | 仓库 1   |
| SP-002   | 机油滤芯 | 150      | 供应商 B | 仓库 2   |
| SP-003   | 火花塞   | 300      | 供应商 C | 仓库 3   |

使用 **Parts Listing**，维修部门可以随时查询库存，确保不会因缺少备件而影响生产或维修。

====================

**2. Sales（销售管理）**

**作用**：

- 用于管理 **销售订单（Sales Order, S/O）**，包括订单的状态、销售员业绩、客户购买情况等。
- 适用于企业跟踪销售情况，确保订单按时交付。

**菜单选项**：

**S/O Without W/C（无工作中心的销售订单）**

- 统计 **没有分配生产线（工作中心）的销售订单**，可能是未确认的订单或待生产的订单。
- 适用于管理未分配生产资源的订单，防止订单积压。

**S/O Collected By Salesman（按销售员收集的订单）**

- 按销售员查看销售订单，帮助管理销售团队的业绩。

**S/O Collected By Customer（按客户收集的订单）**

- 按客户分类销售订单，可用于分析客户购买习惯。

**S/O Without J/O（无生产作业单的销售订单）**

- 统计 **没有生成生产作业单（Job Order, J/O）的销售订单**，可能是尚未安排生产的订单。

**S/O Collected By Model Group（按型号组收集的订单）**

- 按产品型号分类的销售订单，方便管理不同系列产品的销售情况。

**Sales Delivered By FG（按成品出货的销售）**

- 统计 **已通过成品库存（Finished Goods, FG）交付的销售订单**，确保客户收到产品。

**Sales Delivered By Salesman（按销售员交付的订单）**

- 统计 **由销售员交付给客户的订单**，适用于 **直销模式** 的业务。

**Sales Delivered By Customer（按客户交付的订单）**

- 统计 **客户自行取货的订单**，适用于 **自提模式** 的业务。

**Outstanding S/O（未完成的销售订单）**

- 列出 **尚未完成的销售订单**，帮助销售团队跟进订单进度。

------

 **例子**：

某公司销售智能手机：

| 销售订单号 | 产品型号    | 客户   | 订单状态   | 交付方式           |
| ---------- | ----------- | ------ | ---------- | ------------------ |
| S/O-1001   | iPhone 15   | 客户 A | **已完成** | 由销售员交付       |
| S/O-1002   | Samsung S24 | 客户 B | **待生产** | 需要分配生产中心   |
| S/O-1003   | OnePlus 12  | 客户 C | **已发货** | 由成品库存交付     |
| S/O-1004   | Xiaomi 14   | 客户 D | **未完成** | 需要安排生产作业单 |

------

 **总结**

| 功能                                 | 主要用途               | 适用场景   |
| ------------------------------------ | ---------------------- | ---------- |
| Spare Parts -> Parts Listing         | 备件库存管理           | 维修、生产 |
| Sales -> S/O Without W/C             | 未分配生产线的订单     | 订单管理   |
| Sales -> S/O Without J/O             | 未生成生产作业单的订单 | 生产安排   |
| Sales -> Outstanding S/O             | 未完成订单             | 订单跟进   |
| Sales -> Sales Delivered By FG       | 通过库存交付的订单     | 出货管理   |
| Sales -> Sales Delivered By Salesman | 由销售员交付的订单     | 直销模式   |
| Sales -> Sales Delivered By Customer | 客户自提的订单         | 自提业务   |

这些功能帮助企业高效管理 **备件库存** 和 **销售订单**，确保生产、销售和库存之间的协调。

==============

在这个 ERP 系统中，**Reports -> Store（仓库管理）** 主要用于 **管理库存**，包括 **发动机（Engine）、底盘（Chassis）、成品（FG, Finished Goods）** 等不同类别的库存状态和位置。以下是详细解释：

------

**1. Store（仓库管理）的作用**

- 主要管理 **仓库内的库存情况**，包括 **发动机、底盘、成品等库存**，以及它们的存放位置和数量。
- 适用于 **汽车制造、设备制造、零部件供应** 等需要管理多个库存类型的行业。

------

**2. 菜单选项详细解释**

**(1) Engine Stand Alone（独立发动机库存）**

- 统计 **独立存放的发动机**（未安装在底盘上）。
- 用于 **发动机存储管理**，确保仓库有足够库存供生产使用。

**例子**：

| 发动机编号 | 品牌   | 型号        | 数量 | 存放位置 |
| ---------- | ------ | ----------- | ---- | -------- |
| ENG-001    | Toyota | 2.0L Turbo  | 50   | 仓库 A   |
| ENG-002    | Honda  | 1.5L VTEC   | 30   | 仓库 B   |
| ENG-003    | Nissan | 2.5L Hybrid | 20   | 仓库 C   |

------

**(2) Engine Stock（发动机库存）**

- 显示 **所有发动机的库存情况**，包括 **独立存放** 和 **已安装在底盘上的发动机**。
- 适用于管理 **发动机采购、安装和库存**。

------

**(3) Chassis Stand Alone（独立底盘库存）**

- 统计 **未安装发动机的底盘库存**，用于 **生产前的零部件管理**。

**例子**：

| 底盘编号 | 品牌   | 型号          | 数量 | 存放位置 |
| -------- | ------ | ------------- | ---- | -------- |
| CHS-001  | Toyota | SUV Chassis   | 40   | 仓库 A   |
| CHS-002  | Honda  | Sedan Chassis | 25   | 仓库 B   |
| CHS-003  | Nissan | Truck Chassis | 15   | 仓库 C   |

------

**(4) Chassis & FG Stock（底盘和成品库存）**

- 统计 **底盘和成品的库存情况**，区分 **未完成产品** 和 **已组装完成的产品**。

------

**(5) Chassis & FG By Location（按存放位置分类的底盘和成品库存）**

- 根据 **仓库地点** 显示底盘和成品的库存，方便 **仓库管理** 和 **调度**。

------

**(6) Chassis & FG Stock Summary（底盘和成品库存总览）**

- 汇总 **底盘和成品库存的总数**，提供库存概览报告，适用于 **高层管理人员** 监控库存情况。

------

**(7) Chassis & FG Stock Details（底盘和成品库存详细信息）**

- 详细列出每种底盘和成品的库存情况，包括：
  - **产品编号**
  - **产品型号**
  - **数量**
  - **存放位置**
  - **库存状态**

------

**(8) Stock Available Report（库存可用报告）**

- 显示 **目前可用的库存**，包括 **发动机、底盘、成品等**。
- 适用于 **生产计划** 和 **销售决策**。

------

**(9) FG Stock（成品库存）**

- 统计 **已组装完成的成品库存**，准备 **销售或交付**。

**例子**：

| 成品编号 | 车型           | 数量 | 存放位置 |
| -------- | -------------- | ---- | -------- |
| FG-001   | Toyota Camry   | 20   | 仓库 D   |
| FG-002   | Honda Civic    | 15   | 仓库 E   |
| FG-003   | Nissan X-Trail | 10   | 仓库 F   |

------

**(10) FG By Location（按存放位置分类的成品库存）**

- 按 **仓库位置** 显示成品库存，方便 **出货管理**。

------

**(11) FG Stock Summary（成品库存总览）**

- **汇总** 所有成品库存的数量，方便管理层掌握销售和生产情况。

------

**(12) Chassis Latest Location（底盘最新存放位置）**

- 显示 **底盘的最新存放地点**，防止 **库存混乱**。

------

**(13) Chassis Pending（待处理底盘库存）**

- 统计 **待处理或待安装发动机的底盘**，帮助 **生产调度**。

------

**(14) Vehicle File Latest Location（车辆档案最新存放位置）**

- 记录 **整车的存放位置**，用于 **物流和交付管理**。

------

**3. 作用总结**

| 功能                         | 主要用途               | 适用场景   |
| ---------------------------- | ---------------------- | ---------- |
| Engine Stand Alone           | 管理独立存放的发动机   | 生产前库存 |
| Engine Stock                 | 管理所有发动机库存     | 采购和生产 |
| Chassis Stand Alone          | 统计未安装发动机的底盘 | 生产调度   |
| Chassis & FG Stock           | 统计底盘和成品库存     | 生产和销售 |
| Chassis & FG By Location     | 按存放位置分类库存     | 仓库管理   |
| Chassis & FG Stock Summary   | 汇总底盘和成品库存     | 管理层决策 |
| Chassis & FG Stock Details   | 查看库存详细信息       | 生产调度   |
| Stock Available Report       | 查看可用库存           | 采购和销售 |
| FG Stock                     | 统计成品库存           | 出货管理   |
| FG By Location               | 按位置查看成品库存     | 仓库管理   |
| FG Stock Summary             | 汇总成品库存           | 业务分析   |
| Chassis Latest Location      | 记录底盘最新存放位置   | 物流管理   |
| Chassis Pending              | 统计待处理底盘         | 生产计划   |
| Vehicle File Latest Location | 记录整车存放位置       | 交付管理   |

------

**4. 总结**

这个 **Store（仓库管理）模块** 主要用于 **跟踪库存状态**，确保：

1. **生产部** 了解 **发动机、底盘、成品的库存情况**，合理安排生产。
2. **仓库管理** 团队能够 **准确管理存放位置**，优化库存周转。
3. **销售和物流部门** 能够 **追踪成品库存和存放地点**，确保 **及时交付**。

这个功能对于 **制造企业、汽车行业、设备制造商** 等有 **库存管理需求** 的企业非常重要。

==========

在这个 ERP 系统中，**Reports -> Production（生产管理）** 主要用于 **管理生产订单（Job Orders, JO）、外包交货单（Subcon D/O）以及重新组装（Re-Assemble）等生产流程**。以下是详细解释：

------

**1. Production（生产管理）的作用**

- 主要用于 **追踪生产进度**，包括 **外包订单、生产任务分配、库存分配** 和 **重新组装产品**。
- 适用于 **制造业、汽车装配、设备制造** 等涉及 **生产流程** 的行业。

------

**2. 菜单选项详细解释**

**(1) Subcon D/O List（外包交货单列表）**

- **Subcon（Subcontractor）指外包厂商**，D/O（Delivery Order）是交货单。
- 这个选项 **管理外包厂商的交货情况**，包括：
  - **外包的零部件**
  - **外包装配的产品**
  - **交货状态**
- 适用于 **跟踪外包供应商的交付进度**。

**例子**：

| 交货单号 | 外包厂商          | 零件名称   | 数量 | 交货状态 |
| -------- | ----------------- | ---------- | ---- | -------- |
| D/O-001  | ABC Manufacturing | 车门       | 100  | 已交货   |
| D/O-002  | XYZ Assembly      | 发动机组件 | 50   | 处理中   |
| D/O-003  | DEF Engineering   | 变速箱     | 30   | 待交货   |

------

**(2) Job Order Available（可用生产订单）**

- **列出所有可用的生产订单（Job Orders, JO）**，即 **尚未分配或正在等待处理的订单**。
- 适用于 **生产计划人员查看当前有哪些生产任务待执行**。

**例子**：

| 生产订单号 | 产品名称              | 需求数量 | 订单状态 |
| ---------- | --------------------- | -------- | -------- |
| JO-001     | Toyota Camry 底盘     | 200      | 等待生产 |
| JO-002     | Honda Civic 发动机    | 150      | 等待生产 |
| JO-003     | Nissan X-Trail 变速箱 | 100      | 等待生产 |

------

**(3) Job Order Allocated（已分配生产订单）**

- **列出已经分配给生产线或外包厂商的生产订单**。
- 适用于 **管理生产任务分配情况**，确保所有订单 **都有明确的执行团队**。

**例子**：

| 生产订单号 | 产品名称              | 需求数量 | 生产线   | 订单状态 |
| ---------- | --------------------- | -------- | -------- | -------- |
| JO-001     | Toyota Camry 底盘     | 200      | 生产线 A | 进行中   |
| JO-002     | Honda Civic 发动机    | 150      | 生产线 B | 进行中   |
| JO-003     | Nissan X-Trail 变速箱 | 100      | 生产线 C | 进行中   |

------

**(4) J/O Allocated By Location（按位置分配的生产订单）**

- **按不同的工厂或仓库查看生产订单的分配情况**。
- 适用于 **多工厂、多仓库生产环境**，确保 **各个生产基地合理分配任务**。

**例子**：

| 生产订单号 | 产品名称              | 需求数量 | 生产地点   | 订单状态 |
| ---------- | --------------------- | -------- | ---------- | -------- |
| JO-001     | Toyota Camry 底盘     | 200      | 槟城工厂   | 进行中   |
| JO-002     | Honda Civic 发动机    | 150      | 吉隆坡工厂 | 进行中   |
| JO-003     | Nissan X-Trail 变速箱 | 100      | 柔佛工厂   | 进行中   |

------

**(5) Re-Assemble Report（重新组装报告）**

- **追踪需要重新组装的产品**，可能因为：
  - **产品质量问题**
  - **客户退货**
  - **生产缺陷**
- 适用于 **质检和返工流程**。

**例子**：

| 订单号 | 产品名称              | 问题描述   | 重新组装状态 |
| ------ | --------------------- | ---------- | ------------ |
| RE-001 | Toyota Camry 底盘     | 焊接错误   | 处理中       |
| RE-002 | Honda Civic 发动机    | 配件缺失   | 待处理       |
| RE-003 | Nissan X-Trail 变速箱 | 质量不达标 | 处理中       |

------

**3. 作用总结**

| 功能                      | 主要用途                 | 适用场景       |
| ------------------------- | ------------------------ | -------------- |
| Subcon D/O List           | 追踪外包供应商的交货情况 | 外包管理       |
| Job Order Available       | 查看所有待处理的生产订单 | 生产计划       |
| Job Order Allocated       | 查看已分配的生产订单     | 生产任务管理   |
| J/O Allocated By Location | 按地点查看订单分配情况   | 多工厂生产管理 |
| Re-Assemble Report        | 追踪返工和重新组装任务   | 质量管理       |

------

**4. 总结**

这个 **Production（生产管理）模块** 主要用于 **管理生产流程**，确保：

1. **生产计划员** 可以 **合理安排生产任务**，查看 **可用订单** 和 **已分配订单**。
2. **外包管理人员** 可以 **跟踪外包订单的交货情况**。
3. **工厂管理** 团队可以 **查看不同工厂的生产任务分配**。
4. **质量管理团队** 可以 **管理需要返工或重新组装的产品**。

这个功能对于 **制造企业、汽车行业、设备制造商** 等涉及 **生产管理** 的公司非常重要。

========

这两个菜单分别属于 **Purchasing（采购管理）** 和 **Shipping（出货管理）**，它们的主要作用是 **跟踪采购订单（P/O, Purchase Order）** 和 **管理交货单（D/O, Delivery Order）**。以下是详细解释：

------

**Purchasing（采购管理）**

**作用**

- **管理企业的采购流程**，包括 **待处理采购订单（Outstanding P/O）、外包结算（Subcon Billing）、按底盘分类的采购订单（P/O By Chassis）**。
- 适用于 **制造业、汽车行业、电子设备生产**，确保原材料、零部件的供应正常。

------

**菜单选项**

**(1) Outstanding P/O（待处理采购订单）**

- **列出所有未完成的采购订单**，包括：
  - **尚未收到货的订单**
  - **等待供应商确认的订单**
  - **部分交付但未完成的订单**
- 适用于 **采购部门跟踪未完成的采购任务**，确保供应链不断货。

**例子**：

| 采购订单号 | 供应商          | 采购物品 | 数量 | 订单状态     |
| ---------- | --------------- | -------- | ---- | ------------ |
| PO-001     | ABC Electronics | 电子元件 | 500  | 等待交付     |
| PO-002     | XYZ Steel       | 钢板     | 1000 | 部分交付     |
| PO-003     | DEF Motors      | 发动机   | 50   | 供应商确认中 |

------

**(2) Subcon Billing（外包结算）**

- **管理外包供应商的结算**，确保所有外包服务和采购的费用正确结算。
- 适用于 **外包制造模式**，确保付款符合合同要求。

**例子**：

| 供应商          | 采购项目   | 总金额    | 结算状态 |
| --------------- | ---------- | --------- | -------- |
| ABC Assembly    | 车门组装   | RM 50,000 | 待付款   |
| XYZ Welding     | 底盘焊接   | RM 30,000 | 已付款   |
| DEF Engineering | 发动机调试 | RM 20,000 | 待审核   |

------

**(3) P/O By Chassis（按底盘分类的采购订单）**

- **统计与底盘相关的采购订单**，用于 **汽车制造或设备组装**。
- 适用于 **管理底盘采购的进度和供应情况**。

**例子**：

| 采购订单号 | 底盘型号   | 采购零件 | 数量 | 订单状态 |
| ---------- | ---------- | -------- | ---- | -------- |
| PO-101     | SUV-2024   | 车架     | 200  | 处理中   |
| PO-102     | Sedan-2023 | 变速箱   | 150  | 已交付   |
| PO-103     | Truck-2025 | 制动系统 | 100  | 部分交付 |

------

===============

**Shipping（出货管理）**

**作用**

- **管理企业的出货流程**，包括 **交货单汇总（D/O Summary）、按经销商分类的交货单（D/O By Dealer）、交货状态（D/O Status）、完整交货单列表（D/O Listing）**。
- 适用于 **物流部门、仓储管理**，确保客户订单按时发货。

------

**菜单选项**

**(1) D/O Summary（交货单汇总）**

- **汇总所有交货单**，提供出货的总体概览。
- 适用于 **管理层快速查看所有出货情况**。

**例子**：

| 交货单号 | 客户            | 货物   | 数量 | 出货状态 |
| -------- | --------------- | ------ | ---- | -------- |
| D/O-001  | Toyota Dealer A | 车门   | 500  | 已发货   |
| D/O-002  | Honda Dealer B  | 发动机 | 200  | 待发货   |
| D/O-003  | Nissan Dealer C | 变速箱 | 100  | 已发货   |

------

**(2) D/O By Dealer（按经销商分类的交货单）**

- **按客户或经销商查看交货单**，确保每个客户的订单按时交付。

**例子**：

| 经销商          | 交货单号 | 货物   | 数量 | 出货状态 |
| --------------- | -------- | ------ | ---- | -------- |
| Toyota Dealer A | D/O-001  | 车门   | 500  | 已发货   |
| Honda Dealer B  | D/O-002  | 发动机 | 200  | 待发货   |
| Nissan Dealer C | D/O-003  | 变速箱 | 100  | 已发货   |

------

**(3) D/O Status（交货状态）**

- **跟踪每个订单的发货进度**，帮助仓库人员管理物流。

**例子**：

| 交货单号 | 货物     | 数量 | 出货状态 |
| -------- | -------- | ---- | -------- |
| D/O-101  | 汽车底盘 | 200  | 已发货   |
| D/O-102  | 变速箱   | 150  | 运输中   |
| D/O-103  | 发动机   | 100  | 待发货   |

------

**(4) D/O Listing（交货单列表）**

- **完整列出所有交货单**，可用于查询历史出货记录。

------

**总结**

| **模块**                   | **功能**        | **主要用途**           |
| -------------------------- | --------------- | ---------------------- |
| **Purchasing（采购管理）** | Outstanding P/O | 跟踪待处理采购订单     |
|                            | Subcon Billing  | 结算外包采购款项       |
|                            | P/O By Chassis  | 统计底盘相关的采购订单 |
| **Shipping（出货管理）**   | D/O Summary     | 汇总所有交货单         |
|                            | D/O By Dealer   | 按经销商查看交货单     |
|                            | D/O Status      | 监控订单的发货状态     |
|                            | D/O Listing     | 详细列出所有交货单     |

**总结**

这两个模块 **Purchasing（采购管理）** 和 **Shipping（出货管理）** 是 **供应链管理** 的重要部分：

- **采购管理** 确保 **原材料、零部件** 按时采购，支持生产。
- **出货管理** 确保 **产品按时交付**，提高客户满意度。

适用于 **制造业、汽车行业、设备制造商**，优化企业的 **采购和物流流程**。

================







### Admin

```
【Admin】[ERP 9]
```

### Window

```
【Window】[ERP 9]
```





```
Add Table
```

