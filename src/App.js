import { Component } from "react";
import "./App.css";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";

class App extends Component {
  state = {
    value: "",
  };

  getFormSubmitValue = (value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.getFormSubmitValue} />
        <ImageGallery value={this.state.value} />
      </div>
    );
  }
}

export default App;
