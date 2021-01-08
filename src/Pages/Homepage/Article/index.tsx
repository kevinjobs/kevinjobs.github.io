import DesktopArticle from './Desktop';
import MobileArticle from './Mobile';
import React from 'react';
import { useViewport, breakpoint } from '../../../Utils/viewportContext';

const Article: React.FC = () => {
  const { width } = useViewport();
  // console.log(width);
  return width < breakpoint ? <MobileArticle /> : <DesktopArticle />;
}

export default Article;