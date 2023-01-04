import React from 'react'
import { MainCard } from '../components/widgets/cards/mainCard'
import "./dashboard.scss"
import { cardData } from './data'
function Dashboard() {
    return (
        <div className="dashboard-container">
            <span className="mainTitle">Hello Alison Burger !</span>
            <span className="welcome-text">welcome back and explore the world</span>
            <div className="card-container">
                <div className="vertical-menu">
                    {["Europ", "Sights", "Africa"].map((item, index) => {
                        return (
                            <div key={index} className="vm-items">{item}</div>
                        )
                    })}
                </div>
                <div className="card-box">
                    {
                        cardData.map((item, index) => {
                            return (
                                <div >
                                    < MainCard image={item.image} location={item.location} name={item.name} price={item.price} key={index} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default Dashboard