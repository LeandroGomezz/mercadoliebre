const path= require('path');
const express= require('express');
const app= express();
const publicPath= path.resolve(__dirname,'./public')

app.use(express.static(publicPath));

app.listen(3000, ()=> {
    console.log('Servidor corriendo en el puerto 3000')
})

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
});

app.get('/registro',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/registro.html'))
});
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
});