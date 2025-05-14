import React from 'react'
import { BiHeart } from 'react-icons/bi'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerdiv}><p>Copyright ©2025 All rights reserved | This template is made with <i><BiHeart/></i>  by Colorlib</p></div>
    </div>
  )
}

export default Footer