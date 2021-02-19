import { useViewport, breakpoint } from '@/hooks/viewportCtx';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

export default function () {
  const { width } = useViewport();
  const type = width < breakpoint ? 1 : 2;

  if (type === 1) {
    return <MobileNavbar />
  } else {
    return <DesktopNavbar />
  }
}