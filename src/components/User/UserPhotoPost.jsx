import React from "react";
import styles from "./UserPhotoPost.module.css";
import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { PHOTO_POST } from "../../api";
import Error from "../Helper/Error"; 
import { useNavigate } from "react-router-dom";

function UserPhotoPost() {
  const nome = useForm();
  const idade = useForm("number");
  const peso = useForm("number");
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate()
  
  React.useEffect(() => {
    if(data) {
      navigate('/my-account')
    }
  }, [data, navigate])

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("idade", idade.value);
    formData.append("peso", peso.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleChangeImg({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Nome" name="nome" {...nome} />
        <Input type="number" label="Idade" name="idade" {...idade} />
        <Input type="number" label="Peso" name="peso" {...peso} />
        <input
          className={styles.file}
          type="file"
          id="img"
          name="img"
          onChange={handleChangeImg}
        />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error}/>
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
}

export default UserPhotoPost;
