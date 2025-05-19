import React from 'react'
import { FaBasketShopping } from 'react-icons/fa6'
import { RxHamburgerMenu } from 'react-icons/rx'
import styles from './Header.module.css'
import { Link } from 'react-router'
import { BsTelephone } from 'react-icons/bs'
import { GiLetterBomb } from 'react-icons/gi'

const Header = () => {

    const basket = JSON.parse(localStorage.getItem('basket')) || []

  let count = basket.reduce((a, b) => a + b.count, 0)
  return (
    <div className={styles.header}>
        <nav className={styles.navdiv1}>
            <div className={styles.icons}>
                <i><BsTelephone/></i>
                <span>+ 1235 2355 98</span>
            </div>
            <div className={styles.icons}>
                <i><GiLetterBomb/></i>
                <span>YOURMAIL@EMAIL.COM</span>
            </div>
            <div className={styles.icons}>
                <span>3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</span>
            </div>
        </nav>
        <nav className={styles.navdiv}>
            <div className={styles.logo}>
                <h2>VEGEFOODS</h2>
            </div>
            <div className={styles.links}>
                <Link to='/' className={styles.link}>Home</Link>
                <Link to='/formik' className={styles.link}>Admin</Link>
                <Link to='/basket' className={styles.link}>Basket
                {count > 0 && <span className={styles.basketCount}> ({count})</span>}</Link>
                <Link to='/favori' className={styles.link}>Favori</Link>
                <Link className={styles.link}>Contact</Link>
                <div className={styles.icon1}>
                    <i><FaBasketShopping/></i>
                </div>
            </div>
            <div className={styles.icon2}>
                <i><RxHamburgerMenu/></i>

            </div>
        </nav>
    </div>
  )
}

export default Header