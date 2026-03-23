import { useState, useReducer } from 'react'

import './App.css'

function App() {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  return (
    <>
      <h1>La mia lista della spesa</h1>

      <ul>
        {products.map(product => (
          <li>{product.name} e costa {product.price} € </li>
        ))}
      </ul>
    </>
  )
}

export default App
