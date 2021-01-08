import React from 'react';
import { useViewport, breakpoint } from '../../Utils/viewportContext';
import DesktopNavbar from './Desktop';
import MobileNavbar from './Moblie';

interface Props {
  menus: string[]
}

const Navbar: React.FC<Props> = (props) => {
  const { width } = useViewport();
  // console.log(width);
  return(
    width < breakpoint ? <MobileNavbar menus={props.menus} /> : <DesktopNavbar menus={props.menus} />
  )
}

export default Navbar;