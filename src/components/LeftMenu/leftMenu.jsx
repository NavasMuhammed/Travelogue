import React from 'react'
import { LeftMenuItems } from './data'
import { DashboardIcons } from '../icons/index'
import "./leftMenu.scss"
import { Route, Routes, Link, useLocation } from 'react-router-dom'
function LeftMenu() {
  const location = useLocation();
  const currentRoute = location.pathname;
  return (
    <>
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
              <>
                <Link to={item.name}>
                  <div key={index} className={currentRoute == "/" + item.name ? "left-menu-items-selected" : "left-menu-items"}>
                    <div className="icon-box"><DashboardIcons icon={item.name} selected={currentRoute == "/" + item.name}></DashboardIcons>
                    </div>
                    <span>{item.title}</span>
                  </div>
                </Link>
              </>
            )
          })
          }
        </div>

      </div>
    </>
  )
}

export default LeftMenu