import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters"; //custom component

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor(props) {
    super(props);
    //this.state = this.props.something; will set state of component based on props
    console.log("App - Constructor"); //constructor - lifecycle hook - MOUNT -> (called once during instantiation) used to intialize properties in class
  }

  componentDidMount() {
    //AJAX call
    //this.setState({ Movies })
    console.log("App - Mounted"); //lifecycle hook - MOUNT -> called after component is rendered in DOM (AJAX calls to get server data)
  }

  //updating state
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId); //create a new array without item, have react save as new state
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c; //map method returns a new array (new State obj)
    });
    this.setState({ counters }); //update state with new State obj
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; //clone counter obj@ [index]
    counters[index].value++; //update state in new counter obj VS. state in old counter obj (no-no in React)
    this.setState({ counters }); //update state with new counters array (cloned / modified)
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; //clone a counter obj@ [index]
    counters[index].value--;
    this.setState({ counters }); //update state with new counters array (cloned / modified)
  };

  render() {
    console.log("App - rendered"); //lifecycle hook - MOUNT- Render()

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters} //sent via props to child
            onReset={this.handleReset}
            onIncrement={this.handleIncrement} //data & methods controlled by parent
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
