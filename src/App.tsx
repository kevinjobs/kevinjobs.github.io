import './App.scss';
//
import { ViewportProvider } from '@/hooks/viewportCtx';
import { HashRouter, Switch, Route } from 'react-router-dom';
//
import DesktopNavbar from '@/components/Navbar/DesktopNavbar';
import Gallery from '@/pages/Gallery';
import Homepage from '@/pages/Homepage';

function App() {
  return (
    <ViewportProvider>
      <HashRouter>
        <div className="App">
          <DesktopNavbar />
          <Switch>
            <Route path="/" component={Homepage} />
            <Route path="/homepage" component={Homepage} />
            <Route path="/gallery" component={Gallery} />
          </Switch>
        </div>
      </HashRouter>
    </ViewportProvider>
  );
}

export default App;
