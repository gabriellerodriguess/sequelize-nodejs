import express from "express" // const express = require('express')
import { Sequelize } from 'sequelize'
import { create } from 'express-handlebars';
import bodyParser from 'body-parser'

const app = express() //cria uma instância (cópia) do framework express
const hbs = create({})

// Register `hbs.engine` with the Express app.

//Configs
    //Config template engine Handlebars
    app.engine('handlebars', hbs.engine);
    app.set('view engine', 'handlebars');
    app.set('views', '../views');

    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    //Database MYSQL
        const sequelize = new Sequelize('test_sequelize', 'root', 'mysql123', {
            host: 'localhost', //qual servidor está o banco de dados
            dialect: 'mysql' //qual tipo de banco de dados
        })
//

app.get('/cadastro', (req,res) => {
    res.render('form')
})

app.post('/insert', (req,res) => { 
    res.send(`Title:${req.body.title} / Content: ${req.body.content}`)
})

app.listen(3030, () => {
    console.log(`app listening on port ${3030}`)
})