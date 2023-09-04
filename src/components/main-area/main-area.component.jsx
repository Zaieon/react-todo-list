import React, { Component } from "react";
import './main-area.style.scss';
import { NewTask } from "../new-task/new-task.component";
import { PopUpForm } from "../popup-form/popup.component";
import { GiTrashCan } from "react-icons/gi";



export class MainArea extends Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            isPopUpOpen: false
        }
    }
    
    addItem = (val) => {
        let newTodos = [...this.state.todos, val]
        console.log(newTodos)
        this.setState({ todos: newTodos })
        console.log(this.state.todos)
    }

  openPopUp = () => {
    this.setState({isPopUpOpen: true})
  }

  closePopUp = () => {
    this.setState({isPopUpOpen: false})
    }

  render() {
    return (
      <>
            <div className="main-area">
                <ul>
                    {
                        this.state.todos.map((todo, index) => {
                            return (
                                <li key={index}><input type="checkbox" name="" id="" /><span>{todo}</span> <GiTrashCan className="trash-can"/></li>
                            )
                        })
                    }
                    
                    <li>Get a phone</li>
                    <li>Get a get a bag</li>
                    <li>Get a million dollars</li>
                </ul>
                <PopUpForm addItem = {this.addItem} isOpen={this.state.isPopUpOpen} onClose={this.closePopUp} />
                <NewTask openPopUp={ this.openPopUp } />
            </div>
        </>
    )
  }
}





