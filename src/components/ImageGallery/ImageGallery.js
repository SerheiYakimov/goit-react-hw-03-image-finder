import { Component } from "react";
import { PixabayFetch } from "../../services/pixabay";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

const newPixabayFetch = new PixabayFetch();

export class ImageGallery extends Component {
  state = {
    searchResult: [],
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      newPixabayFetch.searchQuery = this.props.value;
      newPixabayFetch.searchPhotos().then((searchResult) => {
        this.setState({ searchResult });
      });
    }
  }

  render() {
    return (
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
    );
  }
}
