//services locator
const Client = require('./axios')
const FormData = require ('form-data')
const fs = require('fs');

class CloudFlare extends Client {
    
    //singleton
    static instance;
    constructor (){
        super();
    }
    static getInstance(){
        if(!CloudFlare.instance){
            CloudFlare.instance = new CloudFlare();
        }
        return CloudFlare.instance;
    }

    uploadImage(path){
        //se instala una libreria para usar fomrFData = npm i --save form-data
        const formData = new FormData();
        formData.append('file', fs.readFileSync(path))

        this.client.post( '/accounts/c824bdac02e96d13150a861ce474cf2b/images/v1',formData )
    }

    deleteImage(imageId){
        return this.client.delete('/accounts/c824bdac02e96d13150a861ce474cf2b/images/v1/' + imageId)
    }

    getImages(){
        return this.client.get('/accounts/c824bdac02e96d13150a861ce474cf2b/images/v1')
    }
}
module.exports = CloudFlare;

//imagesNetwork crear ruta
//servics
//controllers