import React from 'react';
import styles from "../Perfil/Perfil.module.css";
import medicImage from "../imagens/imagem-1.jpg";

const Perfil = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.avatar}
        src={medicImage}
        alt=""
      />
      <h1 className={styles.name}>Descubra Se Precisa De Academia!</h1>
    </header>
  );
};

export default Perfil;
