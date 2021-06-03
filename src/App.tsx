import './App.scss';
import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
//
import { ViewportProvider } from '@/hooks/viewportCtx';
import { ThemeProvider } from '@/hooks';
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
    let bgcolor :string;
    switch (theme) {
      case 'light':
        bgcolor = '#f1f1f1';
        break;
      case 'dark':
        bgcolor = '#111111';
        break;
      default:
        bgcolor = '#f1f1f1';
    }
    document.body.style.backgroundColor = bgcolor;
  }, [theme])

  return (
    <ViewportProvider>
      <ThemeProvider value={theme}>
        <div className="App">
          <Navbar
            fresh={location.pathname}
            onLogin={handleLogin}
            onLogout={handleLogout}
            onSwitchTheme={handleSwitchTheme}
          />
          <Routes />
        </div>
      </ThemeProvider>
    </ViewportProvider>
  );
}

export default App;
