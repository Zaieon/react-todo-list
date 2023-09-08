import React, { Component } from "react";
import './main-area.style.scss';
import { NewTask } from "../new-task/new-task.component";
import { PopUpForm } from "../popup-form/popup.component";
import { GiTrashCan } from "react-icons/gi";



export class MainArea extends Component {
    constructor(tony) {
        super()
        this.state = {
            todos: [],
            isPopUpOpen: false
        }
    }

    addItem = (e, val) => {

        // if (e.target.classList.contains('add-item')) {
            var id;
            if (this.state.todos.length === 0) {
                id = 1
            }
            else if (this.state.todos.length >= 1) {
                id = this.state.todos[this.state.todos.length - 1].id + 1
        }
            this.setState({todos: [...this.state.todos, {id: id, value: val.trim()}]})
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
                            
                            return <li key={todo.id} className="item" id= {todo.id}><input type="checkbox" name="" id='' /><span>{todo.value}</span> <GiTrashCan onClick={(e) => this.deleteItem(e)} className="trash-can" /></li>
                            
                        
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





