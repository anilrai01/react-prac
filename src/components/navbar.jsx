import React, { Component } from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">
          Navbar{" "}
          <badge className="badge badge-pill badge-sm badge-secondary">
            {totalCounters}
          </badge>{" "}
        </span>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
