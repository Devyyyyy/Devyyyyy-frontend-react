import React from 'react';
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/dev" activeStyle>
                        데브매칭
                    </NavLink>
                    <NavLink to="/community" activeStyle>
                        커뮤니티
                    </NavLink>
                    <NavLink to="/study" activeStyle>
                        스터디
                    </NavLink>
                </NavMenu>
                <Bars />
                <NavLink to="/profile">
                    <h1>프로필</h1>
                </NavLink>
                <NavLink to="/settings">
                    <h1>설정</h1>
                </NavLink>
            </Nav>
        </div>
    );
}