'use strict';

const fs = require('fs');

let func = `['Peter','John','Mary'].forEach( item => console.log(item));`;
let len = func.length;

let buff = Buffer.allocUnsafe(len);

for(let i = 0; i <= len; i++){
  buff.fill(func);
}

console.log(buff);


fs.writeFile('./files/loop.js', buff, (err) =>{
  if(err){throw err;}
});