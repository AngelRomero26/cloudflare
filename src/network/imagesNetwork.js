//importaciones
const Controller = require('../controllers/imagesControllers')
const express = require ('express');
const router = express.Router()

const multer = require('multer')
const upload = multer({ dest: 'uploads/', limits: { fileSize: 5 *1024 *1024} }) //5mb

//lo que hace cuando llega a esa ruta (/upload)
//siempre una funcion que tenga una ruta debe llevar request y response
async function onNewImage(request, response){

    const file = request.file;
    const result = await Controller.OnNewImages(file.path)
    response.send(result)
    console.log(file)
}

async function deleteImage(request, response){
    const imageId = request.params.imageId;
    const result = await Controller.deleteImages(imageId)
    response.send(result.data)
}

async function getImages(request, response){
    const result = await Controller.getImages()
    response.json(result.data);
}

//rutas
router.post("/upload", upload.single('file'), onNewImage)
router.delete("/delete/:imageId", deleteImage)
router.get("/get", getImages)


module.exports = router

