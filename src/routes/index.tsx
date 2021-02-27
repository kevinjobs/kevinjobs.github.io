import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';
import {
  AboutPage,
  AdminPage,
  ArticlePage,
  GalleryPage,
  HomePage,
  LoginPage,
  PhotoPage,
  ProfilePage
} from '@/pages';


const Routes: React.FC = () => {
  return (
    <>
      <Route path="/about" component={AboutPage} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/article/:id" component={ArticlePage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/photo/:id" component={PhotoPage} />
      <Route path="/profile/:username" component={ProfilePage} />
      <Redirect from="/" to="/home" />
    </>
  )
}

export default Routes;