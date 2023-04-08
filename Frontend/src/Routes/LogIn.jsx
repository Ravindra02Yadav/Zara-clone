import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import "../CSS/Login.css"
import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/Auth/action'
import Footer from '../Components/Footer';
import styled from 'styled-components';
const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const location = useLocation()
  const { isAuth } = useSelector((store) => (store.AuthReducer))
  console.log(location)
  const path = location.state?.path;
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const firebaseConfig = {
    apiKey: "AIzaSyDCHvdgABXgjtj6C3-55D2colSpVF05NTI",
    authDomain: "zara-project-adec4.firebaseapp.com",
    projectId: "zara-project-adec4",
    storageBucket: "zara-project-adec4.appspot.com",
    messagingSenderId: "1083442232261",
    appId: "1:1083442232261:web:24d99e9bc4f6e92e49e9ac",
    measurementId: "G-JLT9HVM9BX"
  };

  const app = initializeApp(firebaseConfig);
  const handleLogin = (e) => {
    e.preventDefault();
    if (data.email && data.password) {
      dispatch(login(data.email, data.password)).then((res) => {
        if(!res){
          alert("You have entered wrong credentials or please Signup first")
        }else{
          navigate(path)
        } 
      })
    }else{
      alert("You Have entered Wrong Credentials")
    }
  }

  if (isAuth) {
    return <Navigate to={`/`} />
  }

  return (
    <>
      <div className='navbar_space'></div>
      <div className='Login_main_box'>
        <div className='Login_second_box'>
          <div className='Login_second_box1'>
            <h2>LOG IN</h2>
            <form action="">
              <label htmlFor="">E-MAIL</label><br />

              <input type="email" placeholder='Enter Email' onChange={(e) => setData({ ...data, email: e.target.value })} /><br /><br />
              <label htmlFor="">PASSWORD</label><br />
              <input type="password" placeholder='Enter Password' onChange={(e) => setData({ ...data, password: e.target.value })} /><br /><br />
              <button onClick={handleLogin}>LOG IN</button>
            </form>
          </div>
          <div className='Login_second_box2'>

            <h2>REGISTER</h2>
            <p>IF YOU STILL DON'T HAVE A <span><b>ZARA.COM</b></span> ACCOUNT, USE THIS OPTION TO ACCESS THE REGISTRATION FORM.</p>
            <p>BY GIVING US YOUR DETAILS, PURCHASING IN <b>ZARA.COM</b> WILL BE FASTER AND AN ENJOYABLE EXPERIENCE.</p>
            <button onClick={() => {
              navigate("/signin")
            }} >CREATE ACCOUNT</button>
          </div>

          <Container classname='signbox'>
            <p >DONT HAVE AN ACCOUNT? <Link to={`/signin`}>REGISTER</Link></p>
          </Container>
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  )
}

const Container = styled.div`
  display: none;


@media only screen and (min-width: 769px) and (max-width:845px){
      display:block;
}

@media only screen and (min-width: 481px) and (max-width:768px){

      display:block;

}

@media only screen and (min-width:320px) and (max-width:480px){

      display:block;

}

@media only screen and (max-width: 320px){

      display:block;

`

export default LogIn;