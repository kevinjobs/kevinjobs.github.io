import React from 'react';
import { useViewport, breakpoint } from '../../Utils/viewportContext';
import DesktopGallery from './Desktop';
import MobileGallery from './Mobile';

const Gallery: React.FC = () => {
  const { width } = useViewport();
  return(
    width < breakpoint
    ? <MobileGallery />
    : <DesktopGallery />
  )
}

export default Gallery;