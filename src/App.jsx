import { useReducer } from 'react'
import './App.css'

function App() {

  const products = [
    { id: 1, name: 'Mela', price: 0.5 },
    { id: 2, name: 'Pane', price: 1.2 },
    { id: 3, name: 'Latte', price: 1.0 },
    { id: 4, name: 'Pasta', price: 0.7 },
  ];

  const cartReducer = (cart, action) => {
    switch (action.type) {

      case 'ADD_TOCART': {
        const existingItem = cart.find(
          item => item.id === action.payload.id
        );

        if (existingItem) {
          return cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }

        return [
          ...cart,
          { ...action.payload, quantity: 1 }
        ];
      }

      case 'REMOVE_FROM_CART':
        return cart.filter(
          item => item.id !== action.payload.id
        );

      default:
        return cart;
    }
  };

  const [items, dispatchItems] = useReducer(cartReducer, []);

  const total = items.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  return (
    <>
      <h1>La mia lista della spesa</h1>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>
              {product.name} costa {product.price} €
            </h3>

            <button
              onClick={() =>
                dispatchItems({
                  type: 'ADD_TOCART',
                  payload: product
                })
              }
            >
              Aggiungi al carrello
            </button>
          </li>
        ))}
      </ul>

      <h2>Il mio carrello</h2>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.quantity}x {item.name} - {(item.price * item.quantity).toFixed(2)} €

            <button
              onClick={() =>
                dispatchItems({
                  type: 'REMOVE_FROM_CART',
                  payload: item
                })
              }
            >
              Rimuovi
            </button>
          </li>
        ))}
      </ul>

      <h3>Totale: {total.toFixed(2)} €</h3>
    </>
  )
}

export default App