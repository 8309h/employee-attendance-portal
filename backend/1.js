const bcrypt = require("bcrypt");
const password = bcrypt.hashSync("123456", 10);
console.log(password)