import React, { Component } from "react";
import './main-area.style.scss';
import { NewTask } from "../new-task/new-task.component";
import { PopUpForm } from "../popup-form/popup.component";
import { GiTrashCan } from "react-icons/gi";
import ListItem from "./checkbox.component";




export class MainArea extends Component {
    constructor(tony) {
        super()
        this.state = {
            todos: [],
            isPopUpOpen: false,
            isChecked: false,
            count: 0
        }
    }

    addItem = (val) => {

            var id;
            if (this.state.todos.length === 0) {
                id = 1
            }
            else if (this.state.todos.length >= 1) {
                id = this.state.todos[this.state.todos.length - 1].id + 1
            }
            this.setState({ todos: [...this.state.todos, { id: id, value: val.trim(), isChecked: false }] })
            console.log(this.state.todos)
        
    }

      
    deleteItem = (e) => {
        let updatedItems;
        if (e.target.parentElement.parentElement.id) {
            updatedItems = this.state.todos.filter(item => item.id !== Number(e.target.parentElement.parentElement.id));
            this.setState({todos: updatedItems});
            console.log(this.state.todos)
        }
        else if (e.target.parentElement.id) {
            updatedItems = this.state.todos.filter(item => item.id !== Number(e.target.parentElement.id));
            this.setState({todos: updatedItems});
            console.log(this.state.todos)
        }
        
    }

    // account = () => {
    //     this.setState({ isChecked: !this.state.isChecked })
    //     console.log(this.state.isChecked)
    // }

     handleItemCheckboxChange = (itemId, isChecked) => {
    // Update the state of the item with the new checkbox value
    const updatedItems = this.state.todos.map((item) => {
      if (item.id === itemId) {
        return { ...item, isChecked };
      }
      return item;
    });

    // Update the state with the new list of items
         this.setState({ todos: updatedItems });
  };

    openPopUp = () => {
    this.setState({isPopUpOpen: true})
    }

    closePopUp = () => {
    this.setState({isPopUpOpen: false})
    }

  render() {
    return (
      <div>
            <div className="main-area">
                <ul className="tax">
                    { 

                         this.state.todos.map((todo, index) => {
                            
                            return <li key={todo.id} className="item" id= {todo.id}><ListItem label={todo.title} onCheckboxChange={(isChecked) =>this.handleItemCheckboxChange(todo.id, isChecked)}/><span>{todo.value}</span> <GiTrashCan onClick={(e) => this.deleteItem(e)} className="trash-can" /></li>
                            
                        
                        })   
                    }
            
                </ul>
                <PopUpForm addItem = {this.addItem} isOpen={this.state.isPopUpOpen} onClose={this.closePopUp} />
                <NewTask openPopUp={ this.openPopUp } />
            </div>
        </div>
    )
  }
}





