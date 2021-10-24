import { Component } from "react";
import s from "../ImageGallery/ImageGallery.module.css";
import { PixabayFetch } from "../../services/pixabay";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Button } from "../Button/Button";
import "../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const newPixabayFetch = new PixabayFetch();

export class ImageGallery extends Component {
  state = {
    searchResult: [],
    error: null,
    // status: "idle",
    showModal: false,
    loader: false,
    modalImg: "",
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      newPixabayFetch.resetPage();
      this.setState({ loader: true });
      newPixabayFetch.searchQuery = this.props.value;
      newPixabayFetch
        .searchPhotos()
        .then((searchResult) => {
          this.setState({ searchResult, loader: false });
        })
        .catch((error) => this.setState({ error }));
    }
  }

  onLoadMore = () => {
    newPixabayFetch.page = 1;
    this.setState({ loader: true });
    newPixabayFetch
      .searchPhotos()
      .then((searchResult) => {
        this.setState((prevState) => ({
          searchResult: [...prevState.searchResult, ...searchResult],
          loader: false,
        }));
      })
      .then(this.ScrollImages)
      .catch((error) => this.setState({ error }));
  };

  ScrollImages = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onClickModalImg = (e) => {
    const { img } = e.target.dataset;
    this.setState({ modalImg: img });
    this.toggleModal();
  };

  render() {
    return (
      <>
        {this.state.loader && (
          <Loader
            type="Ball-Triangle"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
        <ul className={s.gallery}>
          {this.state.searchResult.length > 0 &&
            this.state.searchResult.map(
              ({ id, webformatURL, tags, largeImageURL }) => (
                <ImageGalleryItem
                  onClick={this.onClickModalImg}
                  key={id}
                  id={id}
                  webformatURL={webformatURL}
                  tags={tags}
                  largeImageURL={largeImageURL}
                  modalImg={this.state.modalImg}
                  showModal={this.state.showModal}
                  toggleModal={this.toggleModal}
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

//   if (this.state.status === 'idle') {
//     return <h1>Enter name to find</h1>;
//   }

//   if (this.state.status === 'pending') {
//     return <Loader />;
//   }

//   if (this.state.status === 'rejected') {
//     return <h1>Error</h1>;
//   }

//   if (this.state.status === 'resolved') {
//     return (
//       <>
//         <ul className="ImageGallery">
//           {this.state.searchResult.length > 0 &&
//             this.state.searchResult.map(
//               ({ id, webformatURL, tags, largeImageURL }) => (
//                 <ImageGalleryItem
//                   onClick={this.onClickModalImg}
//                   key={id}
//                   id={id}
//                   webformatURL={webformatURL}
//                   tags={tags}
//                   largeImageURL={largeImageURL}
//                   modalImg={this.state.modalImg}
//                   showModal={this.state.showModal}
//                   toggleModal={this.toggleModal}
//                 />
//               )
//             )}
//         </ul>
//         {this.state.searchResult.length >= 12 && (
//           <Button onClick={this.onLoadMore} />
//         )}
//       </>
//     );
//   }
