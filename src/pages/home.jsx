import React from 'react'
import HomeLayout from '../layout/Home/homeLayout'
import Dashboard from './dashboard'
import { Route, Routes } from 'react-router-dom'
import Tickets from './tickets'
import Favorite from './favorite'
import Messages from './messages'
import Transaction from './transaction'
import Settings from './settings'
function HomePage() {
  return (
    <HomeLayout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
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