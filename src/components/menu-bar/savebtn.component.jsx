import React from "react";
import './savebtn.style.scss'; 

export const SaveBtn = ({savenRefresh}) => {
    return (
        <>
            <button className="save-btn" onClick={savenRefresh}>
                Save and Refresh
            </button>
            
            
        </>
    )
}