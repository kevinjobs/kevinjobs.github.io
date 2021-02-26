import React from 'react';
import {
  Route,
  Redirect,
  useLocation,
  useHistory
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
import { Navbar, message } from '@/components';

const Routes: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const [nightMode, setNightMode] = React.useState(false);

  const handleLogin = () => {
    history.push('/login');
  }

  const handleLogout = () => {
    message({ type: 'success', text: '再见' });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    history.push('/login');
  }

  return (
    <>
      <Navbar
        fresh={location.pathname}
        onLogin={handleLogin}
        onLogout={handleLogout}
        setNightMode={(e: any) => setNightMode(!nightMode)}
      />
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