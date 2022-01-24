const path= require('path');
const express= require('express');
const app= express();
const publicPath= path.resolve(__dirname,'./public')
const mainRoutes= require('./src/routes/main')
const userRoutes= require('./src/routes/user')

app.use(express.static(publicPath));


app.use('/', mainRoutes);

app.use('/user',userRoutes);

app.set("view engine","ejs");
app.set("views", "./src/views");



app.listen(process.env.PORT || 3000, function(){                                                                 
    console.log('Servidor corriendo en el puerto 3000');
})