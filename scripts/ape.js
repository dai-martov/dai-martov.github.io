import { ethers } from "https://dai-martov.github.io/scripts/ethers-5.2.esm.min.js";

async function getRes() {
    let json_data = await fetch('https://dai-martov.github.io/public/Ape.json')
    const [apeRes, dbRes] = await Promise.all([
        fetch('https://dai-martov.github.io/public/Ape.json'),
        fetch('https://dai-martov.github.io/public/db2.json')
      ]);
    let ape = await apeRes.json()
    let db = await dbRes.json()
    return [ape, db]
}

getRes().then(([ape, db]) => {
    console.log("Out", ape)
}).catch(error => {console.log(error)})


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
