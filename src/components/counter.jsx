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
        <div class="row m-2">
          <div className="col-1">
            <span className={this.formatBadgeColor()}>
              {this.formatCount()}
            </span>
          </div>
          <div className="col">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary"
              //   style={{ display: "block" }}
            >
              +
            </button>

            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary m-2"
              disabled={this.props.counter.value <= 0 ? "disabled" : 0}
            >
              -
            </button>

            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger"
              //   style={{ display: "block" }}
            >
              X
            </button>
          </div>
        </div> {" "}
      </React.Fragment>
    );
  }
}

export default Counter;
