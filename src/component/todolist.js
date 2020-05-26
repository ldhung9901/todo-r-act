
import React, { Component } from "react";
import "./todolist.css";
import classNames from "classnames";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

class Todolist extends Component {
  constructor() {
    super();

  }

  render() {
    return <div onClick={this.props.onClick_app(this.props.item)} className= { classNames('todo',{'true': this.props.item.isComplete})}> 
      <span className="icon"><FontAwesomeIcon  icon={ faCheckCircle } /></span>
    <p>{this.props.item.title}</p>
    </div>
  }
}
export default Todolist;
