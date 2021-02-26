import './App.scss';
import React from 'react';
import { HashRouter } from 'react-router-dom';
//
import { ViewportProvider } from '@/hooks/viewportCtx';
import Routes from '@/routes';


const App: React.FC = () => {
  

  return (
    <ViewportProvider>
      <div className="App">
        <HashRouter>
          <Routes />
        </HashRouter>
      </div>
    </ViewportProvider>
  );
}

export default App;
