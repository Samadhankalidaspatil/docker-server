const mysql = require('mysql')

function connect(){
    const connection = mysql.createConnection({

        host: '172.18.4.224',
        user: 'root',
        password: 'root',
        database: 'emp',

        port: 9999
    })

    connection.connect()
    return connection
}


module.exports = {
    connect: connect
}




















