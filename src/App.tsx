import './App.scss';
import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
//
import { ViewportProvider } from '@/hooks/viewportCtx';
import { ThemeProvider } from '@/hooks';
import { Navbar, message } from '@/components';
import Routes from '@/routes';

const App: React.FC = () => {
  const [nightMode, setNightMode] = React.useState(false);
  const location = useLocation();
  const history = useHistory();

  const handleLogin = () => {
    history.push('/login');
  }

  const handleLogout = () => {
    message({ type: 'success', text: '再见' });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    history.push('/login');
  }

  return (
    <ViewportProvider>
      <ThemeProvider value={nightMode ? 'night' : 'day'}>
        <div className="App">
          <Navbar
            fresh={location.pathname}
            onLogin={handleLogin}
            onLogout={handleLogout}
            onSwitchTheme={(e: any) => {
              e.preventDefault();
              setNightMode(!nightMode);
              document.body.style.backgroundColor =
                nightMode ? "#f1f1f1" : '#333333';
            }}
          />
          <Routes />
        </div>
      </ThemeProvider>
    </ViewportProvider>
  );
}

export default App;
