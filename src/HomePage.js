import React, { Component } from 'react';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleIsHovered: false
    }
  }

  onHoverTitleIn() {
    this.setState({
      titleIsHovered: true
    })
  }
  onHoverTitleOut() {
    this.setState({
      titleIsHovered: false
    })
  }
  render() {
    const { titleIsHovered } = this.state;
    return (
      <div>
        <h1 onMouseEnter={this.onHoverTitleIn.bind(this)}
          onMouseLeave={this.onHoverTitleOut.bind(this)}><span>Welcome</span> to our site!</h1>
        <p>
          <span style={{fontWeight: titleIsHovered ? 'bold':'normal'}}>Lorem</span> ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {titleIsHovered ? 'Hovered!' : null}
      </div>
    );
  }
}
