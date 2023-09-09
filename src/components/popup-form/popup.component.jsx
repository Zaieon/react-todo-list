import React from "react";
import './popup.style.scss';

export const PopUpForm = ({addItem, isOpen, onClose }) => {


    return (
        <div className={`popup ${isOpen ? 'active' : ''}`}>
            <button className="x-btn" onClick={onClose}><strong>X</strong></button>
            <div className="popup-content">
                <input className="todo" type="text" placeholder="Write a goal..." />
                <button className="add-item" onClick={() => addItem(document.querySelector('.todo').value)}>Add Task</button>
            </div>

        </div>
    )
}