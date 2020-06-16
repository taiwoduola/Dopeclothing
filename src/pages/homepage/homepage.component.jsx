import React from 'react';
import './homepage.styles.scss';


import Hero from '../../components/hero/hero.component';
import Catergory from '../../components/catergories/catergories.component';
import ProductsDir from '../../components/productsdirectory/productsdir.component';
import MiniHero from '../../components/minihero/minihero.component';



const HomePage = () => (
    <div className='homepage'>
       <Hero /> 
       <Catergory />
       <ProductsDir />
       <MiniHero />
      
    </div>
)

export default HomePage;