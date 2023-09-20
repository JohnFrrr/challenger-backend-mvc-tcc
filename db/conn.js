const mongoose = require("mongoose")

async function main() {

    try{

        await mongoose.connect("mongodb+srv://yuriTCC:01020304@apitcc.wm8hsil.mongodb.net/?retryWrites=true&w=majority");

        console.log("banco conectado com sucesso!")
        
    } catch (error){
        console.log(`Erro: ${error}`)
    }
}

module.exports = main;