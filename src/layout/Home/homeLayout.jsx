import React from 'react'
import LeftMenu from '../../components/LeftMenu/leftMenu'
import TopBar from '../../components/TopBar/topBar'
import "./homeLayout.scss"

function HomeLayout({ children }) {
    return (
        <div className="home-layout">
            <div className="left-flex">
                <LeftMenu></LeftMenu>
            </div>
            <div className="right-flex">
                <div className="top-bar">
                    <TopBar></TopBar>
                </div>
                <div className="children-container">
                    <div className="children">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default HomeLayout