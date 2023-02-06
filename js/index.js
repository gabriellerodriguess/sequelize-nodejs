import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('test_sequelize', 'root', 'mysql123', {
    host: 'localhost', //qual servidor está o banco de dados
    dialect: 'mysql' //qual tipo de banco de dados
});

const Post = sequelize.define('Posts', {
    title: {
        type: Sequelize.STRING //string tem limite de caracteres
    },
    content: {
        type: Sequelize.TEXT // text ñ tem limite de caracteres
    }
});

Post.create({
    title: 'Jogo do Brasil',
    content: 'Menino Ney fez Gol'
});

const User = sequelize.define('Users', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

User.create({
    firstName: 'Gabrielle',
    lastName: 'Sousa',
    age: 21,
    email: 'gabriellereis@gmail.com'
})


// Prox Aula: Criar uma aplicação utilizando Sequelize e MYSQL.
// User.sync({force: true}) // sincroniza o Model com o MySQL