import React from 'react'
import HomeLayout from '../layout/Home/homeLayout'
import Dashboard from './dashboard'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Tickets from './tickets'
import Favorite from './favorite'
import Messages from './messages'
import Transaction from './transaction'
import Settings from './settings'
import { MainCard } from '../components/widgets/cards/mainCard'
function HomePage() {
  const currentRoute1 = useLocation().pathname;
  { console.log(currentRoute1) }
  return (
    <HomeLayout>
      {currentRoute1 == "/" && <Navigate to="/dashboard/sights" replace={true} />}
      {currentRoute1 == "/dashboard" && <Navigate to="/dashboard/sights" replace={true} />}
      {["Europ", "Sights", "Africa"].map((item, index) => {
        return (
          currentRoute1 == "/dashboard" + "/" + item.toLowerCase() && <Navigate to={"/dashboard" + "/" + item.toLowerCase() + "/mostpopular"} replace={true} />
        )
      })}
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="sights" element={<MainCard></MainCard>}>
            <Route path="mostpopular" element={<></>}></Route>
            <Route path="specialoffers" element={<></>}></Route>
            <Route path="nearme" element={<></>}></Route>
          </Route>
          <Route path="europ" element={<>europ</>}>
            <Route path="mostpopular" element={<><h1>Most popu</h1></>}></Route>
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