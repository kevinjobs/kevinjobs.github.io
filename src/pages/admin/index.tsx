import { HashRouter, Route, NavLink } from 'react-router-dom';
import AdminPathsPage from './paths';
import AdminPostsOverview from './posts';
import AdminNewPage from './new';

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
            <li><NavLink to={'/admin/tags'}>标签</NavLink></li>
            <li><NavLink to={'/admin/paths'}>路径编辑</NavLink></li>
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
          </Route>
        </HashRouter>
      </div>
    </div>
  )
}