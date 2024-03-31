import React, { useState } from 'react';
import MenuIcon from '../img/menuIcon.jpg'
import ComapnyInfo from './ComapnyInfo';
import SelfInfo from './SelfInfo';

const Layout = () => {
    const [showMenu, setShowMenu] = useState(true)
    const [sideBar, setSideBar] = useState("")

    console.log("showMenu", showMenu)
    return(
        <div className='layout'>
            <div
                style={{
                    width: showMenu
                        ? '300px'
                        : '0px',
                }}
            >
                <div className='menuImg'>

                </div>
                <div className='menuList'>
                    <div
                        onClick={() => {
                            setSideBar("ComapnyInfo")
                        }}
                    >
                        公司基本資料
                    </div>
                    <div
                        onClick={() => {
                            setSideBar("SelfInfo")
                        }}
                    >
                        基本資料
                    </div>
                </div>
            </div>
            <div
                style={{
                    width: showMenu 
                        ? 'calc(100% - 300px)'
                        : '100%'
                }}
            >

                <img
                    src={MenuIcon}
                    onClick={() => {
                        setShowMenu((prev) => !prev)
                    }}
                    alt=''
                    style={{
                        height: "50px",
                        width: "50px"
                    }}
                />

                {
                    sideBar === "ComapnyInfo"
                        ? <ComapnyInfo />
                        : sideBar === "SelfInfo"
                            ? <SelfInfo />
                            : null
                }
            
            </div>
        </div>
    )
}
export default Layout