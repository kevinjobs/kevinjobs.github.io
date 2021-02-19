import './App.scss';
import React from 'react';
//
import { ViewportProvider } from '@/hooks/viewportCtx';
import { HashRouter, Switch, Route } from 'react-router-dom';
//
import Navbar from '@/components/Navbar';
import Gallery from '@/pages/Gallery';
import Homepage from '@/pages/Homepage';

const App: React.FC = () => {
  return (
    <ViewportProvider>
      <HashRouter>
        <div className="App">
          <Navbar />
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
