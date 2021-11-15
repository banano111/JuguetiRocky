import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

import { Header, Footer } from './components/common'
import PagePaths from './routes'

const App = () =>{
  return (
    <BrowserRouter>
      <Header />
      <PagePaths />
      <Toaster 
        position="top-center"
        reverseOrder={false}
      />
      <Footer/>
    </BrowserRouter>
  )
};

export default App;
