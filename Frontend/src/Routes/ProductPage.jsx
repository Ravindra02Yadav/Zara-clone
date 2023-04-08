import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/App/action";
import ProductCard from '../Components/Product-Page-Component/ProductCard';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const ProductPage = ({limit}) => {
    const location = useLocation();
    const term = location.state?.query;
    const products = useSelector((state) => state.AppReducer.products)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduct(term,limit))
    }, [dispatch,term,limit]);
    return (
        <ProdContainer>
            <div className="gridlayout">
                {products.map((item) => {
                    return (<ProductCard key={item.id} id={item.id} item={item} />)
                })}
            </div>

        </ProdContainer>
    )
}

export default ProductPage

const ProdContainer = styled.div`
    width: 90%;
    margin: auto;
    padding-top: 150px;
    margin-bottom:50px;

    .gridlayout {
        display: grid;
        width: 100%;
        gap: 15px;
        grid-template-columns: repeat(auto-fit,minmax(200px,max-content));
    }


`