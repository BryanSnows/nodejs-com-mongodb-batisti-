// config inicial
const express = require("express")
const mongoose = require("mongoose")
const app = express()


// forma de ler JSON
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())






//rotas da api 
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)





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


