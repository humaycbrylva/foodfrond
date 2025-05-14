import React from 'react'
import styles from './Basket.module.css'

const BasketCard = ({item,addToBasket,removeFromBasket,deleteFromBasket}) => {
  return (
    <div className={styles.card} key={item._id}>
          <img src={item.image} alt="" />
          <span className={styles.price}>{item.price}</span>
          <span className={styles.title}>{item.title}</span>
          <span className={styles.des}>{item.achievment}</span>
          <span className={styles.nbr}>Number: {item.count}</span>
          <div className={styles.btns}>
          <button className={styles.btn1} onClick={() => addToBasket(item)}>ASC</button>
          <button className={styles.btn2} onClick={() => removeFromBasket(item)}>DESC</button>
          </div>
          <button className={styles.sil} onClick={() => deleteFromBasket(item)}>DELETE</button>
    </div>
  )
}

export default BasketCard