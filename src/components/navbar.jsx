import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1">
            Navbar{" "}
            <badge className="badge badge-pill badge-sm badge-secondary">
              {this.props.totalCounters}
            </badge>{" "}
          </span>
        </nav>
      </React.Fragment>
    );
  }
}
export default Navbar;
