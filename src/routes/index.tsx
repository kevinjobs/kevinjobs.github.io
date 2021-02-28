import React from 'react';
import {
  Route,
  Redirect,
  useLocation
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
  const location = useLocation();

  return (
    <>
      <Route exact path="/about" component={AboutPage} />
      <Route path="/admin" component={AdminPage} />
      <Route exact path="/article/:id" component={ArticlePage} />
      <Route exact path="/gallery" component={GalleryPage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/photo/:id" component={PhotoPage} />
      <Route
        exact
        path="/profile/:username"
        render={({ match }) => <ProfilePage fresh={location.pathname} match={match} />}
      />
      <Route exact path="/" component={HomePage} />
    </>
  )
}

export default Routes;