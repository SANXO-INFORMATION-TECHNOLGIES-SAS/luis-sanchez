import express from "express";
import fs from "fs";

const app = express();
//Establezco un endpoint para responder a la solicitud inicial del servicio.
app.get("/", (req,res)=>{
    res.send("Hola! Bienvenido a la tienda de Coquito Amarillo SAS");
});

app.get("/contacto", (req,res)=>{
    res.send("Enviame un mensaje...");
});

//Inicializa la aplicación creando un punto de respuesta a través del púerto 3000.
app.listen(3000, () => {
    console.log('Servivio en espera, puerto 3000.');
});

