//const CloudFlare = require ("../services/cloudflare")
const ServiceLocator = require('../services/services-locator/composer.js');


function OnNewImages(path){
    const cloudFlare = ServiceLocator.getCloudFlare();
    return cloudFlare.uploadImage(path)
}

function deleteImages(imageId){
    const cloudflare =  ServiceLocator.getCloudFlare();
    return cloudflare.deleteImage(imageId);
}

function getImages(){
    const cloudflare = ServiceLocator.getCloudFlare();
    return cloudflare.getImages();
}

module.exports = {
    OnNewImages,
    deleteImages,
    getImages
}