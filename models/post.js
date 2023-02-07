import { db } from './db.js'

export const Post = db.sequelize.define('posts', {
    title: {
        type: db.Sequelize.STRING
    },
    content: {
        type: db.Sequelize.TEXT
    }
})
