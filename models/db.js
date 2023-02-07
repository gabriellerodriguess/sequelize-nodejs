import { Sequelize } from 'sequelize'

//Database MYSQL
const sequelize = new Sequelize('posts_app', 'root', 'mysql123', {
    host: 'localhost', //qual servidor está o banco de dados
    dialect: 'mysql' //qual tipo de banco de dados
});

export const db = {
    Sequelize: Sequelize,
    sequelize: sequelize
}