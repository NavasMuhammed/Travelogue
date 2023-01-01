import React from 'react'
import { LeftMenuItems } from './data'
import { DashboardIcons } from '../icons/index'
import "./leftMenu.scss"
function LeftMenu() {
  return (
    <div className="left-menu-container">
      <div className="left-menu-bg">
        <div className="circle"></div>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
      </div>
      <div className="left-menu-items-container">
        {LeftMenuItems.map((item, index) => {
          return (
            <div key={index} className="left-menu-items">
              <DashboardIcons icon={item.name} selected={false}></DashboardIcons>
              <span>{item.title}</span>
            </div>
          )
        })
        }
      </div>

    </div>
  )
}

export default LeftMenu