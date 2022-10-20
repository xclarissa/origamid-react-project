import React from "react";
import { COMMENT_POST } from "../../api";
import { ReactComponent as Enviar } from "../../assets/enviar.svg";
import useFetch from "../../hooks/useFetch";
import Error from "../Helper/Error";
import styles from './PhotoCommentsForm.module.css';

function PhotoCommentsForm({ id, setComments, single }) {
  const [comment, setComment] = React.useState();
  const { error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Deixe seu comentário"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      {error && <Error error={error} />}
    </form>
  );
}

export default PhotoCommentsForm;
