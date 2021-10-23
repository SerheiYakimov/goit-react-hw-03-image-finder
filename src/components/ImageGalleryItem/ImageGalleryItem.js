export function ImageGalleryItem({ id, webformatURL, tags, largeImageURL }) {
  return (
    <li className="ImageGalleryItem" key={id}>
      <img
        src={webformatURL}
        alt={tags}
        data-img={largeImageURL}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}
