import React from 'react';
import styled from 'styled-components';

export interface DemoProps {
  title: string,
  desc: string
}

const DemoPage: React.FC<DemoProps> = (props) => {
  const { title, desc, children } = props;

  const Demo = styled.div`
    .header {
      font-size: 20px;
      font-weight: bold;
      margin: 16px 0;
    }
    .desc {
      margin: 16px 0;
    }
    .content {
      margin: 16px 0;
    }
  `;

  return (
    <Demo className="demo-shower">
      <div className="header">{title}</div>
      <div className="desc">{desc}</div>
      <div className="content">
        {children}
      </div>
    </Demo>
  )
}

export default DemoPage;