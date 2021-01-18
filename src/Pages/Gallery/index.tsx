import React from 'react';
import { useViewport, breakpoint } from '../../Utils/viewportContext';
import DesktopGallery from './Desktop';

const Gallery: React.FC = () => {
  const { width } = useViewport();

  let columns: number = 4;
  let gutter: number = 10;

  if (width < breakpoint) {
    columns = 2;
    gutter= 5;
  }

  return(
    <DesktopGallery columns={columns} gutter={gutter} />
  )
}

export default Gallery;