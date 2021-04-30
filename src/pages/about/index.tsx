import * as React from 'react';
import { HashRouter, Route, NavLink } from 'react-router-dom';
import DemoButton from './demo-button';
import DemoCarousel from './demo-carousel';
import DemoDropdown from './demo-dropdown';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="left-nav">
          <div className="menus">
            <div className="menu-item">
              <NavLink to={'/about/demo-button'}>Button</NavLink>
            </div>
            <div className="menu-item">
              <NavLink to={'/about/demo-carousel'}>Carousel</NavLink>
            </div>
            <div className="menu-item">
              <NavLink to={'/about/demo-dropdown'}>Dropdown</NavLink>
            </div>
          </div>
        </div>
        <div className="right-content">
          <HashRouter>
            <Route path="/about">
              <Route path="/about/demo-button"><DemoButton /></Route>
              <Route path="/about/demo-carousel"><DemoCarousel /></Route>
              <Route path="/about/demo-dropdown"><DemoDropdown /></Route>
            </Route>
          </HashRouter>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;