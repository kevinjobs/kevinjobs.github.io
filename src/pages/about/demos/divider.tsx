import * as React from 'react';
import { Divider } from '@/components';

export const Demo: React.FC<any> = (props) => {
  return (
    <div className="demo">
      <div className="container">
        <div className="header">Divider 分割线</div>
        <div className="desc">简单的分割线，可以在中间添加文字及其他组件</div>
        <div className="content">
          <div className="comps" style={{width:'100%'}}>
            <Divider />
          </div>
          <div className="detail">不带文字的分割线</div>
        </div>
        <div className="content">
          <div className="comps" style={{width:'100%'}}>
            <Divider>分割线</Divider>
          </div>
          <div className="detail">带文字的分割线</div>
        </div>
      </div>
    </div>
  );
};

export default Demo;