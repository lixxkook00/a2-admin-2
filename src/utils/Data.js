import Web3 from "web3";
import { vestingContract,contractABI} from "./contractInfo";

export const Web3Provider = async () => { 
   const result = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/'));
   return result;
}

export const SMContract = async (contractAddress) => {
    const web3= await Web3Provider();
    const sm =new web3.eth.Contract(contractABI, contractAddress);
    return sm;
}

export const getLockData = async(walletLock) => {
    let arr = [];
    let test = []
   
    for (var i = 0; i < 20; i++) { 
        let contractSM = await SMContract(vestingContract[i].vestingContract);
        let data = await contractSM.methods['lockData'](walletLock).call();
            arr.push(
                {
                    Quarter: i,
                    Data: data
                }
            )

            test.push(
                {
                    Data: data
                }
            )
        }

    console.log(test)
    return arr;
}


