import React from 'react';
import Card from './components/Card';
import ItemCard from './components/ItemCard';
// import Button from './components/Button';


function App() {
  const items = [
    {
      title: 'Morkos',
      price: '3',
      description: 'užaugintos kaime',
      img: 'https://s1.15min.lt/images/photos/2014/11/11/original/morkos-5461d773907b1.jpg'
    },
    {
      title: 'Morkos',
      price: '3',
      description: 'užaugintos kaime',
      img: 'https://s1.15min.lt/images/photos/2014/11/11/original/morkos-5461d773907b1.jpg'
    },
    {
      title: 'Morkos',
      price: '3',
      description: 'užaugintos kaime',
      img: 'https://s1.15min.lt/images/photos/2014/11/11/original/morkos-5461d773907b1.jpg'
    },
    {
      title: 'Morkos',
      price: '3',
      description: 'užaugintos kaime',
      img: 'https://s1.15min.lt/images/photos/2014/11/11/original/morkos-5461d773907b1.jpg'
    }
  ]
  const itemList = items.map(item =>{
  return (
    <div className="item" key={item.id}>
      <div><ItemCard></ItemCard></div>
      <div>Title: {item.title}</div>
      <div>Price: {item.price}</div>
      <div>Description: {item.description}</div>
   </div>
  )
})
  return (
    <div className="item-list">
      {itemList}
    </div>
  )
}

export default App;
// Namu darbas - sukurti masyva [items] sudarytą iš objektų

// Namu darbas - sukurti masyva [items] sudarytą iš objektų
//title, price, description ir img(iš neto)
//su kiekvienu objektu sukurti itemCard elementus
// perduoti kiekvienam itemCard React komponentui, savybes(title, price, description ir img
//stilizuoti ir panaudoti per parametrus paduotas savybes
//išmokti "js object destructurization"
