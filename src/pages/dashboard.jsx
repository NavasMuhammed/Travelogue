import React from 'react'
import { MainCard } from '../components/widgets/cards/mainCard'
import "./dashboard.scss"
import { cardData } from './data'
import { Link, Outlet, useLocation } from 'react-router-dom'
function Dashboard() {
    const currentRoute = useLocation().pathname.split("/");
    console.log(currentRoute[3]);
    return (
        <div className="dashboard-container">
            <span className="mainTitle">Hello Alison Burger !</span>
            <span className="welcome-text">welcome back and explore the world</span>
            <div className="card-container">
                <div className="vertical-menu">
                    {["Europ", "Sights", "Africa"].map((item, index) => {
                        return (
                            <Link to={item.toLowerCase()}>
                                <div key={index} className={currentRoute[2] == item.toLowerCase() ? "vm-items-selected" : "vm-items"}>{item}</div>
                            </Link>
                        )
                    })}
                </div>
                <div className="card-box">
                    <Outlet />
                </div>
            </div>
            <div className="bottom-menu-container">
                {["Most Popular", "Special Offers", "Near Me"].map((item, index) => {
                    return (
                        <Link to={currentRoute[2] + "/" + item.split(" ").join("").toLowerCase()}>
                            <div key={index} className={currentRoute[3] == item.split(" ").join("").toLowerCase() ? "menu-item-selected" : "menu-items"}>
                                {console.log(currentRoute[3] == item.split(" ")[2])}
                                {item}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div >
    )
}

export default Dashboard