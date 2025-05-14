import React from 'react'
import styles from './SecOne.module.css'

const SecOne = () => {
  return (
    <div className={styles.onecard}>
        <div className={styles.textdiv}>
            <h1>100% Fresh & Organic Foods</h1>
            <p>We deliver organic vegetables & fruits</p>
            <button className={styles.btn}>VIEWS DETAILS</button>
        </div>
    </div>
  )
}

export default SecOne