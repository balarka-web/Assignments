const fs = require('fs')

const dir = './NODEJS ASSIGNMENTS';
let dirBuf=Buffer.from(dir);
const files = fs.readdirSync(dir);
  console.log(files)

