// const fs = require('fs')
// fs.readfile('sample.txt','utf8',(err,data)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
    
//       console.log(data);
    
// });


const post=(value)=>
{

  if(value)
  {
    axios.post('http://localhost:6655/nakul', {
      message : value
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}

 console.log("connected !!")
 const gmail=document.querySelector('.gmail');
 const google=document.querySelector('.google');
 const youtube=document.querySelector('.youtube');
 const drive=document.querySelector('.drive');
 const translate=document.querySelector('.translate');

 const btn=document.querySelector('.button')
 








 gmail.addEventListener("click",()=>{
     // console.log("Opened Gmail");;
    //  console.log(`${Date()}`)
   
      content = `Opened Gmail  Time:${Date()} `;
      post(content)
    

})
google.addEventListener("click",()=>{
    // console.log("Opened Gmail");;
   //  console.log(`${Date()}`)
  
      content = `Opened Google  at ${Date()} `;
      post(content)
      

})
youtube.addEventListener("click",()=>{
    // console.log("Opened Gmail");;
   //  console.log(`${Date()}`)
  
       content = `Opened Youtube  at ${Date()} `;
       post(content)
   

})

drive.addEventListener("click",()=>{
    // console.log("Opened Gmail");;
   //  console.log(`${Date()}`)
  
     content = `Opened Drive  at ${Date()} `;
     post(content)
    

})

translate.addEventListener("click",()=>{
    // console.log("Opened Gmail");;
   //  console.log(`${Date()}`)
  
     content = `Opened translate at ${Date()} `;
     post(content)
     

})







// (async ()=>{
//   let info=content;

//   const dataFromServer = await fetch(`http://localhost:6655/nakul`, {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(
//     {
//     message:info,
 

//     } )
// })

// })

