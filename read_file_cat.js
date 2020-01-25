const fs  = require('fs');

const cat1 = fs.readFileSync('cat.txt', 'utf-8');

console.log(cat1);