import React,{useState} from 'react'
import './Token.scss'
import ProgressBar from 'react-bootstrap/ProgressBar'

import {vestingContract} from '../../utils/contractInfo'

export default function Token({data,index}) {
    const [timeLeft,setTimeLeft] = useState()

    const DDAY = new Date(data.Data.lockTimestamp*1000+data.Data.lockHours*60*60*1000);

    const getTimeLeft = () => {
        var result = ( DDAY.getTime() - new Date().getTime() ) / 1000;

        function secondsToDhms(seconds) {
            seconds = Number(seconds);
            var d = Math.floor(seconds / (3600*24));
            var h = Math.floor(seconds % (3600*24) / 3600);
            var m = Math.floor(seconds % 3600 / 60);
            var s = Math.floor(seconds % 60);

            var dDisplay = d > 0 ? d + (d === 1 ? " day, " : " days, ") : "0 days";
            var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "0 hours";
            var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "0 minutes";
            var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "0 seconds";
            return dDisplay + hDisplay + mDisplay + sDisplay;
        }

        setTimeLeft(secondsToDhms(result))
    }

    setInterval(() => {
        getTimeLeft()
    },1000)

    let percentLeft = ((( DDAY.getTime() - new Date().getTime() ) / 1000/(DDAY.getTime()/1000))*1000).toFixed(0)

    const linkView = `https://bscscan.com/address/${vestingContract[index].vestingContract}`

    let dollarUSLocale = Intl.NumberFormat('en-US');
  return (
    <div className="col-xl-6">
        <div className="token">

            <div className="wrapper">
                <div className="token-title">
                    Unlock countdown
                </div>
                <div className="total-token">
                    {dollarUSLocale.format(data.Data.amount/1000000)} AZT
                </div>
            </div>

            <div className="token-process">
                <ProgressBar now={percentLeft} />
            </div>

            <div className="token-date">
                {timeLeft}
            </div>

            <a href={linkView} className="token-view">
                VIEW
            </a>
        </div>
    </div>
  )
}
