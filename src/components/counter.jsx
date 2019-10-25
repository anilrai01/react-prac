import React, { Component } from "react";

class Counter extends Component {
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }

  formatBadgeColor() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <React.Fragment>
        <br />
        <span className={this.formatBadgeColor()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary mr-2"
          //   style={{ display: "block" }}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger mr-2"
          //   style={{ display: "block" }}
        >
          Delete
        </button>
        <br />
      </React.Fragment>
    );
  }
}

export default Counter;
