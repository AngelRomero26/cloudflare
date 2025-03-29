const express = require('express')
const app = express()

const { init } = require('./src/services/services-locator/composer.js')
init();
const cors = require('cors');
app.use(cors());

const routes = require ('./src/routes')
routes(app)

const port = 3000

app.use(cors({
    origin: '*', // Permitir todas las solicitudes
    methods: ['GET', 'POST', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
}));

app.use(express.json());

   
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})