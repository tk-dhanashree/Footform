import React from 'react';
import Navbar from '../src/component/Navbar';
import Product from './sections/Product';
import Customer from './sections/Customer';
import Footer from './component/Footer';
import Experience from './sections/Experience';

const App = () => {

  return (
    <main>
      <div className='bg-[#24221F] rotate-45 w-60 h-60 sm:h-80 sm:w-80 absolute left-0 transform -translate-x-1/2 -translate-y-1/2 z-20'>
      </div>
      <div className='relative z-30'>
        <Navbar />
      </div>
      <div className='h-screen z-10'>
        <Experience />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <Product />
        <Customer />
        <Footer />
      </div>
    </main>
  );
}

export default App;