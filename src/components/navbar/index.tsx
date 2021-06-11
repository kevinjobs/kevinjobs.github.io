import { useViewport, breakpoint } from '@/hooks/viewportCtx';
import DesktopNavbar from './desktop';
import MobileNavbar from './mobile';

export interface NavbarProps {
  menus?: string[],
  onLogin?: React.MouseEventHandler<HTMLElement>,
  onLogout?: React.MouseEventHandler<HTMLElement>,
  fresh?: any,
  isLogin?: boolean,
  onSwitchTheme?: any,
  theme?: string
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { width } = useViewport();
  const type = width < breakpoint ? 1 : 2;

  if (type === 1) {
    return <MobileNavbar {...props} />
  } else {
    return <DesktopNavbar {...props} />
  }
}

Navbar.defaultProps = {
  menus: ['home', 'gallery', 'schedule']
}

export default Navbar;