import React from 'react'
import Notifications from '../widgets/notification'
import "./topBar.scss"
import user from '../../assets/user.png'
import { DashboardIcons } from '../icons'
function TopBar() {
  return (
    <div className="topBar-container">
      <div className="search-container">
        <input className="search-input" placeholder="Search for your favorite destination" type="text" />
        <button className="btn-search">Search</button>
      </div>
      <div className="profile-container">
        <Notifications badge={true} />
        <div className="user">
          <img src={user} alt="" />
          <span>Beeku</span>
        </div>
        <div className="arrow">
          <DashboardIcons icon="downArrow" selected={false}></DashboardIcons>
        </div>
      </div>
    </div>
  )
}

export default TopBar