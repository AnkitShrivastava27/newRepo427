const express =require('express')
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.get('/',(req, res)=>{
    res.send('products api running new deploy');
})
app.listen(PORT,()=>{console.log("app is listenig on "+ PORT);});