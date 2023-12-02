const express = require("express");
const app = express();
const port = 3000;

// Esta linea(middleware) es obligatoria si mandaremos parametros por body
app.use(express.json());


app.get('/', (req, res)=> {
    // logica de la ruta request, response
    res.send("Hola mundo desde expresss by: Jesus Cardenas");
});

app.get('/libros', (req, res)=> {
    res.send("Entro a la ruta de libros de Jesus");
});

// app.get('/personas', (req, res)=> {
//     Esto es una salida en texto plano
//     res.send("Entro a la ruta de personas de Jesus");
//     Salida en formato JSON
//      .status(xxx) singinica el codigo HTTP 
//     res.status(400).json({
//         current_time: new Date(),
//         message: "Saldo insuficiente",
//         data: null
//     });
// });

app.get('/personas/:nombre', (req, res)=> {
    res.status(200).json({
        current_time: new Date(),
        message: "Respuesta desde personas get",
        data: null,
        params: req.params
    });
});

// Parametro URL o segment URL
app.get('/validarfecha/:year', (req, res)=> {
    // const year = req.params.year;

    // con destructuracion
    const {year} = req.params;

    if (year == 2023) {
        res.status(200).json({
            current_time: new Date(),
            message: "Es el año actual",
            data: null,
            current_year: new Date().getFullYear()
        });
    } else {
        res.status(400).json({
            current_time: new Date(),
            message: "No es el año actual",
            data: null,
        });
    }

});

// Query param o query string param

app.get('/peliculas', (req, res)=> {

    // metodo get que permite filtar alguna pelicula

    if (req.query.nombre) {
        res.status(200).json({
            current_time: new Date(),
            message: "Se esta intentando filtrar la pelicula " + req.query.nombre,
            data: null,
            query_params: req.query,
            pelicula_year: req.query.year
        });
    } else {
        res.status(200).json({
            current_time: new Date(),
            message: "Listar todas las peliculas",
            data: null,
            query_params: req.query,
            pelicula_year: req.query.year
        });
    }
});

app.post('/peliculas', (req, res)=>{
    res.status(200).json({
        current_time: new Date(),
        message: "Entro al metodo POST que agrega peliculas.",
        data: null,
        post_data: req.body,
        query_data: req.query
    });
});

/*
req.body - POST, PUT, DELETE, PATCH
req.query - POST, PUT, DELETE, GET
req.params - POST, PUT, DELETE, GET
*/

app.put('/peliculas', (req, res)=>{
    res.status(200).json({
        current_time: new Date(),
        message: "Entro al metodo PUT que actualizar peliculas.",
        data: null
    });
});

app.delete('/peliculas', (req, res)=>{
    res.status(200).json({
        current_time: new Date(),
        message: "Entro al metodo DELETE que elimina peliculas.",
        data: null
    });
});


app.listen(port, ()=>{
    console.log("Servidor corriendo en http://localhost:" + port);
});