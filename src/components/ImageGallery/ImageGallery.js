import { Component } from "react";
import { PixabayFetch } from "../../services/pixabay";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Button } from "../Button/Button";

const newPixabayFetch = new PixabayFetch();

export class ImageGallery extends Component {
  state = {
    searchResult: [],
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      newPixabayFetch.resetPage();
      newPixabayFetch.searchQuery = this.props.value;
      newPixabayFetch.searchPhotos().then((searchResult) => {
        this.setState({ searchResult });
      });
    }
  }

  onLoadMore = () => {
    newPixabayFetch.page = 1;
    newPixabayFetch
      .searchPhotos()
      .then((searchResult) => {
        this.setState((prevState) => ({
          searchResult: [...prevState.searchResult, ...searchResult],
        }));
      })
      .then(this.ScrollImages);
  };

  ScrollImages = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
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
        {this.state.searchResult.length > 0 && (
          <Button onClick={this.onLoadMore} />
        )}
      </>
    );
  }
}
