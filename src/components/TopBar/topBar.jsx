import React from 'react'
import "./topBar.scss"
function TopBar() {
  return (
    <div className="topBar-container">
      <div className="search-container">
        <input className="search-input" placeholder="Search for your favorite destination" type="text" />
        <button className="btn-search">Search</button>
      </div>
      <div className="profile-container"></div>
    </div>
  )
}

export default TopBar