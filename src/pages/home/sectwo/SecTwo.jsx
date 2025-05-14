import React from 'react'
import styles from './SecTwo.module.css'
import { FaTruck } from 'react-icons/fa6'
import { GiFruitBowl } from 'react-icons/gi'
import { LiaFirstOrderAlt } from 'react-icons/lia'
import { IoIosContacts } from 'react-icons/io'

const SecTwo = () => {
  return (
    <div>
        <div className={styles.twodiv}>
            <div className={styles.two}>
                <div className={styles.iconn}><i><FaTruck /></i></div>
                <h3>FREE SHIPPING</h3>
                <p>ON ORDER OVER $100</p>
            </div>

            <div className={styles.two}>
                <div className={styles.iconn1}><i><GiFruitBowl /></i></div>
                <h3>FREE SHIPPING</h3>
                <p>ON ORDER OVER $100</p>
            </div>

            <div className={styles.two}>
                <div className={styles.iconn2}><i><LiaFirstOrderAlt /></i></div>
                <h3>FREE SHIPPING</h3>
                <p>ON ORDER OVER $100</p>
            </div>

            <div className={styles.two}>
                <div className={styles.iconn3}><i><IoIosContacts /></i></div>
                <h3>FREE SHIPPING</h3>
                <p>ON ORDER OVER $100</p>
            </div>
        </div>
    </div>
  )
}

export default SecTwo