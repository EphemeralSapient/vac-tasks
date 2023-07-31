import React, { Component } from 'react';

class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: "none",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("derived called");
      return {
        like: nextProps.intervalId + prevState.like,
      };
  }

  componentDidMount() {
    console.log("mounted");
    setTimeout(() => {
      this.setState({like:this.state.like+1});
    },1000)
  }

  componentWillUnmount() {
    console.log("unmounted");
    this.setState({like:0});
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.like}</h1>
      </div>
    );
  }
}

export default ExampleComponent;
