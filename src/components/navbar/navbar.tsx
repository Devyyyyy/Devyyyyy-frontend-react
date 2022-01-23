import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, Logo} from "./navbarElements";
import { IoSettingsSharp } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";

export default function Navbar() {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <Logo src={require("../../assets/images/logo.png")}/>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/devFinder">
                        데브파인더
                    </NavLink>
                    <NavLink to="/community">
                        커뮤니티
                    </NavLink>
                    <NavLink to="/techBlog">
                        기술블로그
                    </NavLink>
                    <NavLink to="/calender">
                        컨퍼런스 일정
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/signin">
                            {FiLogIn}
                        </NavBtnLink>
                        <NavBtnLink to="/settings">
                            {IoSettingsSharp}
                        </NavBtnLink>
                    </NavBtn>
                </NavMenu>
                <Bars/>
            </Nav>
        </div>
    );
}