import React, { useEffect, useState } from 'react';
import styles from './Basket.module.css'
import BasketCard from '../../companents/cards/basketcard/BasketCard';


const Basket = () => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
    setBasket(storedBasket);
  }, []);

  const updateLocalStorage = (newBasket) => {
    localStorage.setItem('basket', JSON.stringify(newBasket));
    setBasket(newBasket);
  };

  const addToBasket = (item) => {
    const updatedBasket = basket.map(x => {
      if (x._id === item._id) {
        return { ...x, count: x.count + 1 };
      }
      return x;
    });
    updateLocalStorage(updatedBasket);
  };

  const removeFromBasket = (item) => {
    const updatedBasket = basket
      .map(x => {
        if (x._id === item._id) {
          return { ...x, count: x.count - 1 };
        }
        return x;
      })
      .filter(x => x.count > 0);
    updateLocalStorage(updatedBasket);
  };

  const deleteFromBasket = (item) => {
    const updatedBasket = basket.filter(x => x._id !== item._id);
    updateLocalStorage(updatedBasket);
  };

  return (
    <div className={styles.cards}>
      {basket && basket.map(item=>(<BasketCard key={item._id} item={item} addToBasket={addToBasket} removeFromBasket={removeFromBasket} deleteFromBasket={deleteFromBasket}/>))}
    </div>
  );
};

export default Basket;