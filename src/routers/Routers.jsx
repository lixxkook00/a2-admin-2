import React from 'react'
import { Route,Routes} from 'react-router-dom';

import LockedToken from '../pages/LockedToken';
import EnterAddress from '../pages/EnterAddress'

export default function Routers() {
  return (
    <Routes>
        <Route exact path="/" element={< EnterAddress/>} />
        <Route exact path="/:_addressWallet" element={< LockedToken/>} />
    </Routes>
  )
}
