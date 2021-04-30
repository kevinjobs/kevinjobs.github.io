import * as React from 'react';
import { Dropdown } from '@/components';

export const Demo: React.FC<any> = (props) => {
  return (
    <div className="demo">
      <div className="container">
        <div className="header">Dropdown</div>
        <div className="desc">下拉菜单</div>
        <div className="content">
          <div className="comps">
            <Dropdown title="hover">
              <div className="item1">item1</div>
              <div className="item1">item2</div>
              <div className="item1">item3</div>
              <div className="item1">item4</div>
              <div className="item1">item5</div>
            </Dropdown>
          </div>
          <div className="detail">
            鼠标悬浮显示更多
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;