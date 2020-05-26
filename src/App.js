import React, { Component } from "react";

import "./App.css";
import Todolist from "./component/todolist";
import classNames from "classnames";
class App extends Component {
  constructor() {
    super();
    this.state = {
      todolist: [
        { title: "Home work 1", isComplete: true },
        { title: "Home work 2", isComplete: false },
        { title: "Home work 3", isComplete: true },
      ],
      newItem: "",
      todolistCompl:[],
      todolistUnCompl:[],
      todolistRender:[]
    };
    this.click = this.click.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.filterCompl =this.filterCompl.bind(this);
    this.filterUnCompl =this.filterUnCompl.bind(this);
    this.back =this.back.bind(this);
    this.filter =this.filter.bind(this);
  }
  filter(){
    setInterval(  this.setState(
      {
      todolistCompl: this.state.todolist.filter((item)=>{
        return item.isComplete === true;
      }),
      todolistUnCompl: this.state.todolist.filter((item)=>{
        return item.isComplete === false;
      }),
      todolistRender: this.state.todolist
    }
    )
  ,1000)
  
  }
  click(item) {
    return () => {
      this.setState({
        todolist: this.state.todolist.map((i) =>
          i !== item ? { ...i } : { ...i, isComplete: !i.isComplete }
        ),
      });
    };
  }
  onKeyUp(event) {
    let text = event.target.value;
    if (!text) {
      return;
    }
    text = text.trim();
    if (!text) {
      return;
    }
    if (event.keyCode === 13) {
      this.setState({
        todolist: [{ title: text, isComplete: false }, ...this.state.todolist],
      newItem:""});
    }
  }
  onChange(event) {
    if (event.keyCode !== 13) {
      this.setState({
        newItem: event.target.value,
      });
    }
    return;
  }
  filterCompl(event){
    this.setState({
      todolistRender: this.state.todolistCompl
    })
  }
  filterUnCompl(event){
    this.setState({
      todolistRender: this.state.todolistUnCompl
    })
  }
  back(event){
    this.setState({
      todolistRender: this.state.todolist
    })
  }
  render() {
     
    return (
    
      <div className="App">
        <div className="header">
          <input
            type="text"
            placeholder="New to do here ..."
            value={this.state.newItem}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
         {this.filter()}
        </div>
        
        { 
        this.state.todolistRender.map((item, index) => (
          <Todolist item={item} key={index} onClick_app={this.click} />
        ))}
        <div>
        
          <button className="Compl" onClick={this.filterCompl}>
           Completed 
          </button>
          <button className="UnCompl" onClick={this.filterUnCompl}>
           Not Completed 
          </button>
          <button className="Back" onClick={this.back}>
           Back 
          </button>


        </div>
      </div>
    );
  }
}
export default App;
