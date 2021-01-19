import React from 'react';
import { useViewport, breakpoint } from '../../Utils/viewportContext';
import DesktopGallery from './Desktop';

const Gallery: React.FC = () => {
  const { width } = useViewport();

  let columns: number = 4;
  let gutter: number = 10;
  let type: 'desktop' | 'mobile' = 'desktop';

  if (width < breakpoint) {
    columns = 2;
    gutter= 5;
    type = 'mobile';
  }

  return(
    <DesktopGallery columns={columns} gutter={gutter} type={type}/>
  )
}

export default Gallery;