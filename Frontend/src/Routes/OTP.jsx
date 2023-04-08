import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputBox from '../Components/InputBox';
import { deleteCart } from '../Redux/App/action';

const OTP = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {cart} = useSelector((store)=>store.AppReducer);

  useEffect(()=>{
    alert('Your OTP is 12345')
  },[])

  useEffect(()=>{
    if(query==='12345'){
      alert('Payment Successfull');
      cart && cart.forEach(el => {
        dispatch(deleteCart(el.id))
      });
      navigate('/')
    }
    else if(query.length === 5 && query !== '12345'){
      alert('Enter Correct OTP');
    }
  },[query])
  return (
    <Container>
      <InputBox setQuery={setQuery} length={5} maxInput={1} />
    </Container>
  );
}

const Container = styled.div`
width:100%;
text-align:center;
  margin-top:200px;
  position:absolute;
  display:flex;
  align-items:center;
  justify-content:center;
  form{
    width:30%;
    height:300px;
    margin-auto;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding:20px;
  }

  form h1{
    width:50%;
  }

  input{
    height:30px;
    width:30px;
    margin:5px;
    text-align:center;
  }

  @media only screen and (min-width: 768px) and (max-width:850px){
    form{
      width:40%;
    }
 }

  @media only screen and (min-width: 481px) and (max-width:768px){
    form{
      width:50%;
    }
 }

@media only screen and (min-width:320px) and (max-width:480px){
  form{
    width:70%;
  }

  input{
    height:20px;
    width:20px;
  }

}

@media only screen and (max-width: 320px){
  form{
    width:100%;
  }

  input{
    height:20px;
    width:20px;
  }

}
`

export default OTP