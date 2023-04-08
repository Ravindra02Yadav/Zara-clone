import styled from "styled-components";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Checkout = () => {
    const cartData = useSelector(state => state.AppReducer.cart)
    return (
        <>

            <Container>
                <div className="layout-content">
                    <div className="main-content">
                        <span>WHERE DO YOU WANT TO RECEIVE YOUR ORDER?</span>
                        <div className="delivery-group-head" style={{marginTop:'20px'}}>
                            <div>
                                <p><AccountBalanceIcon /></p>
                                <div>Home</div>
                            </div>
                            <div>
                                <p><AccountBalanceIcon /></p>
                                <div>Zara Store

                                </div>

                            </div>
                        </div>
                        <div className="delivery-address">
                            <span>Address</span>
                            <span>EDIT</span>

                        </div>
                        <div className="delivery-group">
                            <h2>ITEMS</h2>
                            <div className="checkoutDeliverypro">
                                {cartData.map((item) => (
                                    <img src={item.image} alt="" />

                                ))}
                            </div>
                        </div>
                        <div className="delivery-details">
                            <hr />
                            <div>
                                <div>

                                    <div className="delivery-details-address">
                                        <div> <b>
                                            THURSDAY 06, OCTOBER - FRIDAY 07, OCTOBER</b>
                                        </div>
                                        <div>
                                            FREE SHIPPING FOR ORDERS OVER ₹ 2,990
                                        </div>
                                        <br />
                                        <div>
                                            DELIVERY TIME FRAMES
                                        </div>
                                    </div>
                                </div>
                                <div className="delivery-free">
                                    FREE
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="bottom-btn">
                            <p>SHIPPING FREE</p>
                            <Link to="/paymentMethod"><button className="bottom-btn-link">CONTINUE</button></Link>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </>

    )
}
const Container = styled.div`
width: 100%;
padding-top:150px;
font-size:smaller;
position:relative;
cursor:pointer;
padding-top:150px;
.layout-content{
    width:90%;
    margin:auto;
}
.main-content{
    text-align:left;
    margin-top:20px;
}
.delivery-group-head{
    display:flex;
    gap:10px;
    justify-content:flex-start;
}
.delivery-group-head>div{
    border:1px solid black;
    height:100px;
    width:100px;
    font-size:smaller;
}
.delivery-group-head>div>p{
    text-align:center;
     padding-top:30px;
}
.delivery-group-head>div>div{
  text-align:center;
   margin-top:-15px;
   font-size:smaller;
}
.delivery-address{
    display:flex;
    gap:10px;
    flex-direction:column;
    font-size:smaller;
    margin-top:20px;
}
.checkoutDeliverypro{
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(100px,max-content));
    gap:20px;
    align-items:center;
}
.delivery-group>h2{
    margin:0 0 16px;
}
.delivery-group img{
    height:150px;
    width:100px;
}
.delivery-details{
    padding:32px 0;
}
.delivery-details>div{
    display:flex;
    justify-content:space-between;
}

.delivery-details-address>div{
    font-size:smaller;
}
.delivery-free{
    font-size:smaller;
    padding-top:20px; 
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
    font-size:smaller;
}
.bottom-btn-link{
    font-size:small;
    padding:15px;
    width:200px;
    background:black;
    color:white;
}

`
export default Checkout