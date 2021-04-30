import * as React from 'react';
import { Button } from '@/components';

const DemoButton: React.FC = () => {
  return (
    <div className="demo-button demo">
      <div className="container">
        <div className="header">Button</div>
        <div className="desc">按钮组件，包含多种主题颜色</div>
        <div className="content">
          <div className="comps">
            <Button type="default">default</Button>
            <Button type="primary">primary</Button>
            <Button type="success">success</Button>
            <Button type="warning">warning</Button>
            <Button type="danger">danger</Button>
            <Button type="dark">dark</Button>
            <Button type="light">light</Button>
          </div>
          <div className="detail">
            所有按钮展示
          </div>
        </div>
      </div>
    </div>
  )
};

export default DemoButton;