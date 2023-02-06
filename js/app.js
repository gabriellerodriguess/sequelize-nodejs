import express from "express" // const express = require('express')

const app = express() //cria uma instância (cópia) do framework express

app.listen(3030, function () {
    console.log(`app listening on port ${3030}`)
});