const imagesNetwork = require ('../network/imagesNetwork')
function routes(app){

    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
    //redirigir 
    app.use("/images", imagesNetwork)   
   
}

module.exports = routes;