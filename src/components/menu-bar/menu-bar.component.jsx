import React from "react";
import { SaveBtn } from "./savebtn.component";
import { GiHamburgerMenu } from "react-icons/gi";
import './menu-bar.style.scss';


export const MenuBar = ({data, savenRefresh, openMenuPopUp}) => {
    return (
        <>
            <div className= {`menu-bar ${data.isMenuPopUpOpen ? 'opaq' : ''} `}>
                <nav className="nav-bar">
                    <div className="hamburger" onClick={openMenuPopUp}><GiHamburgerMenu /></div>
                    <h2 className="title" onClick={openMenuPopUp}>{data.listTitle}</h2>
                    <span><SaveBtn savenRefresh={savenRefresh} /></span>
                </nav>
            </div>
    </>
    )
}