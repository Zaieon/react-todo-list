import React from "react";
import './menuPopUp.style.scss';

export const MenuPopUp = ({updateTitle, isMenuOpen, closeMenuPopUp}) => {


    return (
        <div className={`menu-popup ${isMenuOpen ? 'active' : ''}`}>
            <div className="inside"><button className="x-btn" onClick={closeMenuPopUp}><strong>X</strong></button>
            <div className="menu-popup-content">
                <input className="title-input" type="text" placeholder="Write a title..." />
                <button className="add-title" onClick={() => updateTitle(document.querySelector('.title-input').value)}>+</button>
            </div></div>
            

        </div>
    )
}