// importando o express e o modulo cors
const express = require("express")
const cors = require("cors")

// invocando express para centralizar todas configurações da aplicação
const app = express()

// aplicação está usando cors
app.use(cors())

// middlers - irá permitir comunicação de dados via Json
app.use(express.json())

// DB Connection
const conn = require("./db/conn")
conn();

app.listen(4000, function(){
    console.log("Servidor está online na porta 4000!")
})