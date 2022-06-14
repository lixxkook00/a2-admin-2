import React,{useState} from 'react'
import './EnterAddress.scss'

export default function EnterAddress() {

    const [walletAddress,setWalletAddress] = useState()

  return (
   <div className="enter-wallet centering">
        <div className="container">
            <div className="row">
                <div className="col-xl-12 enter-wallet-title">
                    AR FOREX TOKEN LOCKED EVENTS
                </div>
                <div className="col-xl-12 enter-wallet-logo centering">
                    <img src="./img/logo.png" alt="" />
                </div>
                <div className="col-xl-12">
                    <input value={walletAddress} onChange={evt => setWalletAddress(evt.target.value)} type="text" placeholder="Enter Wallet address..."/>
                </div>
                <div className="col-xl-12 centering">
                    <a href={`/${walletAddress}`} className="centering">
                        VIEW
                    </a>
                </div>
            </div>
        </div>
   </div>
  )
}
