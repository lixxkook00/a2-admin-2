
import Web3 from "web3";
import { vestingContract,contractABI} from "./contractInfo";




export const Web3Provider = async () => { 
   const result = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/'));
   return result;
}

export const SMContract = async (contractAddress) => { 
    // const contractAddress = "0xadbe5341037c02080209e714aad4616eb490cc50";
    const web3= await Web3Provider();
    const sm =new web3.eth.Contract(contractABI, contractAddress);
    return sm;
}

// 0x178e3a597850ffCAf7c6CDf1Bce378f6Baf3bEEb

export const getLockData = async(walletLock) => { 
    console.log(vestingContract)
    // console.log(walletLock)
    let arr = [];
   
    for (var i = 0; i < 20; i++) { 
        let contractSM = await SMContract(vestingContract[i].vestingContract);
        let data = await contractSM.methods['lockData'](walletLock).call();
        // console.log(data);
        arr.push({Quarter: i,Data: data})
        }
        // console.log(arr);
    return arr;
}

