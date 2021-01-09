import React from 'react';
import './App.scss';
import { Exam, Homepage, About, Gallery } from './Pages';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ViewportProvider } from './Utils/viewportContext';

const App: React.FC = () => { 

  const menus: string[] = [
    'home',
    'exam',
    'gallery',
    'about'
  ]

  return (
    <ViewportProvider>
      <Router>
        <div className="App">
          <div className="container">
            <Switch>
              <Route path="/exam" component={Exam} />
              <Route path="/home" component={Homepage} />
              <Route path="/about" component={About} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/" component={Gallery} />
            </Switch>
          </div>
        </div>
      </Router>
    </ViewportProvider>
  );
}

export default App;