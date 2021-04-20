import './App.scss';
import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
//
import { ViewportProvider } from '@/hooks/viewportCtx';
import { ThemeProvider } from '@/hooks';
import { Navbar, message } from '@/components';
import Routes from '@/routes';

const App: React.FC = () => {
  const [nightMode, setNightMode] = React.useState(true);

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

  React.useEffect(() => {
    if (nightMode) {
      document.body.style.backgroundColor = "#111111";
    } else {
      document.body.style.backgroundColor = '#f1f1f1';
    }
  }, [nightMode])

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
            }}
          />
          <Routes />
        </div>
      </ThemeProvider>
    </ViewportProvider>
  );
}

export default App;
