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
        
        let xx = 0;
          this.state.todos.forEach((item) => {
              if (item.isChecked === true) {
                 xx+= (100 / this.state.todos.length)
              }
              
          })
        this.setState({count: xx})
        
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

    handleItemCheckboxChange = (itemId) => {
        // Update the state of the item with the new checkbox value
        const updatedItems = this.state.todos.map((item) => {
            console.log('start')
            if (item.id === itemId) {
                item.isChecked = !item.isChecked
                console.log(item)

                

                return { ...item };
            }
            return item;
        });
        let xx = 0;
          this.state.todos.forEach((item) => {
              if (item.isChecked === true) {
                 xx+= (100 / this.state.todos.length)
              }
              
          })
        this.setState({count: xx})

        // Update the state with the new list of items
        this.setState({ todos: updatedItems });
        console.log(`You are ${this.state.count}% done for today!`)
        console.log(this.state)

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
                <p id="score">{ `You are ${this.state.count}% done for today!` }</p>
                <ul className="tax">
                    { 

                         this.state.todos.map((todo, index) => {
                            
                            return <li key={todo.id} className="item" id= {todo.id}><ListItem label={todo.title} onCheckboxChange={() =>this.handleItemCheckboxChange(todo.id)}/><span>{todo.value}</span> <GiTrashCan onClick={(e) => this.deleteItem(e)} className="trash-can" /></li>
                            
                        
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





