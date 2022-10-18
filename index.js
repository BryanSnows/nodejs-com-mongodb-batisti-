// config inicial
const express = require("express")
const mongoose = require("mongoose")
const app = express()

const Person =  require('./models/person')

// forma de ler JSON
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//rotas da api 
app.post('/person', async (req, res) =>{

    const {name, salary, approved} = req.body

    if (!name) {
        res.status(422).json({ message: 'o nome é obrigatorio'})
    }
    const person = {
        name, 
        salary, 
        approved
    }

    try {
        await Person.create(person)
        res.status(201).json({ message: 'pessoa inserida no sistema com sucesso'})

    } catch (error) {
        res.status(500).json({error: error})
    }

})

// rota inicial / endpoint
app.get('/', (req, res) => {
    // mostrar requisicao
    res.json({message: 'OI EXPRESS!' })
})

const DB_USER = 'bryan'
const DB_PASSWORD = encodeURIComponent('Engenharia3663@')

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.lmmlqre.mongodb.net/?retryWrites=true&w=majority`
)
.then(() => {
    console.log('conectamos ao mongo db')
    app.listen(3000)
})
.catch((err) => console.log(err))



//entregar uma porta 
//app.listen(3000)


