import './App.scss';
import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
//
import { useTheme } from '@/hooks';
import { ViewportProvider } from '@/hooks/viewportCtx';
import { Navbar, message } from '@/components';
import Routes from '@/routes';

const App: React.FC = () => {
  const [theme, setTheme] = React.useState('light');

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

  const handleSwitchTheme = (e: any) => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('light');
    }
  }

  React.useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme])

  return (
    <ViewportProvider>
      <div className="App">
        <Navbar
          fresh={location.pathname}
          onLogin={handleLogin}
          onLogout={handleLogout}
          onSwitchTheme={handleSwitchTheme}
        />
        <Routes />
      </div>
    </ViewportProvider>
  );
}

export default App;
