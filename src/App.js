import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = cID => {
    const counters = [...this.state.counters];
    let index = counters.indexOf(cID);
    counters[index].value += 1;
    this.setState({ counters });
  };

  handleDecrement = cID => {
    const counters = [...this.state.counters];
    let index = counters.indexOf(cID);
    counters[index].value -= 1;
    this.setState({ counters });
  };

  handleDelete = counterID => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterID
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = [...this.state.counters];
    counters.forEach(el => (el.value = 0));
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(el => el.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
