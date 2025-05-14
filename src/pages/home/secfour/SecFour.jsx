import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductThunk } from '../../../redux/reducers/productSlice'
import styles from './SecFour.module.css'
import OneCard from '../../../companents/cards/onecard/OneCard'


const SecFour = () => {
  const dispatch=useDispatch()

    const data=useSelector(state=> state.products.products)
    const loading=useSelector(state=> state.products.loading)
    const error=useSelector(state=> state.products.error)

    useEffect(()=>{
        dispatch(getProductThunk())
    },[])

    const addToBasket= (item) =>{
      let basket = JSON.parse(localStorage.getItem('basket')) || []
      let existing = basket.find(x=> x._id===item._id)

      if (existing){
          existing.count =+1
          alert('Mehsul sebete elave olunub')
      }else{
          basket = [...basket, {...item, count:1}]
          alert('Mehsul sebete elave olundu')
      }
      localStorage.setItem('basket', JSON.stringify(basket))
  }

  const addToFavori = (item) =>{
      let favori = JSON.parse(localStorage.getItem('favori')) || []
      let existing= favori.find( x => x._id === item._id)

      if (existing){
          
          alert('Mehsul artiq beyenilenlere  elave olunub')
      }else{
          favori = [...favori, {...item}]
          alert('Mehsul beyenilenlere elave olundu')
      }
      localStorage.setItem('favori', JSON.stringify(favori))
  }

    if(loading) return <span>Loading...</span>
    if(error) return <span>Error</span>
  return (
    <div className={styles.musics}>
        <h5>Featured Products</h5>
        <h2>Our Products</h2>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        <div className={styles.cardivs} >
            <div className={styles.cardiv}>
                {data && data.slice(0,9).map(item=>(<OneCard key={item._id} item={item} addToBasket={addToBasket} addToFavori={addToFavori}/>))}
            </div>
           
        </div>  
    </div>
    
    
  )
}

export default SecFour