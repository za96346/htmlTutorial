import React, { useState } from 'react';
import MenuIcon from '../img/menuIcon.jpg'
import WorkIcon from '../img/work.png'

import ComapnyInfo from './ComapnyInfo';
import SelfInfo from './SelfInfo';
import DepartmentManage from './DepartmentManage';
import EmployeeManage from './EmployeeManage';
import RoleManage from './RoleManage';
import PerformanceManage from './PerformanceManage'
import PerformanceManageYear from './PerformanceManageYear'
import Shift from './Shift'
import ShiftSetting from './ShiftSetting'
import SignOut from './SignOut'

const Layout = () => {
    const [showMenu, setShowMenu] = useState(true)
    const [sideBar, setSideBar] = useState("")

    console.log("showMenu", showMenu)
    return(
        <div className='layout'>
            <div
                className='menu_box'
                style={{
                    width: showMenu
                        ? '300px'
                        : '0px',
                }}
            >
                <div className='menuImg'>
                    <img
                        src={WorkIcon}
                        alt=''
                        style={{
                            height: "100px",
                            width: "100px",
                        }}
                    />
                </div>
                <hr/>
                <div
                    className='menuList'
                >
                    <div
                        tabindex="1"
                        onClick={() => {
                            setSideBar("ComapnyInfo")
                        }}
                    >
                        公司基本資料
                    </div>
                    <div
                        tabindex="2"
                        onClick={() => {
                            setSideBar("SelfInfo")
                        }}
                    >
                        基本資料
                    </div>
                    <div
                        tabindex="3"
                        onClick={() => {
                            setSideBar("DepartmentManage")
                        }}
                    >
                        部門管理
                    </div>
                    <div
                        tabindex="4"
                        onClick={() => {
                           setSideBar("EmployeeManage")
                        }}
                    >
                        員工管理
                    </div>
                    <div
                        tabindex="5"
                        onClick={() => {
                            setSideBar("RoleManage")
                        }}
                    >
                        角色管理
                    </div>
                    <div
                        tabindex="6"
                        onClick={() => {
                            setSideBar("PerformanceManage")
                        }}
                    >
                        績效管理
                    </div>
                    <div
                        tabindex="7"
                        onClick={() => {
                            setSideBar("PerformanceManageYear")
                        }}
                    >
                        年度績效管理
                    </div>
                    <div
                        tabindex="8"
                        onClick={() => {
                            setSideBar("Shift")
                        }}
                    >
                        排班管理
                    </div>
                    <div
                        tabindex="9"
                        onClick={() => {
                            setSideBar("ShiftSetting")
                        }}
                    >
                        班表設定
                    </div>
                    <div
                        tabindex="10"
                        onClick={() => {
                            setSideBar("SignOut")
                        }}
                    >
                        登出
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
                            : sideBar === "DepartmentManage"
                                ? <DepartmentManage />
                                : sideBar === "EmployeeManage"
                                    ? <EmployeeManage />
                                    : sideBar === "RoleManage"
                                        ? <RoleManage />
                                        : sideBar === "PerformanceManage"
                                            ? <PerformanceManage />
                                            : sideBar === "PerformanceManageYear"
                                                ? <PerformanceManageYear />
                                                : setSideBar === "Shift"
                                                    ? <Shift />
                                                    : setSideBar === "ShiftSetting"
                                                        ? <ShiftSetting />
                                                        : setSideBar === "SignOut"
                                                            ? <SignOut />
                                                            : null
                }
            
            </div>
        </div>
    )
}
export default Layout