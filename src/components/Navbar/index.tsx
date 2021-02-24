import { useViewport, breakpoint } from '@/hooks/viewportCtx';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

export interface NavbarProps {
  menus?: string[]
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { width } = useViewport();
  const type = width < breakpoint ? 1 : 2;

  const { menus } = props;

  if (type === 1) {
    return <MobileNavbar menus={menus!} />
  } else {
    return <DesktopNavbar menus={menus!} />
  }
}

export default Navbar;