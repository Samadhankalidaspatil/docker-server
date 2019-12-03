const express= require('express')
const bodyParser = require('body-parser')
const routerProduct = require('./routes/product')


const app = express()

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });


app.use(function(request, response, next)
{
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();

});

  app.use(bodyParser.json())
  app.use('/product', routerProduct)

app.get('/', (resuest, response) => {
    response.send('welcome to backend');
})

app.listen(8080, () => {
    console.log('server started on port 8080')
})