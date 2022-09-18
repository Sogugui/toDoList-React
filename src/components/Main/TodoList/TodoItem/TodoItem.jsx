import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       checked:false
    }
  }

  render() {
    const {title,description}=this.props.data
    return (
      <div>
        <h4 >{title}</h4>
        <p>{description}</p>
        <button onClick={this.props.remove}>Borrar Recordatorio</button>
      </div>
    )
  }
}

export default TodoItem;
