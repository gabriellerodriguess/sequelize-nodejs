import express from "express"
import { create } from 'express-handlebars'
import bodyParser from 'body-parser'
import { Post }  from "../models/post.js"

const app = express() //cria uma instância (cópia) do framework express
const hbs = create({})

//Configs
    //Configurando template engine Handlebars
    app.engine('handlebars', hbs.engine);
    app.set('view engine', 'handlebars');
    app.set('views', '../views');

    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
//

//Rota para exibir o formulário criado pelo Handlebars
app.get('/cadastro', (req,res) => {
    res.render('form')
})

//Rota definida no action do form, cria os registros no banco de dados a partir dos parâmetro os dados recebidos na requisição
app.post('/insert', (req,res) => { 
    Post.create({
        title: req.body.title,
        content: req.body.content
    })
    .then(() => {
        res.redirect('/')
    })
    .catch((error) => {
        res.send(`Um erro ocorreu ao fazer o post. Erro: ${error}`)
    })
})

//Passando para o handlebars todos os posts gerados no banco de dados
app.get('/', (req,res) => {
    Post.findAll(
        {order: [['id', 'DESC']]
    })
    .then((posts) => {    
        console.log(posts)    
        res.render('home', {posts: posts})
    })
})

//Rota para deletar os registros tanto do front quanto do banco de dados, aqui passamos um parâmetro obrigatório
//para a rota, e usamos o método destroy quando o parâmetro id for igual ao id do registro.
app.get('/deletes:id', (req,res) => {
    Post.destroy({where: {'id': req.params.id}})
    .then(sucess => {
        res.send('Post deletado com sucesso.')
    })
    .catch(error => {
        res.send('Essa postagem não existe.')
    })
})

//Faz o servidor escutar as requisições vindas pela rota definida, no caso a 3030
app.listen(3030, () => {
    console.log(`app listening on port ${3030}`)
})