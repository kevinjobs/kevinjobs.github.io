import { Route } from 'react-router-dom';
import AdminLogPage from './logs';
import AdminPathsPage from './paths';
import AdminPostsOverview from './posts';
import AdminNewPage from './new';
import AdminUserPage from './users';

export default function AdminRoutes () {
  return (
    <Route path="/admin">
      <Route path="/admin/posts" component={AdminPostsOverview} />
      <Route path="/admin/new" component={AdminNewPage} />
      <Route path="/admin/paths" component={AdminPathsPage} />
      <Route path="/admin/logs" component={AdminLogPage} />
      <Route path="/admin/users" component={AdminUserPage} />
    </Route>
  )
};