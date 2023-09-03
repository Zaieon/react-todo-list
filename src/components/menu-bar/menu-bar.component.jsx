import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import './menu-bar.style.scss';


export const MenuBar = () => {
    return (
        <>
            <div className="menu-bar">
                <nav className="nav-bar">
                    <div><GiHamburgerMenu /></div>
                    <h2>September 2023 Todos</h2>
                </nav>
            </div>
    </>
    )
}