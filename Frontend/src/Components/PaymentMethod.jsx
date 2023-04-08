import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Footer from './Footer';

const PaymentMethod = () => {
    const navigate = useNavigate();
    const cartData = useSelector(state => state.AppReducer.cart)
    return (
        <>
            <Container>
                <div className='layout-content'>
                    <h4>CHOOSE A PAYMENT METHOD</h4>
                    <p>Please note that only cards that use 3D Secure are accepted. Contact your bank to activate it or for further instructions.</p>
                    <div className="card-description">
                        <div className="card-item">
                            <img src="https://static.zara.net/static/images/payment/payment/icon-payment-visa.svg" alt="" />
                            <p>VISA</p>
                        </div>
                        <div className="card-item">
                            <img src="https://static.zara.net/static/images/payment/payment/icon-payment-mastercard.svg" alt="" />
                            <p>MASTERCARD</p>
                        </div>
                        <div className="card-item">
                            <img src="https://static.zara.net/static/images/payment/payment/icon-payment-amex_2.svg" alt="" />
                            <p>AMERICAN EXPESS</p>
                        </div>
                        <div className="card-item">
                            <img src="https://static.zara.net/static/images/payment/payment/ru-pay.svg" alt="" />
                            <p>RUPAY</p>
                        </div>
                        <div className="card-item">
                            <img src="https://static.zara.net/static/images/payment/payment/net-banking.svg" alt="" />
                            <p>NETBANKING</p>
                        </div>
                        <div className="card-item">
                            <img src="https://static.zara.net/static/images/payment/payment/upi.svg" alt="" />
                            <p>UNIFIED PAYMENT INTERFACE</p>
                        </div>
                    </div>
                    <div className="bottom-card" style={{display:'grid',gridTemplateColumns: "repeat(auto-fit,minmax(130px,max-content))",gap:"10px"}}>
                        <div className="bottom-card-item">
                            <img src="https://static.zara.net/static/images/payment/payment/IcoBank-GiftCard.svg" alt="" />
                            <p>GIFT CARD</p>
                        </div>
                        <div className="bottom-card-item">
                            <img src="https://static.zara.net/static/images/payment/payment/co-djpen.svg" alt="" />
                            <p>CASH ON DILIVERY</p>
                        </div>
                        <div className="bottom-card-item">
                            <img src="https://static.zara.net/static/images/payment/payment/in.svg" alt="" />
                            <p>IN CARD</p>
                        </div>
                    </div>
                    <div className="bottom-btn">
                        <p>
                            <div>
                                <b>TOTAL ₹{cartData.reduce((acc, el) => {
                                    return acc + el.pricenum*el.quantity;
                                }, 0)}.00 </b>
                            </div>
                            <div>INCLUDING GST</div>
                            <div>* EXCL SHIPPING COST</div>
                        </p>
                        <button className="checkout-btn" onClick={()=>navigate('/fillcarddetail')}>CONTINUE</button>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    )
}
const Container = styled.div`
width: 100%;
font-size:smaller;
position:relative;
cursor:pointer;
padding-top:120px;

.layout-content{
    width:90%;
    margin:auto;
    margin-top:50px;
    text-align:left;
}
.layout-content>p{
    border:1px solid orange;
    color:orange;
    padding:10px;
    width:50%;
}
.card-description{
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(130px,max-content));
    gap:15px;
    align-items:center;
}
.card-item{
    width:150px;
    height:140px;
    text-align:center;
    border:1px solid #e5e5e5;
    font-size:12px;
}
.card-item:hover{
    border:1px solid gray;  
}
.bottom-card{
    margin-top:20px;
}
.bottom-card-item{
    text-align:center;
    border:1px solid #e5e5e5;
    padding:10px  
    
}

.bottom-card-item:hover{
    border:1px solid gray;  
}
.bottom-btn{
    position:fixed;
    bottom: 0;
    right: 0;
    font-size:smaller;
    display:flex;
    justify-content:flex-end;
    gap:20px;
    padding:20px 20px 20px 65px;

}
.bottom-btn>p{
    padding-top:-10px;
    font-size:0.6rem;
    text-align: right;
}
.checkout-btn{
    font-size:small;
    width:200px;
    background:black;
    color:white;
}


`
export default PaymentMethod