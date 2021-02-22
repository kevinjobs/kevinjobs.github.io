import './App.scss';
import React from 'react';
//
import { ViewportProvider } from '@/hooks/viewportCtx';
import { HashRouter as Router, Route } from 'react-router-dom';
//
import Admin from '@/pages/Admin';
import Profile from '@/pages/Profile';
import Navbar from '@/components/Navbar';
import Gallery from '@/pages/Gallery';
import Homepage from '@/pages/Homepage';

const App: React.FC = () => {
  const menus = [
    'home',
    'gallery',
    'about'
  ]

  return (
    <ViewportProvider>
      <Router>
        <div className="App">
          <Navbar menus={menus} />
          <Route path="/" component={Homepage}>
            <Route path="/gallery" component={Gallery} />
            <Route path="/admin" component={Admin} />
            <Route path="/home" component={Homepage} />
            <Route path="/profile/:username" component={Profile} />
          </Route>
        </div>
      </Router>
    </ViewportProvider>
  );
}

export default App;
