import React from 'react'
import styles from './FormCard.module.css'

const FormCard = ({item,handleDelete}) => {
  return (
     <div className={styles.card} key={item._id}>
              <img src={item.image} alt="" />
              <span className={styles.price}>{item.price}</span>
              <span className={styles.title}>{item.title}</span>
              <div className={styles.btns}>
              <button className={styles.del} onClick={() => handleDelete(item._id)}>Delete</button>
              
            </div>
              
        </div>
  )
}

export default FormCard