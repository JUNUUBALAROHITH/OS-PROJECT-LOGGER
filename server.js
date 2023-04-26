const express=require('express')
const cors=require('cors')
const app= express();
app.use(express.json())

const path = require('path'); 

app.use(cors())

app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'frontend')));  



const {addNewData,getdata}=require('./data')

const PORT=6655

app.get('/', (req, res) => {
    res.send('welcome')
})
app.post('/nakul', (req, res) =>{



const message=req.body.message;



if(message)
{

    addNewData(message)
    res.send('received')

}

})


app.listen(PORT,()=>{
    console.log('listening on port '+PORT);
})