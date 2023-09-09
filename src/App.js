import React, {Component} from 'react';
import { MenuBar } from './components/menu-bar/menu-bar.component';
import { MainArea } from './components/main-area/main-area.component';
import './App.css';


export default class App extends Component {
  constructor() {
    super()
  
    this.state = {
            todos: [],
            isPopUpOpen: false,
            count: 0,
            storage: []
            
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
        this.setState({count: parseInt(xx)})
        
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
        console.log(`You are ${this.state.count}% done for today!`)
        console.log(this.state)

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
      this.setState({ storage: [...this.state.storage, this.state.todos] })
      this.setState({ todos: [] })
      console.log(this.state.storage)
      this.setState({count: 0})
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
      <div className='home'>
        <MenuBar savenRefresh = {this.savenRefresh} />
        <MainArea data={ this.state } addItem = {this.addItem} openPopUp = {this.openPopUp} closePopUp={this.closePopUp} deleteItem = {this.deleteItem} handleItemCheckboxChange = {this.handleItemCheckboxChange} displayScore = {this.displayScore} />
      </div>
    )
  }
}
