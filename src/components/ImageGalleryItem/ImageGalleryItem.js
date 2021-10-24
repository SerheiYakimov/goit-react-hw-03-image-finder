import Modal from "../Modal/Modal";
import s from "../ImageGalleryItem/ImageGalleryItem.module.css";

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
      <li className={s.galleryItem} key={id}>
        <img
          src={webformatURL}
          alt={tags}
          data-img={largeImageURL}
          className={s.imageGalleryItem}
          onClick={onClick}
        />
      </li>
      {showModal && (
        <Modal modalImg={modalImg} alt={tags} toggleModal={toggleModal} />
      )}
    </>
  );
}
