import React from 'react'
import HomeLayout from '../layout/Home/homeLayout'
import Dashboard from './dashboard'
import { Route, Routes } from 'react-router-dom'
import Tickets from './tickets'
import Favorite from './favorite'
import Messages from './messages'
import Transaction from './transaction'
import Settings from './settings'
import { MainCard } from '../components/widgets/cards/mainCard'
function HomePage() {
  return (
    <HomeLayout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="sights" element={<MainCard></MainCard>}>
            <Route path="mostpopular" element={<></>}></Route>
            <Route path="specialoffers" element={<></>}></Route>
            <Route path="nearme" element={<></>}></Route>
          </Route>
          <Route path="europ" element={<>europ</>}>
            <Route path="mostpopular" element={<></>}></Route>
            <Route path="specialoffers" element={<></>}></Route>
            <Route path="nearme" element={<></>}></Route>
          </Route>
          <Route path="africa" element={<>africa</>}>
            <Route path="mostpopular" element={<></>}></Route>
            <Route path="specialoffers" element={<></>}></Route>
            <Route path="nearme" element={<></>}></Route>
          </Route>

        </Route>
        <Route path="/ticket" element={<Tickets></Tickets>}></Route>
        <Route path="/favorite" element={<Favorite></Favorite>}></Route>
        <Route path="/message" element={<Messages></Messages>}></Route>
        <Route path="/transaction" element={<Transaction></Transaction>}></Route>
        <Route path="/settings" element={<Settings></Settings>}></Route>
      </Routes>
    </HomeLayout>
  )
}

export default HomePage