import React, { Component } from 'react';
import { MenuBar } from './components/menu-bar/menu-bar.component';
import { MainArea } from './components/main-area/main-area.component';
import './App.css';


export default class App extends Component {
  constructor() {
    super()
  
    this.state = {
            todos: [],
            isPopUpOpen: false,
            isMenuPopUpOpen: false,
            count: 0,
            storage: [],
            listTitle: 'Enter Title here...'
            
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
        
        let xx = 0;
          this.state.todos.forEach((item) => {
              if (item.isChecked === true) {
                 xx+= (100 / this.state.todos.length)
              }
              
          })
        this.setState({count: parseInt(xx)})
        
    }

      
    deleteItem = (e) => {
        let updatedItems;
        if (e.target.parentElement.parentElement.id) {
            updatedItems = this.state.todos.filter(item => item.id !== Number(e.target.parentElement.parentElement.id));
            this.setState({todos: updatedItems});
        }
        else if (e.target.parentElement.id) {
            updatedItems = this.state.todos.filter(item => item.id !== Number(e.target.parentElement.id));
            this.setState({todos: updatedItems});
        }
      
      this.displayScore()
        
    }
  
  handleItemCheckboxChange = (itemId) => {
        // Update the state of the item with the new checkbox value
        const updatedItems = this.state.todos.map((item) => {
            if (item.id === itemId) {
                item.isChecked = !item.isChecked
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
        this.setState({count: parseInt(xx)})

        // Update the state with the new list of items
        this.setState({ todos: updatedItems });

    };
    
    displayScore = () => {
        
        if (this.state.todos.length > 0 && this.state.count === 0) {
            return `You have ${this.state.todos.length} task(s) to do today!`
        }
        else if (this.state.count === 0) {
            return  `No task to do yet.`
        }
        else if (this.state.count > 0 && this.state.count <= 39) {
            return `You are ${this.state.count}% done today! ☹☹☹`
        }
        else if (this.state.count > 39 && this.state.count <= 69) {
            return `You are ${this.state.count}% done for today! 😎😎😎`
        }
        else if (this.state.count > 69 && this.state.count <= 99) {
            return `You are ${this.state.count}% done for today! 😀😀😀`
        }
        else if (this.state.count === 100) {
            return `Hurray! You are ${this.state.count}% done for today! 💃💃💃💃`
        }
        else {
            return `Error Occured!`
        }
    }
  
  savenRefresh = () => {
    if (this.state.todos.length > 0) {
      this.setState({ storage: [...this.state.storage, {listTitle: this.state.listTitle, listItem: this.state.todos}]})
      this.setState({ todos: [] })
      this.setState({listTitle: 'Enter Title here...'})
      this.setState({count: 0})
    }
    
  }
  
  updateTitle = (val) => {
    this.setState({ listTitle: val })
    this.closeMenuPopUp()
  }

    openPopUp = () => {
    this.setState({isPopUpOpen: true})
    }

    closePopUp = () => {
    this.setState({isPopUpOpen: false})
    }
  
    openMenuPopUp = () => {
    this.setState({isMenuPopUpOpen: true})
    }

    closeMenuPopUp = () => {
    this.setState({isMenuPopUpOpen: false})
    }




  render() {
    return (
      <div className='home'>
        <MenuBar data={this.state} savenRefresh={this.savenRefresh} openMenuPopUp={this.openMenuPopUp} closeMenuPopUp={this.closeMenuPopUp} />
        <MainArea updateTitle = {this.updateTitle} closeMenuPopUp = {this.closeMenuPopUp} data={ this.state } addItem = {this.addItem} openPopUp = {this.openPopUp} closePopUp={this.closePopUp} deleteItem = {this.deleteItem} handleItemCheckboxChange = {this.handleItemCheckboxChange} displayScore = {this.displayScore} />
      </div>
    )
  }
}
