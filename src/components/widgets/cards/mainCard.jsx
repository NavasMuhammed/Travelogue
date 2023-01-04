import React from 'react'
import { DashboardIcons } from '../../icons'
import "./mainCard.scss"
export const MainCard = ({ image, name,location, price }) => {
  return (
    <div className="main-card-wrapper">
      <div className="card-image-container">
        <img src={image} alt="" />
      </div>
      <div className="card-row-1">
        <span>{name}</span>
        <DashboardIcons icon={"bookMark"} />
      </div>
      <div className="card-row-2">
        <div className="lc">
          <DashboardIcons icon={"location"} />
          <span>{location}</span>
        </div>
        <div className="mc">
          <span>{price}</span>
        </div>
      </div>
    </div>
  )
}
