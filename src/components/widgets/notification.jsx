import React from 'react'
import "../TopBar/topBar.scss"
import { DashboardIcons } from "../icons/index"
function Notifications({ badge }) {
    return (
        <div className="notification-container">
            {badge && <div className="badge"></div>}
            <DashboardIcons icon="notification" selected={false} />
        </div>
    )
}

export default Notifications
