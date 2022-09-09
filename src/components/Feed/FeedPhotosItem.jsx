import React from 'react'
import styles from './FeedPhotosItem.module.css'

function FeedPhotosItem({photo, setModalPhoto}) {

  function toggle() {
    setModalPhoto(photo)
  }

  return (
    <li className={styles.photo} onClick={toggle}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem