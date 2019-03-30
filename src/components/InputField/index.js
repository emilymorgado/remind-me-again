import React, { Component } from 'react'

class InputField extends Component {
  state = {
    comment: ''
  }

  handleChange = event => {
    this.setState({ comment: event.target.value })
  }

  render() {
    return (
      <div>
        <textarea
          style={inputStyles}
          onChange={this.handleChange}
          value={this.state.comment}
        />
      </div>
    )
  }
}

export default InputField

const inputStyles = {
  height: '3em',
  backgroundColor: 'yellow',
  border: '5px solid pink'
}
