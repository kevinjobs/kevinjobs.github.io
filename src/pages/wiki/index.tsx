import React from 'react';

export interface WikiPageProps {};

const WikiPage: React.FC<WikiPageProps> = props => {
  return (
    <div className="wiki-page">
      <div className="header"></div>
      <div className="container">
        <div className="left-panel">
          <div className="header">
            <h3>页面导航</h3>
          </div>
        </div>
        <div className="content"></div>
      </div>
    </div>
  )
}

export default WikiPage;