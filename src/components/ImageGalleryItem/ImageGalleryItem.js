import Modal from "../Modal/Modal";

export function ImageGalleryItem({
  id,
  webformatURL,
  tags,
  largeImageURL,
  modalImg,
  onClick,
  showModal,
  toggleModal,
}) {
  return (
    <>
      <li className="ImageGalleryItem" key={id}>
        <img
          src={webformatURL}
          alt={tags}
          data-img={largeImageURL}
          className="ImageGalleryItem-image"
          onClick={onClick}
        />
      </li>
      {this.showModal && (
        <Modal modalImg={modalImg} alt={tags} toggleModal={toggleModal} />
      )}
    </>
  );
}
