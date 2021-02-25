import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import { Navbar } from '@/components';
import {
  AboutPage,
  AdminPage,
  ArticlePage,
  GalleryPage,
  HomePage,
  LoginPage,
  ProfilePage
} from '@/pages';

const Routes: React.FC = () => {
  const menus = [
    'home',
    'gallery',
    'about'
  ]
  
  return (
    <HashRouter>
      <Navbar menus={menus} />
      <Route path="/">
        <Route path="/about" component={AboutPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/article/:id" component={ArticlePage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile/:username" component={ProfilePage} />
      </Route>
      { /* <Redirect from="/" to="/home" /> */}
    </HashRouter>
  )
}

export default Routes;