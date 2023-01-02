import React from 'react'
import LeftMenu from '../../components/LeftMenu/leftMenu'
import TopBar from '../../components/TopBar/topBar'
import "./homeLayout.scss"

function HomeLayout({ children }) {
    return (
        <div className="home-layout">
            <div className="left-menu-grid">
                <LeftMenu></LeftMenu>
            </div>
            <div className="top-bar-grid">
                <TopBar></TopBar>
            </div>
            <div className="children">{children}</div>
        </div>
    )
}

export default HomeLayout