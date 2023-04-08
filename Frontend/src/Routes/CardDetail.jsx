import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import cardImage from '../Resources/Images/card.png'

const CardDetail = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <div className="checkout-billing-box">
                <div className="checkout-data-header-Billing">
                    <div>Payment Information</div>
                </div>

                <div className="checkout-payment-proceed-box">
                    <div><img src={cardImage} alt="ddd"/></div>
                    <div>
                        <label for="">Card Number</label>
                        <input type="text" className="cardNumber" placeholder="123456789"/>
                    </div>
                    <div>
                        <div>
                            <label for="">Expiration Date</label>
                            <input type="text" className="expirationDate" placeholder="12/22"/>
                        </div>
                        <div>
                            <label for="">CVV</label>
                            <input type="text" className="cvv" placeholder="123"/>
                        </div>
                    </div>


                </div>
                <div className="checkout-place-order">
                    <div><Link to={`/`}>Cancel</Link></div>
                    <div><button onClick={()=>navigate('/otp')} className="placeOrder">PLACE ORDER</button></div>
                </div>

            </div>
        </Container>
    )
}
const Container = styled.div`
padding-top:150px;
margin-bottom:100px;
z-index:0;
.checkout-billing-box{
    width: 78%;
    height: 570px;
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
    background-color: white;
    border-radius: 8px;
}

.checkout-data-header-Billing{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 3px solid rgb(227, 225, 225);
    font-size: 12px;
    font-weight: 400;
    color: rgb(58, 56, 56);
    background-color: .f0f4f6
}

.checkout-data-header-Billing div:first-child{
    width: 60%;
    padding: 25px;
    font-size: 20px;
    font-weight: 600;
}



.checkout-payment-proceed-box{
    width: 45%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 3px solid rgb(227, 225, 225);
    margin: auto;
    margin-top: 50px;
    border-radius: 8px;
    overflow: hidden;
    padding-bottom: 40px;
}

.checkout-payment-proceed-box>div:first-child{
    width: 100%;
    margin-top: 0%;
    border-bottom: 3px solid rgb(227, 225, 225);
    
}
.checkout-payment-proceed-box>div:first-child img{
    width: 100%;
}

.checkout-payment-proceed-box>div:nth-child(2){
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top:20px
    
}

.checkout-payment-proceed-box>div:nth-child(2)>input{
    padding: 12px 10px;
    margin-top: 10px;
    
}

.checkout-payment-proceed-box>div:nth-child(3){
    width: 90%;
    display: flex;
    margin-top: 30px; 
}


.checkout-payment-proceed-box>div:nth-child(3)>div{
    width: 85%;
    display: flex;
    flex-direction: column;
}

.checkout-payment-proceed-box>div:nth-child(3)>div:first-child>input{
    width: 85%;
    padding: 12px 10px;
}
.checkout-payment-proceed-box>div:nth-child(3)>div:last-child>input{
    width: 90%;
}

.checkout-payment-proceed-box>div:nth-child(3)>div>input{
    padding: 12px 10px;
    margin-top: 10px;
}

.checkout-place-order{
    width: 45%;
    margin: auto;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content:space-around;
    text-align:center;
}

.checkout-place-order div:first-child{
    width: 50%;
    padding: 20px;
    color: .4296cb;
    font-size: 18px;
}

.checkout-place-order div:last-child{
    width: 50%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: right;
    
}

.checkout-place-order div:last-child button{
    width: 70%;
    padding: 15px 0px;
    color: white;
    background-color: black;
    border-radius: 4px;
    border: 1px solid #4296cb;
    cursor:pointer;
}
.checkout-place-order div:first-child a{
    text-decoration: none;
    color: #4296cb;
}

@media only screen and (min-width: 769px) and (max-width:1200px){
    .checkout-payment-proceed-box{
        width:70%;
    }

    .checkout-place-order{
        width:80%;
    }
    .checkout-place-order div:last-child button{
        width:60%;
        padding: 20px 0px;
        font-size:11px;
    }
    .checkout-place-order div:first-child{
        width:20%;
    }
    
}

@media only screen and (min-width: 769px) and (max-width:845px){
    
    
    .checkout-payment-proceed-box{
        width:80%;
    }

    .checkout-place-order{
        width:95%;
    }
    .checkout-place-order div:last-child button{
        width: 70%;
        padding: 20px 0px;
        font-size:11px;
    }
    .checkout-place-order div:first-child{
        width:50%;
    }
}

@media only screen and (min-width: 481px) and (max-width:768px){
    .checkout-payment-proceed-box{
        width:85%;
    }
    .checkout-billing-box{
        width: 90%;
    }

    .checkout-place-order{
        width:95%;
    }

    .checkout-place-order div:last-child button{
        width: 80%;
        padding: 20px 10px;
        font-size:11px;
    }
    .checkout-place-order div:first-child{
        width:50%;
    }
}

@media only screen and (min-width:320px) and (max-width:480px){
    .checkout-payment-proceed-box{
        width:95%;
    }
    .checkout-billing-box{
        width: 95%;
    }

    .checkout-place-order{
        width:100%;
    }

    .checkout-place-order div:last-child button{
        width: 90%;
        padding: 20px 10px;
        font-size:11px;
    }
    .checkout-place-order div:first-child{
        width:30%;
    }

    .checkout-payment-proceed-box>div:nth-child(2){
        width: 90%;
        padding-left:10px;
    }
    
    
    .checkout-payment-proceed-box>div:nth-child(3){
        width: 88%;
        display: flex;
        margin-top: 30px; 
        gap:10px;
    }

}

@media only screen and (max-width: 320px){
    .checkout-payment-proceed-box{
        width:95%;
    }
    .checkout-billing-box{
        width: 95%;
    }
    .checkout-place-order{
        width:95%;
    }
    
    .checkout-place-order div:last-child button{
        width: 100%;
        padding: 20px 10px;
        font-size:11px;
    }

    .checkout-place-order div:first-child{
        width: 30%;
    }
}
`

export default CardDetail