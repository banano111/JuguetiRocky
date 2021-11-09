import React from 'react';
import {Routes, Route} from 'react-router-dom';

import { RegisterForm, AuthForm } from '../components/login';

const PagePaths = () => (
    <Routes>
        <Route path="/" element={<p>Pagina de Inicio</p>}/>
        <Route path="/login" element={<AuthForm/>}/>
        <Route path="/login/register" element={<RegisterForm/>}/>
    </Routes>
)

export default PagePaths;