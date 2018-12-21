'use strict';

const fs = require('fs');
const fill = require('buffer-fill');
const slice = require('buffer-slice');
const concat = require('buffer-concat');
var Buffer = require('buffer/').Buffer; 

let text = '';


let setPromise = new Promise(function (resolve, reject) {

  //read in the text file
  fs.readFile('./files/pair-programming.txt', (err, data) =>{
    if(err){
      console.log('error');
    }
    for ( let char of data){
      text += String.fromCharCode(char);
    }
    console.log('ran read file');
    resolve(data, text);
    return text;
  });

});


setPromise.then((data, text) =>{

  // const articleOpen = Buffer.from('<article>');//length: 9
  // const articleClose = Buffer.from('</article>');//length: 10
  // const h2Open = Buffer.from('<h2>');//length: 4
  // const h2Close = Buffer.from('</h2>');//length: 5
  // const h3Open = Buffer.from('<h3>');//length: 4
  // const h3Close = Buffer.from('</h3>');//length: 5

  // let idx = stuff.indexOf('H');
  let htmlArticle = Buffer.alloc('<article>'.length);
  let htmlArticleEnd = Buffer.alloc('</article>'.length);

  htmlArticle.fill('<article>');

  htmlArticleEnd.fill('</article>');

  console.log('data' , data);
  const allContent = Buffer.concat([htmlArticle, data, htmlArticleEnd], (htmlArticle.length + data.length + htmlArticleEnd.length));
    
  console.log(allContent.toString());
  // console.log(allContent.indexOf('\n'));
  // console.log(allContent.indexOf('\n'));

  // console.log(data.indexOf('\n'));
  let previousIdx = 9;
  let bufferLength = 0;
  let bufArray = [];
  for (let i = 0;i< data.length; i++){
    // console.log( data[i].toString(16) );
        
    if( (data[i].toString(16)) === 'a' ){

      let b = Buffer.alloc(i-previousIdx);//sets container of correct length
      b = data.slice(previousIdx, i);
      console.log('im b ' , b);

      bufArray.push(b);

      // console.log('in for loop');
      // console.log('found a slash', i);
      previousIdx = i;
    }
  }
  console.log(bufArray);
});


