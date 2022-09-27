const HelperQaPage = require("../page/HelperQa.page");

const axios = require("axios").default;

describe('api request from wdio', () => {
    axios.defaults.baseURL = 'https://mailsac.com/api';
    axios.defaults.headers.common['Mailsac-Key'] = 'k_QrHoxUi0a76RWX6wABjOQdU1L087VbbVffdPfof7';
    let status;

    it('Get validation link', async() => {
        await axios.get('/')
            .then((response) => {
                status=response.status;
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
            expect(status).toEqual(200);
    });

    it('create POST request', async() => {
       await axios
            .post('/validations/addresses', {
                emails: [
                    "qwert12345@mailsac.com",
                    "qwerty796@example.com"
                ]
            })
            .then((response) => {
                status=response.status;
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
            expect(status).toEqual(200);
    });

    it('check Email', async () => {
        const status = await HelperQaPage.checkMessage('api@mailsac.com');
        expect(status).toEqual(200);
    });

});