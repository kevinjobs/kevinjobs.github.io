import React from 'react';
import { useViewport, breakpoint } from '../../Utils/viewportContext';
import Gallery from './Gallery';

const G: React.FC = () => {
  const { width } = useViewport();

  const columns = width < breakpoint ? 2 : 4;
  const gutter = width < breakpoint ? 5 : 10;
  const type = width < breakpoint ? 1 : 2;

  return(
    <Gallery columns={columns} gutter={gutter} type={type}/>
  )
}

export default G;