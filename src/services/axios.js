const axios = require ('axios');

class Client{
    client;

    constructor () {
        this.client = axios.create({
            baseURL: 'https://api.cloudflare.com/client/v4',
            headers:{
                'Authorization': 'Bearer uGJVMB1Iqc_hArqlO6AOALULVjCilACkzxIM7jtb'
            }
        });
    }
} 

module.exports = Client;