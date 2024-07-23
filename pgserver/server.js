// const express = require('express');
// const bodyParser = require('body-parser');
// const axios = require('axios');
// const path = require('path');
// const crypto = require('crypto');
// const cors = require('cors');

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
// app.use(cors());
// app.use(bodyParser.urlencoded({extended: false}));
// //app.use(express.static(path.join(__dirname,'public')));


// app.get('/',function(req,res){
//     res.send('Hello');
// })
//  app.post("/pay", async function(req, res){
//     res.send('this is pay');
//     try {
//         console.log(req.body);
//         const { amount, MUID, number } = req.body;
//         const merchantTransactionId = "T" + Date.now();
//         const data = {
//             merchantId: "PGTESTPAYUAT",
//             merchantTransactionId:  merchantTransactionId ,
//             merchantUserId: MUID,
//             amount: amount*100,
//             redirectUrl: `http://localhost:5000/status?id=${merchantTransactionId}`,
//             redirectMode: "POST",
//            // "callbackUrl": "http://webhook.site/callback-url",
//             mobileNumber: number,
//             paymentInstrument: {
//               type: "PAY_PAGE"
//             }
//           };
//           const payload = JSON.stringify(data);
//           const payloadMain = Buffer.from(payload).toString("base64");
//           const keyIndex = 1;
//           const salt_key = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
//           const string = payloadMain + "/pg/v1/pay" + salt_key;
//           const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//           const checkSum = sha256 + "###" + keyIndex ;

//           const options = {
//             method: 'POST',
//             url: 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay',
//             headers: {
//                   accept: 'application/json',
//                   'Content-Type': 'application/json',
//                   'X-VERIFY': checkSum ,
//                           },
//           data: {
//              request : payloadMain
//           }
//           };
//           await axios.request(options).then(function (response) {
//                 console.log(response.data);
//                 return res.json(response.data);
//             })
//             .catch(function (error) {
//               console.error(error);
//             });          
//     } catch (error) {
//         console.log(error);
//     }

//  })
//  app.post("/status", async function(req,res){
//     const merchantTransactionId = req.query.id
//     const merchantId = "PGTESTPAYUAT"

//     const keyIndex = 1;
//     const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + salt_key;
//     const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//     const checksum = sha256 + "###" + keyIndex;

//     const options = {
//         method: 'GET',
//         url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`,
//         headers: {
//             accept: 'application/json',
//             'Content-Type': 'application/json',
//             'X-VERIFY': checksum,
//             'X-MERCHANT-ID': `${merchantId}`
//         }
//     };

//     // CHECK PAYMENT STATUS
//     axios.request(options).then(async (response) => {
//             if (response.data.success === true) {
//                 const url = `http://localhost:5000/success`
//                 return res.redirect(url)
//             } else {
//                 const url = `http://localhost:5000/failure`
//                 return res.redirect(url)
//             }
//         })
//         .catch((error) => {
//             console.error(error);
//         });

// });

// app.listen(5000); 


const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
const crypto = require('crypto');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

//const salt_key = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399"; 
const salt_key = "96434309-7796-489d-8924-ab56988a6076"; 

app.get('/', (req, res) => {
    res.send('Hello');
});

app.post("/pay", async (req, res) => {
    try {
        console.log(req.body);
        console.log('Received request:', req.body);
        const { amount, MUID, number } = req.body;

        if (!amount || !MUID || !number) {
            return res.status(400).json({ error: 'Missing required parameters' });
        }

        const merchantTransactionId = "T" + Date.now();
        const data = {
            merchantId: "PGTESTPAYUAT86",
            merchantTransactionId: merchantTransactionId,
            merchantUserId: MUID,
            amount: amount * 100,
            redirectUrl: `http://localhost:5000/status?id=${merchantTransactionId}`,
            redirectMode: "POST",
            mobileNumber: number,
            paymentInstrument: {
                type: "PAY_PAGE"
            }
        };
        const payload = JSON.stringify(data);
        const payloadMain = Buffer.from(payload).toString("base64");
        const keyIndex = 1;
        const string = payloadMain + "/pg/v1/pay" + salt_key;
        //const string = payloadMain + "/v3/service/access" + salt_key;
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checkSum = sha256 + "###" + keyIndex;
        console.log("string::  "+string)
        console.log("sha256:  "+sha256)
        console.log("checksum :::  "+checkSum)

        const options = {
            method: 'POST',
            url: 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checkSum,
            },
            data: {
                request: payloadMain
            }
        };
        const response = await axios.request(options);
        console.log(response.data);
        return res.json(response.data);
    } catch (error) {
        console.error('Error', error.message); 
        if (error.response) {
            console.error('Error Response Data:', error.response.data);
            console.error('Error Response Status:', error.response.status);
            console.error('Error Response Headers:', error.response.headers);

            return res.status(error.response.status).json({
                success: false,
                message: error.message,
                data: error.response.data
            });
        } else if (error.request) {
            console.error('Error Request:', error.request);
            return res.status(500).json({
                success: false,
                message: 'No response received from PhonePe API'
            });
        } else {
            console.error('Error Message:', error.message);
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
});

app.post("/status", async (req, res) => {
    const merchantTransactionId = req.query.id;
    const merchantId = "PGTESTPAYUAT86";

    const keyIndex = 1;
    const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + salt_key;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + "###" + keyIndex;

    const options = {
        method: 'GET',
        url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-VERIFY': checksum,
            'X-MERCHANT-ID': `${merchantId}`
        }
    };

    try {
        const response = await axios.request(options);
        if (response.data.success === true) {
            const url = `http://localhost:5000/success`;
            return res.redirect(url);
        } else {
            const url = `http://localhost:5000/failure`;
            return res.redirect(url);
        }
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error('Error Response Data:', error.response.data);
            console.error('Error Response Status:', error.response.status);
            console.error('Error Response Headers:', error.response.headers);
        }

        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
