import React from 'react';
import {Routes, Route} from 'react-router-dom';

import { RegisterForm, AuthForm, UserPage } from '../components/login';
import { StartPage, Categories, IndividualProduct, BuyPage } from '../components/products';

const PagePaths = () => (
    <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/login" element={<AuthForm/>}/>
        <Route path="/login/register" element={<RegisterForm/>}/>
        <Route path="/productos" element={<Categories/>}/>
        <Route path="/productos/:product_id" element={<IndividualProduct/>}/>
        <Route path="/comprar" element={<BuyPage/>}/>
        <Route path="/user" element={<UserPage/>}/>
    </Routes>
)

export default PagePaths;