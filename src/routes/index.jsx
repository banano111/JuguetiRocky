import React from 'react';
import {Routes, Route} from 'react-router-dom';

import { RegisterForm, AuthForm } from '../components/login';
import { StartPage, Categories } from '../components/products';

const PagePaths = () => (
    <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/login" element={<AuthForm/>}/>
        <Route path="/login/register" element={<RegisterForm/>}/>
        <Route path="/productos" element={<Categories/>}/>
    </Routes>
)

export default PagePaths;