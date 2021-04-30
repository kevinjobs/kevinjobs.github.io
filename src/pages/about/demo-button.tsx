import * as React from 'react';
import { Button } from '@/components';

const DemoButton: React.FC = () => {
  return (
    <div className="component-button">
      <Button type="default">default</Button>
      <Button type="primary">primary</Button>
      <Button type="success">success</Button>
      <Button type="warning">warning</Button>
      <Button type="danger">danger</Button>
      <Button type="dark">dark</Button>
      <Button type="light">light</Button>
    </div>
  )
};

export default DemoButton;