import { Component } from "react";
import { toast } from "react-toastify";

export class Searchbar extends Component {
  state = {
    searchValue: "",
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchValue.trim() === "") {
      toast.warn("Enter correct name!");
      return;
    }
    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: "" });
  };

  handleSearchChange = (e) => {
    this.setState({ searchValue: e.target.value.toLowerCase() });
  };

  render() {
    return (
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
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleSearchChange}
          />
        </form>
      </header>
    );
  }
}
