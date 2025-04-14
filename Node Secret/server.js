const { v4: uuidv4 } = require('uuid'); // ✅ 正确导入方式
const secret = `${uuidv4()} ${uuidv4()} ${uuidv4()}`;
console.log(secret);