import './App.scss';
import React from 'react';
//
import { ViewportProvider } from '@/hooks/viewportCtx';
import { HashRouter as Router, Route } from 'react-router-dom';
//
import { AdminPage, ArticlePage, GalleryPage, HomePage, ProfilePage } from '@/pages';
import { Navbar } from '@/components';

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
          <Route path="/" component={HomePage}>
            <Route path="/admin" component={AdminPage} />
            <Route path="/article/:id" component={ArticlePage} />
            <Route path="/gallery" component={GalleryPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/profile/:username" component={ProfilePage} />
          </Route>
        </div>
      </Router>
    </ViewportProvider>
  );
}

export default App;
