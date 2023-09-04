import React from "react";
import './popup.style.scss';

export const PopUpForm = ({ addItem, isOpen, onClose }) => {
    return (
        <div className={`popup ${isOpen ? 'active' : ''}`}>
            <button onClick={onClose}><strong>X</strong></button>
            <div className="popup-content">
                <input className="todo" type="text" placeholder="Write a goal..." />
                <button onClick={() => addItem(document.querySelector('.todo').value)}>Add Goal</button>
            </div>

        </div>
    )
}