import React from 'react'
import { MainCard } from '../components/widgets/cards/mainCard'
import "./dashboard.scss"
import { cardData } from './data'
import { Link, Outlet, useLocation } from 'react-router-dom'
function Dashboard() {
    const currentRoute = useLocation().pathname.split("/")[2];
    console.log(currentRoute);
    return (
        <div className="dashboard-container">
            <span className="mainTitle">Hello Alison Burger !</span>
            <span className="welcome-text">welcome back and explore the world</span>
            <div className="card-container">
                <div className="vertical-menu">
                    {["Europ", "Sights", "Africa"].map((item, index) => {
                        return (
                            <Link to={"/dashboard/" + item.toLowerCase()}>
                                <div key={index} className={currentRoute == item.toLowerCase() ? "vm-items-selected" : "vm-items"}>{item}</div>
                            </Link>
                        )
                    })}
                </div>
                <div className="card-box">
                    <Outlet />
                </div>
            </div>
        </div >
    )
}

export default Dashboard