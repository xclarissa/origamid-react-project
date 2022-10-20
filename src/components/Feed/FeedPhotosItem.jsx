import React from "react";
import ImageSkeleton from "../Helper/ImageSkeleton";
import styles from "./FeedPhotosItem.module.css";

function FeedPhotosItem({ photo, setModalPhoto }) {
  function toggleModal() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={toggleModal}>
      <ImageSkeleton src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotosItem;
