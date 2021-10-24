import { Component } from "react";
import { toast } from "react-toastify";
import s from "../Searchbar/Searchbar.module.css";

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
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.handleSearchSubmit}>
          <button type="submit" className={s.searchButton}>
            <span className={s.searchButtonLabel}>Search</span>
          </button>
          <input
            className={s.searchInput}
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
