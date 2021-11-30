import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { RegisterForm, AuthForm, UserPage } from '../components/login';
import { StartPage, Categories, IndividualProduct, BuyPage } from '../components/products';
import { AboutUs } from '../components/common';

const PagePaths = () => (
    <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/login" element={<AuthForm/>}/>
        <Route path="/login/register" element={<RegisterForm/>}/>
        <Route path="/productos" element={<Categories/>}/>
            <Route path="*" element={<Categories/>}/>
        <Route path="/productos/:product_id" element={<IndividualProduct/>}/>
        <Route path="/comprar" element={<BuyPage/>}/>
        <Route path="/user" element={<UserPage/>}/>
        <Route path="/juguetirocky" element={<AboutUs/>}/>
    </Routes>
)

export default PagePaths;