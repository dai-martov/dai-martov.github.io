import { ethers } from "https://cdn.ethers.io/lib/ethers-5.2.esm.min.js";
const https = require('https');

async function getApe() {
    let data = ''
    let json_data = ''

    let req = await https.get("https://dai-martov.github.io/public/Ape.json", function(res) {
        res.on('data', function(stream) {
            data += stream;
        });
        res.on('end', function() {
            json_data = JSON.parse(data);
        });
    });
    req.on('error', function(e) {
        console.log(e.message);
    });
    return json_data
}

Ape = getApe()
console.log(Ape)

// let rawApe = fs.readFileSync('Ape.json');
// let rawDb = fs.readFileSync('db2.json');
// let Ape = JSON.parse(rawApe);
// let db = JSON.parse(rawDb);
const apeAddress = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
//
// async function getBalance() {
//     if (typeof window.ethereum !== 'undefined') {
//       const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
//       const provider = new ethers.providers.Web3Provider(window.ethereum)
//       console.log({ provider })
//       const contract = new ethers.Contract(apeAddress, Ape.abi, provider)
//       try {
//         const data = await contract.balanceOf(account)
//         console.log('balance: ', data.toString())
//       } catch (err) {
//         console.log("Error: ", err)
//       }
//     }    
// }
// getBalance()
