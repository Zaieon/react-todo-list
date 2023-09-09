import React from "react";
import './main-area.style.scss';
import { MenuPopUp } from "../menu-bar/menuPopUp.component";
import { NewTask } from "../new-task/new-task.component";
import { PopUpForm } from "../popup-form/popup.component";
import { GiTrashCan } from "react-icons/gi";
import ListItem from "./checkbox.component";



export const MainArea = ({updateTitle, closeMenuPopUp, data, addItem, openPopUp, closePopUp, deleteItem, handleItemCheckboxChange, displayScore }) =>  {

  return (
      <div>
          <MenuPopUp updateTitle = {updateTitle} isMenuOpen = {data.isMenuPopUpOpen} closeMenuPopUp={ closeMenuPopUp } />
          <div className= {`main-area ${data.isMenuPopUpOpen ? 'opaq' : ''} `}>
                <p id="score">{ displayScore() }</p>
                <ul className="tax">
                    { 

                         data.todos.map((todo, index) => {
                            
                            return <li key={todo.id} className="item" id= {todo.id}><ListItem label={todo.title} onCheckboxChange={() => handleItemCheckboxChange(todo.id)}/><span>{todo.value}</span> <GiTrashCan onClick={(e) => deleteItem(e)} className="trash-can" /></li>
                            
                        
                        })   
                    }
            
                </ul>
                <PopUpForm addItem = {addItem} isOpen={data.isPopUpOpen} onClose={closePopUp} />
                <NewTask openPopUp={ openPopUp } />
            </div>
        </div>
  )
}


