import * as React from 'react';
import { Editor } from '@/components';

export const Demo: React.FC<any> = (props) => {
  const text: string = "# 一级标题"

  const handleChange = (rawText: string | undefined, htmlText: string | undefined) => {
    console.log(htmlText);
  }

  return (
    <div className="demo">
      <div className="container">
        <div className="header">Edidtor</div>
        <div className="desc">简单的 markdown 编辑器</div>
        <div className="content">
          <div className="comps" style={{width:'100%'}}>
            <Editor value={text} onChange={handleChange} style={{width:'100%'}}/>
          </div>
          <div className="detail">
            最简单的编辑器样式
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;