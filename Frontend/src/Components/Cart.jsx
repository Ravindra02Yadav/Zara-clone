import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../CSS/Cart.css";
import { deleteCart, getCart, patchcart } from "../Redux/App/action";
import Footer from "./Footer";


const Cart = () => {
  const cartData = useSelector(state => state.AppReducer.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deletehandle = (id) => {
    dispatch(deleteCart(id)).then((res) => {
      dispatch(getCart())
    })
  }
  const addHandler =({qnty,id})=>{
    dispatch(patchcart({qnty,id})).then((res)=> {
      dispatch(getCart())
    })
  }
  const reduceHandler =({qnty,id})=>{
    dispatch(patchcart({qnty,id})).then((res)=> {
      dispatch(getCart())
    })
  }
  const handleCheckout = () =>{
    if(cartData && cartData.length > 0){
      navigate('/checkout')
    }else{
      alert('Please Add Some Items To Your Cart In Order To Proceed')
    }
  }

  let sum = 0;
  cartData && cartData.forEach(element => {
    sum+= element.pricenum * element.quantity;
  });


  return (
    <>
      <div className="container">
        <div className="heading">
          <span>CART({cartData?cartData.length:"0"})</span>
          <span>WISHLIST</span>
        </div>
        <div className="shoping-cart-msg">
          Items in the basket are not reserved until completing the purchase.
        </div>

        <div className="cart-item-flex">
          {cartData && cartData.length === 0 ?
            <div style={{textTransform:'uppercase'}}>cart data is empty</div>
            :
            cartData?.map((item,index) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-header" style={{ fontSize: '13px', paddingBottom: '10px' }}>
                  {" "}
                  <b >{item.producttitle} </b>{" "}
                </div>
                <div className="cart-item-container">
                  <div >
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cart-item-details">
                    <div className="cart-item-description">
                      <div>REF. | {item.color ? item.color.split("|")[1] : "453/2"}</div>
                      <div style={{ textTransform: "uppercase" }}>{item.color ? item.color.split("|")[0] : "orange"}</div>
                      <div>M (UK M)</div>
                      <div>
                        {" "}
                        <span style={{ cursor: "pointer" }} onClick={()=>{reduceHandler({qnty:item.quantity-1,id:item.id})}} >-</span>
                        <span>{item.quantity}</span>
                        <span style={{ cursor: "pointer" }} onClick={()=>{addHandler({qnty:item.quantity+1,id:item.id})}}>+</span>
                      </div>
                    </div>
                    <div className="item-quantity" style={{ fontSize: '12px' }}>
                      <div>{item.price}</div>
                    </div>
                    <div>
                      {" "}
                      <button onClick={() => { deletehandle(item.id) }}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="bottom-btn">
          <div>
            <div>
              <b>TOTAL ₹{sum}.00 </b>
            </div>
            <div>INCLUDING GST</div>
            <div>* EXCL SHIPPING COST</div>
          </div>
          <button className="checkout-btn" onClick={handleCheckout}>CONTINUE</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
