import './App.scss';
import React from 'react';
//
import { ViewportProvider } from '@/hooks/viewportCtx';
import Routes from '@/routes';

const App: React.FC = () => {
  return (
    <ViewportProvider>
      <div className="App">
        <Routes />
      </div>
    </ViewportProvider>
  );
}

export default App;
