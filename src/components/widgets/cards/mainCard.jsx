import React from 'react'
import { DashboardIcons } from '../../icons'
import { cardData } from './data'
import "./mainCard.scss"
export const MainCard = () => {
  return <>
    {
      cardData.map((item, index) => {
        return (
          <div key={index} className="main-card-wrapper">
            <div className="card-image-container">
              <img src={item.image} alt="" />
            </div>
            <div className="card-row-1">
              <span>{item.name}</span>
              <DashboardIcons icon={"bookMark"} />
            </div>
            <div className="card-row-2">
              <div className="lc">
                <DashboardIcons icon={"location"} />
                <span>{item.location}</span>
              </div>
              <div className="mc">
                <span>{item.price}</span>
              </div>
            </div>
          </div>
        );
      })
    }
  </>

}
