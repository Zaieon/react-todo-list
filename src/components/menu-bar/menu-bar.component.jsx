import React from "react";
import { SaveBtn } from "./savebtn.component";
import { GiHamburgerMenu } from "react-icons/gi";
import './menu-bar.style.scss';


export const MenuBar = ({savenRefresh}) => {
    return (
        <>
            <div className="menu-bar">
                <nav className="nav-bar">
                    <div><GiHamburgerMenu /></div>
                    <h2>September 2023 Todos</h2>
                    <span><SaveBtn savenRefresh={savenRefresh} /></span>
                </nav>
            </div>
    </>
    )
}