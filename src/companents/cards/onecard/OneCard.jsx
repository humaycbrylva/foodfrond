import React from 'react'
import styles from './OneCard.module.css'

const OneCard = ({item,addToBasket,addToFavori}) => {
  return (
    <div key={item.id} className={styles.card}>
          <img src={item.image} alt="" />
          <span className={styles.price}>{item.price}</span>
          <span className={styles.title}>{item.title}</span>
          <span className={styles.des}>{item.achievment}</span>  
         
          <div className={styles.btns}>
          <button className={styles.btn1} onClick={() => addToBasket(item)}>Add to Basket</button>
          <button className={styles.btn2} onClick={() => addToFavori(item)}>Add to Favori</button>
          </div>
    </div>
  )
}

export default OneCard