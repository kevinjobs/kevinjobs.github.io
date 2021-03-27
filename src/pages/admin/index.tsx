import { HashRouter, Route, NavLink } from 'react-router-dom';
import AdminArticleOverview from './posts';

export default function () {
  return (
    <div className="Admin">
      <div className="Admin-NavPanel-Left">
        <div className="Admin-NavPanel__Header">
          <h3>后 台 导 航</h3>
        </div>
        <div className="Admin-NavPanel__Container">
          <div className="Admin-NavPanel__Container--Menus">
            <ul>
              <li><NavLink to={'/admin/posts'}>概览</NavLink></li>
              <li><NavLink to={'/admin/tags'}>标签</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Admin-Container-Right">
        <HashRouter>
          <Route path="/admin">
            <Route path="/admin/posts" component={AdminArticleOverview} />
          </Route>
        </HashRouter>
      </div>
    </div>
  )
}