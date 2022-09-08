import knex from 'knex'
import config from '../src/config.js'


const mariaDbClient = knex(config.mariaDb)
    try {
        
         await mariaDbClient.schema.dropTableIfExists('articulos');
         await mariaDbClient.schema.createTable('articulos' ,  table => {
            table.increments('id').primary();   
            table.string('title').notNullable(); 
            table.float('price');
            table.string('thumbnail');
        });
        
        
        
        const articulos = [
            {title: 'Camiseta titular Real Madrid'  ,price: 1800, thumbnail:'https://assets-es.imgfoot.com/media/cache/1200x1200/photo-maillot-real-madrid.jpg' },
            {title: 'Short titular Real Madrid', price: 3200, thumbnail: 'https://media.futbolmania.com/media/catalog/product/cache/1/image/0f330055bc18e2dda592b4a7c3a0ea22/H/1/H18484_pantalon-corto-color-blanco-adidas-real-madrid-2022-2023_1_completa-frontal.jpg'},
            {title: 'Buzo seleccion argentina', price: 1800, thumbnail: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/46b55830aa824f4c901aab0a00c7d9d5_9366/Buzo_Prepartido_Warm_Seleccion_Argentina_Azul_FH8596_01_laydown.jpg'}
        ];
        
         await mariaDbClient('articulos').insert(articulos);
        
        console.log('tabla productos en mariaDb creada con éxito')
    } catch (error) {
        console.log('error al crear tabla productos en mariaDb')
        console.log(error)
    } finally {
         await mariaDbClient.destroy();
    }
    
    




const sqliteClient = knex(config.sqlite3)

    try {
        
        await sqliteClient.schema.dropTableIfExists('mensajes');
        await sqliteClient.schema.createTable('mensajes', table => {
            table.increments('id').primary();
            table.string('autor').notNullable();
            table.string('hora');
            table.string('texto');
        });

        const mensaje = [
            {autor: 'Base de Datos'  ,hora: "00:00",texto:'BIENVENIDOS!' },
            {autor: 'Administracion', hora: "00:00", texto: 'AQUI PUEDES ESCRIBIR TUS MENSAJES'}
        ];

        await sqliteClient('mensajes').insert(mensaje);

        console.log('tabla mensajes en sqlite3 creada con éxito')
    } catch (error) {
        console.log('error al crear tabla mensajes en sqlite3')
    } finally {
        sqliteClient.destroy() 
    }