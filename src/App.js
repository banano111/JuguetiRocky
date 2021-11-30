import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

import { Header, Footer } from './components/common'
import { ShopProvider } from './context/ShopContext';
import { UserProvider } from './context/UserContext';
import PagePaths from './routes'

const App = () =>{
  return (
    <UserProvider>
      <ShopProvider>
        <BrowserRouter>
          <Header />
          <PagePaths/>
          <Toaster 
            position="top-center"
            reverseOrder={false}
          />
          <Footer/>
        </BrowserRouter>
      </ShopProvider>
    </UserProvider>
  )
};

export default App;
