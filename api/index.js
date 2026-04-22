const express = require("express");
const cors = require("cors");
const bodyParser=require("body-parser");

const app= express();
const Port = 5000;

app.get("/teste",(req,res)=>{
    res.send("Seja Bem-Vindo ao Teste")
})

app.get("/login",(req,res)=>{
    res.send("Seja Bem-Vindo ao login")
})

app.get("/produto",(req,res)=>{
    res.send("Seja Bem-Vindo ao produto")
})
app.get("/perfil",(req,res)=>{
    res.send("Seja Bem-Vindo ao perfil")
})
//ROTAS PRODUTO - CREATE


 

app.listen(Port,()=>{
    console.log(`Servidor Rodando na Porta,${Port}`)
})
