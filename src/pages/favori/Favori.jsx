import React, { useEffect, useState } from 'react';
import styles from './Favori.module.css'

const Favori = () => {
  const [favori, setFavori] = useState([]);

  useEffect(() => {
    const storedFavori = JSON.parse(localStorage.getItem('favori')) || [];
    setFavori(storedFavori);
  }, []);

  const deleteFromFavori = (item) => {
    const updatedFavori = favori.filter(x => x._id !== item._id);
    localStorage.setItem('favori', JSON.stringify(updatedFavori));
    setFavori(updatedFavori);
  };

  return (
    <div className={styles.cardss}>
      <div className={styles.cards}>
      {favori && favori.map(item => (
        <div className={styles.card} key={item._id}>
                <img src={item.image} alt="" />
                <span>Price: {item.price}</span>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.des}>{item.achievment}</span>
                <div className={styles.btns}>

                </div>
                <button className={styles.sil} onClick={() => deleteFromFavori(item)}>Sil</button>
              </div>
      ))}
    </div>
    </div>
  );
};

export default Favori;