import React from 'react';
import Carousel from './Carousel/index';
import Article from './Article';

const Homepage: React.FC = () => {    
    return(
      <div className="homepage">
        <Carousel />
        <Article />
      </div>
    )
}

export default Homepage;