import React from 'react';
import {
  Route,
  useLocation
} from 'react-router-dom';
import {
  AboutPage,
  AdminPage,
  ArticlePage,
  GalleryPage,
  HomePage,
  LawPage,
  LoginPage,
  MissivePage,
  ProfilePage,
  SchedulePage,
  WikiPage
} from '@/pages';


const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Route path="/about" component={AboutPage} />
      <Route path="/admin" component={AdminPage} />
      <Route exact path="/article/:id" component={ArticlePage} />
      <Route exact path="/gallery" component={GalleryPage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/law" component={LawPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/missive" component={MissivePage} />
      <Route
        exact
        path="/profile/:username"
        render={({ match }) => <ProfilePage fresh={location.pathname} match={match} />}
      />
      <Route exact path="/schedule" component={SchedulePage} />
      <Route exact path="/wiki" component={WikiPage} />
      <Route exact path="/" component={HomePage} />
    </>
  )
}

export default Routes;