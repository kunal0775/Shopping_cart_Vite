import '../styling/cart-page/cart-page.scss';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartState, totalCartAmountState } from '../state/cart-state';
import Navbar from '../components/navbar';


const CartPage = () => {
  const [cartData, setCartData] = useRecoilState(cartState);
  const totalAmount = useRecoilValue(totalCartAmountState); // ✅ No setTotalAmount anymore
  console.log("cart data :", cartData);

  
  const handleIncrement = (e) => {
    const id = parseInt(e.target.id);
    setCartData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, order_qty: item.order_qty +1 } : item
      )
    );
  }

  const handleDecrement = (e) => {
    const id = parseInt(e.target.id);
    setCartData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, order_qty: item.order_qty -1 } : item
      )
    );
  }
  return (
    <div>
      <Navbar/>
    {cartData.map((item) => (
      <div key={item.id} className='flexbox'>
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
                  <div className='button-increment-decrement-point' id={item.id} onClick={handleDecrement}>{item.order_qty>1?"-":"🗑️"}</div>
                  <div className='button-increment-decrement-point'> {item.order_qty} </div>
                  <div className='button-increment-decrement-point' id={item.id} onClick={handleIncrement}>+</div>
              </div>
            </div>
            <p className='price'>{item.price}</p>
        </div>
        </div>
        :<div></div>}
      </div>
                <div className='buy-box'>
                    <p ><b>Subtotal ({cartData.length} item):</b> ₹{totalAmount}</p>
                    <button className='buy-button'>Proceed to buy</button>
                </div>

    </div>
    ))}
    </div>
    
  )
}

export default CartPage;
