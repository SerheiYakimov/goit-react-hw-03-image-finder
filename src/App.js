import { Component } from "react";
import "./App.css";
import { PixabayFetch } from "./services/pixabay";

const newPixabayFetch = new PixabayFetch();
// console.log(newPixabayFetch.searchPhotos());

class App extends Component {
  state = {
    searchValue: "",
    searchResult: [],
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      newPixabayFetch.searchQuery = this.state.searchValue;
      newPixabayFetch.searchPhotos().then((result) => {
        console.log(result);
        this.setState({ searchResult: result });
      });
    }
  }

  handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("before fetch", this.state.searchValue);
    this.setState({ searchValue: "" });
  };

  handleSearchChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSearchSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              name="value"
              value={this.state.searchValue}
              // autocomplete="off"
              // autofocus
              placeholder="Search images and photos"
              onChange={this.handleSearchChange}
            />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
