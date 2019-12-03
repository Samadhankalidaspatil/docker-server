const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = 'select * from employee'
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult( error, data ))
    })
})


router.post('/', (request, response) => {
    const {id, name, salary} = request.body
    const connection = db.connect()
    const statement = `insert into employee (id, name, salary) values('${id}', '${name}', ${salary})`;
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult( error, data ))
    })
})

module.exports = router