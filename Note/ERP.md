```
Item Master (MITEM - Item Master) 是记录自己公司的库存物品？还是外面买回来的物品？
Item Master (Serialize) (MITEM2 - Item Master For Serialize Item) 这个和Item Master (MITEM - Item Master) 区别是什么？
Chassis & Engine (MSTOCK - Chassis & Engine) 这个再解释，太专业了，看不懂
Document Master (MDOC - Document Master) 有图片，图片是这个 MDOC的，只有三个data而已，解释
Document Type (MDOCTYPE - Document Type) 有图片，图片是这个 mdoctype,解释
```

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

