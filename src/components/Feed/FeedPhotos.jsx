import React from "react";
import { PHOTOS_GET } from "../../api";
import useFetch from "../../hooks/useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import FeedPhotosItem from "./FeedPhotosItem";
import styles from './FeedPhotos.module.css';


function FeedPhotos({page, user, setModalPhoto, setInfinite}) {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 3
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      console.log('req json',json)
      if(response && response.ok && json.length < total) {
        setInfinite(false)
      }
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  if (data) {
    return (
      <ul className={styles.feed}>
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />
        ))}
      </ul>
    );
  }
}

export default FeedPhotos;
