import React from "react";
import './new-task.style.scss'; 

export const NewTask = ({openPopUp}) => {
    return (
        <>
            <button className="new-item" onClick={openPopUp}>
                New Task <span>+</span>
            </button>
            
            
        </>
    )
}