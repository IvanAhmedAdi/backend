const express = require('express');
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set('views', './views');
app.set('view engine', 'pug');

const Container = require('../../api/Contenedor')
const products = new Container('../../resources/productos.txt')

app.get('/', (req, res) =>{
    res.render('formulario.pug', {}) 
})
app.get('/productos', async(req, res) =>{
    const productos = await products.getAll();
    res.render('productos.pug', {productos}) 
})
app.post('/productos', async(req, res) =>{
    let product = req.body
    if(product){
        await products.saveProduct(product)
        console.log(`Producto guardado : ${JSON.stringify(product)}`)
        res.redirect('/')
    }
    else{res.sendStatus(400)}
})


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))

