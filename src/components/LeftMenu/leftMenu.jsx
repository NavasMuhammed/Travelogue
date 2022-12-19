import React from 'react'
import { LeftMenuItems } from './data'
import "./leftMenu.scss"
function LeftMenu() {
  return (
    <div className="left-menu-container">
      <div className="left-menu-bg">
        <div className="circle"></div>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
      </div>
      <div className="left-menu-items-container">
        {LeftMenuItems.map((item, index) => {
          return (
            <div key={index} className="left-menu-items">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAhUlEQVRIid2UUQrAIAxDy07n/Y+gB3n7cw7UNR2IW36TEkxszX4DIAGFPjKQItrWIA8G6mBE2xoAMHjdjVO0hzfCKLY1KGZXHC1a/gaxgzQpeviL3AYKlnbgzpXgorlzneiq/tWzlb7WdRDKVYGSqxLRM9Hh9uxghYFywELHTlk0/dh9Fic8pXankphXVAAAAABJRU5ErkJggg==" />
              <span>{item.title}</span>
            </div>
          )
        })
        }
      </div>

    </div>
  )
}

export default LeftMenu