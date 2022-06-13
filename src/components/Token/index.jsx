import React from 'react'
import './Token.scss'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function Token({percent,date}) {

  return (
    <div className="col-xl-6">
        <div className="token">
            <div className="token-title">
                Unlock countdown
            </div>

            <div className="token-process">
                <ProgressBar now={percent} />
            </div>

            <div className="token-date">
                19 Days, 21 hours, 25 Minutes, 45 seconds
            </div>

            <div className="token-view">
                VIEW
            </div>
        </div>
    </div>
  )
}
