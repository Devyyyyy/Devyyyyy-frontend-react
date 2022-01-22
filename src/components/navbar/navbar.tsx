import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./navbarElements";
import { IoSettingsSharp } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";

export default function Navbar() {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/dev">
                        데브매칭
                    </NavLink>
                    <NavLink to="/community">
                        커뮤니티
                    </NavLink>
                    <NavLink to="/study">
                        스터디
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