import { HashRouter, Route, NavLink } from 'react-router-dom';
import AdminLogPage from './logs';
import AdminPathsPage from './paths';
import AdminPostsOverview from './posts';
import AdminNewPage from './new';
import AdminUserPage from './users';

export default function () {
  const LeftPanel = () => (
    <div className="navi-panel">
      <div className="header">
        <h3>后 台 导 航</h3>
      </div>
      <div className="container">
        <div className="menus">
          <ul>
            <li><NavLink to={'/admin/posts'}>概览</NavLink></li>
            <li><NavLink to={'/admin/tags'}>标签列表</NavLink></li>
            <li><NavLink to={'/admin/paths'}>路径列表</NavLink></li>
            <li><NavLink to={'/admin/logs'}>日志查看</NavLink></li>
            <li><NavLink to={'/admin/users'}>用户列表</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  )

  return (
    <div className="Admin">
      <div className="Admin-Left">
        <LeftPanel />
      </div>
      <div className="Admin-Right">
        <HashRouter>
          <Route path="/admin">
            <Route path="/admin/posts" component={AdminPostsOverview} />
            <Route path="/admin/new" component={AdminNewPage} />
            <Route path="/admin/paths" component={AdminPathsPage} />
            <Route path="/admin/logs" component={AdminLogPage} />
            <Route path="/admin/users" component={AdminUserPage} />
          </Route>
        </HashRouter>
      </div>
    </div>
  )
}