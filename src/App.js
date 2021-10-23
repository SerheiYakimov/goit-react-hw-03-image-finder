import { Component } from "react";
import "./App.css";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";

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
        <ToastContainer position="top-left" autoClose={2000} />
      </div>
    );
  }
}

export default App;
