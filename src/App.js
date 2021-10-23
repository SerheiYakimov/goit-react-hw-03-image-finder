import { Component } from "react";
import "./App.css";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Button } from "./components/Button/Button";

class App extends Component {
  state = {
    value: "",
  };

  getFormSubmitValue = (value) => {
    this.setState({ value });
  };

  onLoadMore = () => {};

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.getFormSubmitValue} />
        <ImageGallery value={this.state.value} />
        <Button onClick={this.onLoadMore} />
      </div>
    );
  }
}

export default App;
