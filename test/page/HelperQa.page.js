const { default: axios } = require("axios")

class HelperQa{

async configAxios(){
    return axios.create({
        baseURL: "https://mailsac.com/api/",
        headers: {
            "Host": "mailsac.com",
            "Mailsac-Key": `k_QrHoxUi0a76RWX6wABjOQdU1L087VbbVffdPfof7`,
        },
    });
}

async catchErrors(error) {
    console.dir(error);

    if (typeof error.response !=='undefined') {
        console.log("---------------API REQUEST ERROR------------------");
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        console.log("---------------API REQUEST ERROR------------------");
    }
    throw error;
}

async checkMessage(email) {
    const client= await this.configAxios();
    return await client.get(`addresses/${email}/messages`)
    .then(async response=>{
        console.log(await response.data);
        return await response.status;
    })
    .catch((error)=>{
        console.error(error);
    })    
}
}
module.exports=new HelperQa();
