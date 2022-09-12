import React from 'react'
import styles from './FeedPhotosItem.module.css'

function FeedPhotosItem({photo, setModalPhoto}) {

  function toggleModal() {
    setModalPhoto(photo)
  }

  return (
    <li className={styles.photo} onClick={toggleModal}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem