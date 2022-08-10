const { response } = require('express');
const express = require('express');
const { Router } = express;


const app = express();
app.use(express.static('public')); 


const routerProductos = new Router();
routerProductos.use(express.json()); 
routerProductos.use(express.urlencoded({ extended: true })); 

app.use("/api", routerProductos);


const server = app.listen(8080, () => {
    console.log(`El servidor esta escuchando el puerto ${server.address().port}`)
});


server.on('error', error => console.log(`Error en el server : ${error}`));



routerProductos.get('/', (request , response) => {
    response.send('<h1 style="color:blue;">Indicar en la ruta: /productos o /producto/:id </h1>');
})




const Contenedor = require('./Api/Contenedor.js');
const product = new Contenedor('./Api/productos.txt');



async function verProductos() {
    return await product.getAll();
};
routerProductos.get('/productos', async (req , res) => {
    res.json(await verProductos());

});




async function productoId(id) {
    return await product.getbyId(id);
};

routerProductos.get('/productos/:id' , async (req, res) =>{
    const { id } = req.params ; 
    if( await productoId(id)) {
        res.json(await productoId(id)); 
        console.log(await productoId(id)); 
    } else {
        res.json({error : "producto no encontrado"})
    }
})




async function postProducto(prod) { 
    return await product.save(prod)
}

routerProductos.post('/productos', async (req , res) =>{
    const producto =  req.body;
    res.json(await postProducto(producto));
});




async function deleteProducto(id) {
    return await product.deleteById(id);
}

routerProductos.delete('/productos/:id', async (req , res) =>{
    const { id } = req.params ; 
    res.json(await deleteProducto(parseInt(id))); 
})




routerProductos.put('/productos/:id', async (req , res) =>{

    const { id } = req.params;
    const newProduct = req.body
    const producto = await productoId(id); 
    const productos = await verProductos(); 
    const index = productos.findIndex(prod => { 
        return prod.id == producto.id   
    });
    if(index >= 0){
        productos[index] = newProduct; 
        newProduct.id = producto.id; 
        product.saveProduct(productos); 
        res.send(`El producto: ${JSON.stringify(producto)} \n\n
        Fue reemplazado por : ${JSON.stringify(newProduct)}`);
    }
    else{
        res.sendStatus(400);
    }
});