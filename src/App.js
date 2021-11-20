import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

import { Header, Footer } from './components/common'
import { UserProvider } from './context/UserContext';
import PagePaths from './routes'

const App = () =>{
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <PagePaths />
        <Toaster 
          position="top-center"
          reverseOrder={false}
        />
        <Footer/>
      </BrowserRouter>
    </UserProvider>
  )
};

export default App;
