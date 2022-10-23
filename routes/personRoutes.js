const route = require('express').Router()

const Person =  require('../models/person')

route.post('/person', async (req, res) =>{

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

module.exports = route
