import { useState } from 'react'
import '../styling/cart-page/cart-page.scss';

const initialData = [
    {
      id: 1,
      title: "Formal white shirt",
      image: "https://m.media-amazon.com/images/I/61idJrfaIRL._AC_UL480_QL65_.jpg",
      size: "Large",
      price: 684,
      order_qty:2,
    },
    {
      id: 2,
      title: "Stripped shirt",
      image: "https://m.media-amazon.com/images/I/711aUSDW66L._AC_UL480_QL65_.jpg",
      size: "Large",
      price: 565,
      order_qty:4,
    },
];

function getTotalAmount() {
  let total = 0;
  for (let i = 0; i < initialData.length; i++) {
    total += initialData[i].price * initialData[i].order_qty;
  }
  return total;
}
function getTotalItems() {
  let totalItems = 0;
  for (let i = 0; i < initialData.length; i++) {
    totalItems += initialData[i].order_qty;
  }
  return totalItems;
}

const CartPage = () => {
  const [cardData, setCardData] = useState(initialData);

  const handleAddCart = (e) => {
    setCardData((prevData) => {
      return prevData.map((item) => {
        if (item.id === parseInt(e.target.id)) {
          return { ...item, order_qty: item.order_qty + 1 };
        }
        return item;
      });
    }
    );
  }
  const handleIncrement = (e) => {
    console.log(e.target.id);
    setCardData((prevData) => {
      return prevData.map((item) => {
        if (item.id === parseInt(e.target.id)) {
          return { ...item, order_qty: item.order_qty + 1 };
        }
        return item;
      });
    }
    );
  }

  const handleDecrement = (e) => {
    setCardData((prevData) => {
      return prevData.map((item) => {
        if (item.id === parseInt(e.target.id)) {
          return { ...item, order_qty: item.order_qty -1 };
        }
        return item;
      });
    }
    );
  }
  return (
    <div>
    {cardData.map((item) => (
      <div key={item.id} className='shopping-card-container-flexbox'>
        <div className="shopping-card-container">
        {item.order_qty>=1?
          <div  className="shopping-box">
        
                <div className='flexbox'>
                    <p>Shopping Cart</p>
                    <p>Price</p>
                </div>
                <hr/>
          <div className='flexbox'>
            <img className='img3s' src={item.image} alt={item.title} />

            <div>
              <h3>{item.title}</h3>
              <p className='size'>Size: {item.size}</p>
        
              <div className='button-point'>
                  <button id={item.id} onClick={handleDecrement}>{item.order_qty>1?"-":"🗑️"}</button>
                  <button> {item.order_qty} </button>
                  <button id={item.id} onClick={handleIncrement}>+</button>
              </div>
            </div>
            <p className='price'>₹ {item.price}</p>
        </div>
        </div>
        :<div></div>}
      </div>
                <div className='buy-box'>
                    <p ><b>Subtotal ({getTotalItems()} item):</b> ₹{getTotalAmount()}</p>
                    <button className='buy-button'>Proceed to buy</button>
                </div>

    </div>
    ))}
    </div>
    
  )
}

export default CartPage;
