import Article from './Artilce';
import React from 'react';
import { useViewport, breakpoint } from '../../../Utils/viewportContext';

const A: React.FC = () => {
  const { width } = useViewport();
  const type = width < breakpoint ? 1 : 2;
  return <Article type={type} />
}

export default A;