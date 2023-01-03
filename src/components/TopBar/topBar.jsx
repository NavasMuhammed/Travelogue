import React from 'react'
import Notifications from '../widgets/notification'
import "./topBar.scss"
function TopBar() {
  return (
    <div className="topBar-container">
      <div className="search-container">
        <input className="search-input" placeholder="Search for your favorite destination" type="text" />
        <button className="btn-search">Search</button>
      </div>
      <div className="profile-container">
        <Notifications badge={true} />
      </div>
    </div>
  )
}

export default TopBar