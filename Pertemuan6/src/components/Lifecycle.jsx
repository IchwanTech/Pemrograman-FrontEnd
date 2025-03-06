import { Component } from "react";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor: Komponen dibuat");
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("componentDidMount: Komponen sudah dirender ke DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdate: Komponen diperbarui",
      prevState.count,
      "->",
      this.state.count
    );
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Komponen akan dihapus");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Render: Komponen sedang dirender");
    return (
      <div>
        <h2>React Lifecycle</h2>
        <p>Count: {this.state.count}</p>
        <button id="btn" onClick={this.increment}>
          Tambah
        </button>
      </div>
    );
  }
}

export default Lifecycle;
