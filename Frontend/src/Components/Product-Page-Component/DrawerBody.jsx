import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getCart } from '../../Redux/App/action'


const Addcartbody = styled.div`
width: 316px;
margin: auto;
text-align: left;
padding: 0px 32px 32px;

.addcartname{
    margin: auto;
    font-size: 12px;
    font-weight: bold;
}

.addcartflex{
    margin: auto;
    display: flex;
    font-size: 12px;
    color: grey;
}
.addcartimage{
    width: 60%;
}
.addcartrightflex{
    width: 40%;
    padding-left: 16px;
}
.addcartrightflex div{
    padding: 0px 0px 8px
}

`
const Addcart = styled.div`
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    padding: 16px 20px 40px;
`

const Addcartscroll = styled.div`
    max-height: 480px;
    margin: auto;
    overflow: auto;
    border-bottom: 0px solid black;
::-webkit-scrollbar {
    width: 3px;
  }

::-webkit-scrollbar-track {
    background-color: rgb(209, 209, 209);
  }

::-webkit-scrollbar-thumb {
    background-color: rgb(40, 39, 39);
  }

`

const DrawerBody = () => {
    const dispatch = useDispatch();
    const cartdata = useSelector((store) => store.AppReducer.cart);
    useEffect(() => {
        dispatch(getCart())
    }, [dispatch]);
    return (

        <div>
            <Addcart>CART</Addcart>
            <Addcartscroll>
                {cartdata?.map((cart) => {
                    return (
                        <Addcartbody key={cart.id}>
                            <div className='addcartname'>{cart.producttitle}</div>
                            <div className='addcartflex'>
                                <div className='addcartimage'>
                                    <img style={{ width: "100%", height: "305px" }} src={cart.image} alt={cart.producttitle} />
                                </div>
                                <div className='addcartrightflex'>
                                    <div style={{ paddingTop: "30px", textTransform:"uppercase" }}>{cart.color ? cart.color.split("|")[0] : "black / blue"}</div>
                                    <div>M (UK M)</div>
                                    <div>{cart.quantity}</div>
                                    <div style={{ paddingTop: "100px" }}>{cart.price}</div>
                                </div>
                            </div>
                        </Addcartbody>
                    )
                })}
            </Addcartscroll>
            <GotoBasket>

            <div className="gotostyle">
            <Link to="/cart">GO TO BASKET</Link>
            </div>


            </GotoBasket>
        </div>
    )
}

const GotoBasket = styled.div`
padding-top: 20px;
border-top: 1px solid black;
.gotostyle {
padding: 8px 12px;
font-size: 12px;
background-color: black;
color: white ;
width: 318px ;
text-align: center;
margin: auto;
}
.gotostyle a{
    color: white;
    text-decoration: none;
}
`

export default DrawerBody;
