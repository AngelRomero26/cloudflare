const { getInstance } = require ('./dependencyLocator.js');
const CloudFlare = require('../../services/cloudflare.js');

const serviceLocator = getInstance();

const nameServices = {
    cloudflare: 'cloudflare'
}

function init() {
    serviceLocator.bindLazySingleton(nameServices.cloudflare, ()=> CloudFlare.getInstance());
}

function getCloudFlare() {
    return serviceLocator.get(nameServices.cloudflare);
}
module.exports = { init, getCloudFlare };