import React from 'react';
import Carousel from './Carousel/index';
import Article from './Article';
import { Navbar } from '../../Common';

const Homepage: React.FC = () => {    
  const menus: string[] = [
    'home',
    'exam',
    'gallery',
    'about'
  ]

  return(
    <div className="homepage">
      <Navbar menus={menus} />
      <Carousel />
      <Article />
    </div>
  )
}

export default Homepage;