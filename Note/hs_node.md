```
npm install rootpath cors express
```

### **代码解释和安装需求**

| 代码                                                         | 作用                                                         | 是否需要安装       | 安装命令                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------ | ---------------------------------------------- |
| `require('rootpath')();`                                     | 让 `require()` 可以使用相对路径，避免 `../../../` 这种复杂路径 | ✅ 需要             | `npm install rootpath`                         |
| `const cors = require('cors');`                              | 允许跨域访问（CORS 机制）                                    | ✅ 需要             | `npm install cors`                             |
| `const express = require('express');`                        | 引入 Express 框架，用于创建 Web 服务器                       | ✅ 需要             | `npm install express`                          |
| `const https = require("https");`                            | 创建 HTTPS 服务器                                            | ❌ Node.js 内置模块 | 无需安装                                       |
| `const http = require("http");`                              | 创建 HTTP 服务器                                             | ❌ Node.js 内置模块 | 无需安装                                       |
| `const fs = require("fs");`                                  | 处理文件系统（读写文件）                                     | ❌ Node.js 内置模块 | 无需安装                                       |
| `const app = express();`                                     | 创建 Express 应用实例                                        | ❌ Express 代码     | 无需安装                                       |
| `const errorHandler = require('_middleware/error-handler');` | 引入全局错误处理中间件                                       | ⭕ 可能需要         | 需检查 `_middleware/error-handler.js` 是否存在 |