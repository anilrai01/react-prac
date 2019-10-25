import React, { Component } from "react";

class Home extends Component {
  state = {
    tags: []
  };

  formatTags() {
    if (this.state.tags.length === 0) return <p>No Tags !</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && <p>Please insert some tags</p>}
        {this.formatTags()}
      </React.Fragment>
    );
  }
}

export default Home;
