import React from 'react';
import { useLocation } from 'react-router-dom';

export interface WikiPageProps {};

const WikiPostPage: React.FC<WikiPageProps> = props => {
  const location = useLocation();

  React.useEffect(() => {
    console.log(location.pathname);
  }, [])

  return (
    <div className="wiki-page">
    </div>
  )
}

export default WikiPostPage;