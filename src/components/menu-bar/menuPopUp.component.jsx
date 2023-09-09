import React from "react";
import './menuPopUp.style.scss';

export const MenuPopUp = ({updateTitle, isMenuOpen, closeMenuPopUp}) => {


    return (
        <div className={`menu-popup ${isMenuOpen ? 'active' : ''}`}>
            <button className="x-btn" onClick={closeMenuPopUp}><strong>X</strong></button>
            <div className="menu-popup-content">
                <input className="titler" type="text" placeholder="Write a title..." />
                <button className="add-item" onClick={() => updateTitle(document.querySelector('.titler').value)}>Add Task</button>
            </div>

        </div>
    )
}