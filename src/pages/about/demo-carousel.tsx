import * as React from 'react';

export const Demo: React.FC<any> = (props) => {
  return (
    <div className="demo">
      <div className="container">
        <div className="header">Carousel 走马灯</div>
        <div className="desc">走马灯组件，用于切换图片展示</div>
        <div className="content"></div>
      </div>
    </div>
  );
};

export default Demo;