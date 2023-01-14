import React from 'react'
import { Outlet } from 'react-router-dom'
import { DashboardIcons } from '../../icons'
import { cardData } from './data'
import "./SmallCard.scss"
export const SmallCard = () => {
  return <>
    {
      cardData.map((item, index) => {
        return (
          <div key={index} className="small-card-wrapper">
            <div className="card-image-container">
              <img src={item.image} alt="" />
            </div>
            <div className="titile-wrapper">
              <div className="card-row-1">
                <span>{item.title}</span>
              </div>
              <div className="card-row-2">
                <DashboardIcons icon="calandar"/>
                <div className="lc">
                  <span>{item.time}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })
    }
  </>

}
