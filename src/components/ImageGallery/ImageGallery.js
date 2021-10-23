import { Component } from "react";
import { PixabayFetch } from "../../services/pixabay";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Button } from "../Button/Button";

const newPixabayFetch = new PixabayFetch();

export class ImageGallery extends Component {
  state = {
    searchResult: [],
    error: null,
    status: "idle",
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      newPixabayFetch.resetPage();
      this.setState({ status: "pending" });
      newPixabayFetch.searchQuery = this.props.value;
      newPixabayFetch
        .searchPhotos()
        .then((searchResult) => {
          this.setState({ searchResult, status: "resolved" });
        })
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  }

  onLoadMore = () => {
    newPixabayFetch.page = 1;
    this.setState({ status: "pending" });
    newPixabayFetch
      .searchPhotos()
      .then((searchResult) => {
        this.setState((prevState) => ({
          searchResult: [...prevState.searchResult, ...searchResult],
          status: "resolved",
        }));
      })
      .then(this.ScrollImages)
      .catch((error) => this.setState({ error, status: "rejected" }));
  };

  ScrollImages = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    if (this.state.status === "pending") {
      return <div>loading...</div>;
    }

    if (this.state.status === "rejected") {
      return <h1>Error</h1>;
    }

    if (this.state.status === "resolved") {
      return (
        <>
          <ul className="ImageGallery">
            {this.state.searchResult.length > 0 &&
              this.state.searchResult.map(
                ({ id, webformatURL, tags, largeImageURL }) => (
                  <ImageGalleryItem
                    key={id}
                    id={id}
                    webformatURL={webformatURL}
                    tags={tags}
                    largeImageURL={largeImageURL}
                  />
                )
              )}
          </ul>
          {this.state.searchResult.length >= 12 && (
            <Button onClick={this.onLoadMore} />
          )}
        </>
      );
    }
  }
}
