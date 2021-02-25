import { HashRouter, Route, NavLink } from 'react-router-dom';
import AdminArticle from './article-panel';
import AdminGalleryPage from './gallery';

export default function () {
  return (
    <div className="Admin">
      <div className="Admin-NavPanel shadow-card">
        <div className="Admin-NavPanel__Header">
          <h3>后 台 导 航</h3>
        </div>
        <div className="Admin-NavPanel__Container">
          <div className="Admin-NavPanel__Container--Menus">
            <ul>
              <li><NavLink to={'/admin/article'}>Articles</NavLink></li>
              <li><NavLink to={'/admin/gallery'}>Gallery</NavLink></li>
              <li><NavLink to={'/admin/tags'}>Tags</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Admin-Container">
        <HashRouter>
          <Route path="/admin">
            <Route path="/admin/article" component={AdminArticle} />
            <Route path="/admin/gallery" component={AdminGalleryPage} />
          </Route>
        </HashRouter>
      </div>
    </div>
  )
}