import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/common'
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
    </BrowserRouter>
  )
};

export default App;
