const fs = require('fs');


const addNewData= (text)=>{

    fs.readFile('sample.txt',"utf-8",(err, data)=>{

    if (err) console.log('error from addNewData func',err.message)
let info= data
// console.log(info)
info=info+text+'\n';
fs.writeFileSync('sample.txt',info,(err)=>{
    if(err){ console.log(err.message)};
    



})
console.log('added sucessfully')

})
}
 

const getdata= ()=>{

  
    //file name
   let text=fs.readFileSync('sample.txt',"utf-8");
    return text
    
} 







    



module.exports={addNewData,getdata}