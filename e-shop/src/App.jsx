import React from 'react';
import Card from 'components/Card';

function App() {
  //const items = [...]; !!čia!!
  return (
    <div className="App">
      <Card title="Saulė">Vidinis turinys</Card>
      <Card title="šiandien">Vidinis turinys</Card>
      <Card title="šviečia">Vidinis turinys</Card>
      <Card title="aukštai"/>
      <Card title="danguje"/>
      <Card title="."/>
    </div>
  );
}

export default App;
// Namu darbas - sukurti masyva [items] sudarytą iš objektų
//title, price, description ir img(iš neto)
//su kiekvienu objektu sukurti itemCard elementus
// perduoti kiekvienam itemCard React komponentui, savybes(title, price, description ir img
//stilizuoti ir panaudoti per parametrus paduotas savybes
//išmokti "js object destructurization"