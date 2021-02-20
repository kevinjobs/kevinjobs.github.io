import NavPanel from './NavPanel';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AdminArticle from './AdminArticle';
import './style.scss';

export default function () {
  return (
    <div className="Admin">
      <NavPanel />
      <HashRouter>
        <Switch>
          <Route path="/admin/article" component={AdminArticle} />
        </Switch>
      </HashRouter>
    </div>
  )
}