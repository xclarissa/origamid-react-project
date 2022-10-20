import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { ReactComponent as MinhasFotos } from "../../assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../assets/adicionar.svg";
import { ReactComponent as Sair } from "../../assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../hooks/useMedia";

function UserHeaderNav() {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const {pathname} = useLocation()

  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${mobileMenu &&
            styles.mobileButtonActive}`}
          onClick={() => setMobileMenu(!mobileMenu)} 
        ></button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/my-account" end>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/my-account/stats">
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/my-account/post">
          <AdicionarFoto />
          {mobile && "Adicionar Fotos"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
}

export default UserHeaderNav;
