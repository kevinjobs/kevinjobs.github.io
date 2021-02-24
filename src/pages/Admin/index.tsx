import NavPanel from './NavPanel';
import { HashRouter, Route } from 'react-router-dom';
import AdminArticle from './AdminArticle';

export default function () {
  return (
    <div className="Admin">
      <NavPanel />
      <HashRouter>
        <Route path="/admin">
          <Route path="/admin/article" component={AdminArticle} />
        </Route>
      </HashRouter>
    </div>
  )
}