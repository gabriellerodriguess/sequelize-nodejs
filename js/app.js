import express from "express" // const express = require('express')
import { engine } from 'express-handlebars'
import { Sequelize } from 'sequelize'


const app = express() //cria uma instância (cópia) do framework express

//Configs
    //Config template engine Handlebars
        app.engine('handlebars', engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    //Database MYSQL
        const sequelize = new Sequelize('test_sequelize', 'root', 'mysql123', {
            host: 'localhost', //qual servidor está o banco de dados
            dialect: 'mysql' //qual tipo de banco de dados
        })
//

app.get('/cadastro', (req,res) => {
    res.send('Rota para o cadastro de posts')
})

app.listen(3030, () => {
    console.log(`app listening on port ${3030}`)
})