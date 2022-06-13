import React from 'react'
import { Route,Routes} from 'react-router-dom';

import Admin from '../pages/Admin';

export default function Routers() {
  return (
    <Routes>
        <Route exact path="/:_addressWallet" element={< Admin/>} />
    </Routes>
  )
}
