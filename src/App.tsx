import './App.scss';
import React from 'react';
//
import { ViewportProvider } from '@/hooks/viewportCtx';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
//
import Admin from '@/pages/Admin';
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
          <Switch>
            <Route path="/home" component={Homepage} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/admin" component={Admin} />
            <Route path="/" component={Homepage} />
          </Switch>
        </div>
      </Router>
    </ViewportProvider>
  );
}

export default App;
