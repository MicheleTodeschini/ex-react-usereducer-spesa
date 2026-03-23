import { useState, useReducer } from 'react'

import './App.css'

function App() {

  const [addedProduct, setAddedProduct] = useState([])

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const cartReducer = (cart, action) => {
    switch (action.type) {
      case 'ADD_TOCART':
        if (cart.some(item => item.name === action.payload.name)) {
          return cart;
        }

        return [...cart, { ...action.payload, quantity: 1 }];

    }

  }


  const [items, dispatchItems] = useReducer(cartReducer, addedProduct)

  return (
    <>
      <h1>La mia lista della spesa</h1>

      <ul>
        {products.map(product => (
          <li>
            <h3>
              {product.name} e costa {product.price} €

            </h3>
            <button onClick={() => dispatchItems({ type: 'ADD_TOCART', payload: product })}>Aggiungi al carrello</button>
          </li>
        ))}
      </ul>
      <h2>Il mio carrello</h2>
      <ul>
        {items.map(item => (
          <li>
            {item.quantity} {item.name}  viene a costare {item.price}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
