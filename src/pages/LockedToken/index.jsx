import React,{useState,useEffect} from 'react'
import './LockedToken.scss'

import {useParams} from 'react-router-dom'
import {getLockData} from '../../utils/Data'

import Token from '../../components/Token'

export default function LockedToken() {
    const [lockedData, setLockedData] = useState('');
    const [amount,setAmount] = useState(0)

    let {_addressWallet} = useParams();

    async function getLockedDataByAddress() { 
        const x = await getLockData(_addressWallet);
        return x;
    }
    useEffect(() => { 
        async function load() { 
            let x = await getLockedDataByAddress();
            // console.log('aaa',x);
            
            setLockedData(x)

            setAmount((x[0].Data.amount/1000000)*20)
        }
        load();
    },[])

    let dollarUSLocale = Intl.NumberFormat('en-US');

  return (
    <div className="admin">
        <div className="container">
            <div className="row">
               <div className="col-xl-12 admin-title">
                    AR FOREX TOKEN LOCKED EVENTS
               </div>

                <div className="col-xl-12 admin-logo centering">
                    <img src="./img/logo.png" alt="" />
                </div>

               <div className="col-xl-12 admin-address">
                    {_addressWallet}
               </div>

               <div className="col-xl-12 admin-subtitle">
                   Locked AZT Tokens  
                   <span className="primary-text">
                        {"  " + dollarUSLocale.format(amount) + " AZT"}
                   
                        {
                                _addressWallet === "0x658bAD8f6C8E2Bca55aCE922D5530fc152ff8644"
                                ?
                                " (50%)"
                                :
                                " (20%)"
                        }
                   </span>
               </div>

               {
                lockedData !== ''
                ?
                 lockedData.map((item,index) => {
                    console.log(item)
                    return (
                        <Token key={index} data={item} index={index}/>
                    )
                 })
                :
                <div className="loading">
                    <img src="./img/loading.gif" alt="" />
                </div>
               }
            </div>
        </div>
    </div>
  )
}
