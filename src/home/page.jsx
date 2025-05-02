import { useEffect, useState } from 'react';
import '../styling/home/home.scss';
import { useRecoilState } from 'recoil';
import { cartState } from '../state/cart-state';
import Navbar from '../components/navbar';

const initialData = [
  {
    id: 1,
    title: 'Formal white shirt',
    image: 'https://m.media-amazon.com/images/I/61idJrfaIRL._AC_UL480_QL65_.jpg',
    price: '₹ 684',
    size: 'M',
    order_qty: 0,
  },
  {
    id: 2,
    title: 'Stripped shirt',
    image: 'https://m.media-amazon.com/images/I/711aUSDW66L._AC_UL480_QL65_.jpg',
    price: '₹ 565',
    size: 'L',
    order_qty: 0,
  },
  {
    id: 3,
    title: 'Blue casual shirt',
    image: 'https://m.media-amazon.com/images/I/51fVQasKeNL._AC_UL480_QL65_.jpg',
    price: '₹ 654',
    size: 'M',
    order_qty: 0,
  },
  {
    id: 4,
    title: 'Green outing shirt',
    image: 'https://m.media-amazon.com/images/I/714r0xXLL6L._AC_UL480_QL65_.jpg',
    price: '₹ 766',
    size: 'L',
    order_qty: 0,
  },
  {
    id: 5,
    title: 'Denim shirt',
    image: 'https://m.media-amazon.com/images/I/81uTb5UwUgL._AC_UL480_QL65_.jpg',
    price: '₹ 876',
    size: 'S',
    order_qty: 0,
  },
  {
    id: 6,
    title: 'Denim pink shirt',
    image: 'https://m.media-amazon.com/images/I/71YpLqxFChL._AC_UL480_QL65_.jpg',
    price: '₹ 467',
    size: 'S',
    order_qty: 0,
  },
  {
    id: 7,
    title: 'Navy casual shirt',
    image: 'https://m.media-amazon.com/images/I/51-pLhPHoBL._AC_UL480_QL65_.jpg',
    price: '₹ 643',
    size: 'L',
    order_qty: 0,
  },
  {
    id: 8,
    title: 'Checked casual half shirt',
    image: 'https://m.media-amazon.com/images/I/71D-olo8gXL._AC_UL480_QL65_.jpg',
    price: '₹ 545',
    size: 'XL',
    order_qty: 0,
  },
  {
    id: 9,
    title: 'Checked casual full shirt',
    image: 'https://m.media-amazon.com/images/I/61UoMHRthTL._AC_UL480_QL65_.jpg',
    price: '₹ 684',
    size: 'XXL',
    order_qty: 0,
  },
  {
    id: 10,
    title: 'Linning full shit',
    image: 'https://m.media-amazon.com/images/I/71BfHmJgTtL._AC_UL480_QL65_.jpg',
    price: '₹ 763',
    size: 'L',
    order_qty: 0,
  },
  {
    id: 11,
    title: 'Blue dotted shirt',
    image: 'https://m.media-amazon.com/images/I/61BQlmyg41L._AC_UL480_QL65_.jpg',
    price: '₹ 812',
    size: 'XL',
    order_qty: 0,
  },
  {
    id: 12,
    title: 'Checked yellow shirt',
    image: 'https://m.media-amazon.com/images/I/71uJmh8dJAL._AC_UL480_QL65_.jpg',
    price: '₹ 699',
    size: 'M',
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
      <Navbar/>
      <h2>Product List</h2>

      <div className="card-grid">
        {cardData.map((item) => (
          <div key={item.id} className="card">
            <div className="img-container">
              <img src={item.image} alt={item.title} />
            </div>

            <h3>{item.title}</h3>
            <div className="content-flex">
              <p>{item.price}</p>
              {item.order_qty < 1 ? (
                <button className="add-button" id={item.id} onClick={handleAddCart}>
                  Add Item
                </button>
              ) : (
                <div className="add-button">
                  <div className='add-button-increment-decrement' id={item.id} onClick={handleDecrement}>
                    {item.order_qty > 1 ? '-' : '🗑️'}
                  </div>
                  <div className='add-button-increment-decrement'>{item.order_qty}</div>
                  <div className='add-button-increment-decrement' id={item.id} onClick={handleIncrement}>
                    +
                  </div>
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
