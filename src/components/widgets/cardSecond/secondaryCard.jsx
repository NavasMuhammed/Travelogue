import React from 'react'
import { Outlet } from 'react-router-dom'
import { DashboardIcons } from '../../icons'
import { cardData } from './data'
import "./SecondaryCard.scss"
export const SecondaryCard = () => {
  return <>
    {
      cardData.map((item, index) => {
        return (
          <div key={index} className="secondary-card-wrapper">
            <div className="card-image-container">
              <img src={item.image} alt="" />
            </div>
            <div className="card-row-1">
              <span>{item.title}</span>
            </div>
            <div className="card-row-2">
              <div className="lc">
                <span>{item.time}</span>
              </div>
              <div className="icon-array">
                <DashboardIcons icon="default"></DashboardIcons>
                <DashboardIcons icon="default"></DashboardIcons>
                <DashboardIcons icon="default"></DashboardIcons>
              </div>
            </div>
          </div>
        );
      })
    }
  </>

}
