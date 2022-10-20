import React from "react";
import { useContext } from "react";
import { PHOTO_DELETE } from "../../api";
import { UserContext } from "../../contexts/UserContext";
import useFetch from "../../hooks/useFetch";
import styles from "./PhotoDelete.module.css";

function PhotoDelete({ id }) {
  const { data, request } = useFetch();
  const { loading } = useContext(UserContext);

  async function handleClick() {
    const confirm = window.confirm("Certeza que deseja deletar?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) {
        window.location.reload();
      }
    }
  }

  return (
    <div>
      {loading ? (
        <button disabled className={styles.delete}>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </div>
  );
}

export default PhotoDelete;
