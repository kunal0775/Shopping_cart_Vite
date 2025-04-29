import { useEffect, useState } from 'react';
import '../styling/home/home.scss';
import '../styling/cart-page/cart-page.scss';
import { useRecoilState } from 'recoil';
import { cartState } from '../state/cart-state';

const initialData = [
  {
    id: 1,
    title: 'Formal white shirt',
    image: 'https://m.media-amazon.com/images/I/61idJrfaIRL._AC_UL480_QL65_.jpg',
    price: '₹ 684',
    order_qty: 0,
  },
  {
    id: 2,
    title: 'Stripped shirt',
    image: 'https://m.media-amazon.com/images/I/711aUSDW66L._AC_UL480_QL65_.jpg',
    price: '₹ 565',
    order_qty: 0,
  },
  {
    id: 3,
    title: 'Blue casual shirt',
    image: 'https://m.media-amazon.com/images/I/51fVQasKeNL._AC_UL480_QL65_.jpg',
    price: '₹ 654',
    order_qty: 0,
  },
  {
    id: 4,
    title: 'Green outing shirt',
    image: 'https://m.media-amazon.com/images/I/714r0xXLL6L._AC_UL480_QL65_.jpg',
    price: '₹ 766',
    order_qty: 0,
  },
  {
    id: 5,
    title: 'Denim shirt',
    image: 'https://m.media-amazon.com/images/I/81uTb5UwUgL._AC_UL480_QL65_.jpg',
    price: '₹ 876',
    order_qty: 0,
  },
  {
    id: 6,
    title: 'Denim pink shirt',
    image: 'https://m.media-amazon.com/images/I/71YpLqxFChL._AC_UL480_QL65_.jpg',
    price: '₹ 467',
    order_qty: 0,
  },
  {
    id: 7,
    title: 'Navy casual shirt',
    image: 'https://m.media-amazon.com/images/I/51-pLhPHoBL._AC_UL480_QL65_.jpg',
    price: '₹ 643',
    order_qty: 0,
  },
  {
    id: 8,
    title: 'Checked casual half shirt',
    image: 'https://m.media-amazon.com/images/I/71D-olo8gXL._AC_UL480_QL65_.jpg',
    price: '₹ 545',
    order_qty: 0,
  },
  {
    id: 9,
    title: 'Checked casual full shirt',
    image: 'https://m.media-amazon.com/images/I/61UoMHRthTL._AC_UL480_QL65_.jpg',
    price: '₹ 684',
    order_qty: 0,
  },
  {
    id: 10,
    title: 'Linning full shit',
    image: 'https://m.media-amazon.com/images/I/71BfHmJgTtL._AC_UL480_QL65_.jpg',
    price: '₹ 763',
    order_qty: 0,
  },
  {
    id: 11,
    title: 'Blue dotted shirt',
    image: 'https://m.media-amazon.com/images/I/61BQlmyg41L._AC_UL480_QL65_.jpg',
    price: '₹ 812',
    order_qty: 0,
  },
  {
    id: 12,
    title: 'Checked yellow shirt',
    image: 'https://m.media-amazon.com/images/I/71uJmh8dJAL._AC_UL480_QL65_.jpg',
    price: '₹ 699',
    order_qty: 0,
  },
];

const HomePage = () => {
  const [cardData, setCardData] = useState(initialData);
  const [cartData, setCartData] = useRecoilState(cartState);

  const handleAddCart = (e) => {
    const id = parseInt(e.target.id);

    // Update card UI
    setCardData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, order_qty: 1 } : item
      )
    );

    const addedItem = cardData.find((item) => item.id === id);
    if (addedItem) {
      // Add to cart only if not already in cart
      const exists = cartData.find((item) => item.id === id);
      if (!exists) {
        setCartData([...cartData, { ...addedItem, order_qty: 1 }]);
      }
    }
  };

  const handleIncrement = (e) => {
    const id = parseInt(e.target.id);
    setCardData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, order_qty: item.order_qty + 1 } : item
      )
    );

    setCartData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, order_qty: item.order_qty + 1 } : item
      )
    );
  };

  const handleDecrement = (e) => {
    const id = parseInt(e.target.id);

    setCardData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, order_qty: item.order_qty - 1 }
          : item
      )
    );

    setCartData((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, order_qty: item.order_qty - 1 }
            : item
        )
        .filter((item) => item.order_qty > 0)
    );
  };

  return (
    <div>
      <h2>Product List</h2>

      <div className="card-grid">
        {cardData.map((item) => (
          <div key={item.id} className="card">
            <div className="img-container">
              <img src={item.image} alt={item.title} />
            </div>

            <h3>{item.title}</h3>
            <div className="flex-content">
              <p>{item.price}</p>
              {item.order_qty < 1 ? (
                <button className="add-button" id={item.id} onClick={handleAddCart}>
                  Add Item
                </button>
              ) : (
                <div className="add-button">
                  <button className='add-button-increment-decrement' id={item.id} onClick={handleDecrement}>
                    {item.order_qty > 1 ? '-' : '🗑️'}
                  </button>
                  <button className='add-button-increment-decrement' style={{ margin: '0 10px' }}>{item.order_qty}</button>
                  <button className='add-button-increment-decrement' id={item.id} onClick={handleIncrement}>
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
