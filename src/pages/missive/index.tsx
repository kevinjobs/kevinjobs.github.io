import React from 'react';
import { Table, Modal } from '@/components';

export const MissivePage: React.FC = props => {
  const [current, setCurrent] = React.useState();
  const [visible, setVisible] = React.useState(false);

  const head = [
    {title: '编号', width: 50 },
    {title: '内容', width: 300 },
    {title: '标签', width: 200 },
    {title: '作者', width: 100 },
    {title: '来源', width: 100 },
    {title:　'创建时间', width: 200 }
  ];

  const handleSelect = (e: any) => {
    setCurrent(e.target.dataset['content']);
    setVisible(!visible);
  }

  const items = [
    [1,
    <div className="table-cell" onClick={handleSelect} data-content={'这是一条测试内容'}>这是一条测试内容</div>,
    '测试', '测试员', '测试系统', '2021-04-12']
  ]

  return (
    <div className="missive-page">
      <div className="missive-container">
        <div className="left">
          <div className="header"></div>
          <div className="items">
            <div className="item">News</div>
            <div className="item">好文</div>
            <div className="item">好词</div>
            <div className="item">好构</div>
          </div>
        </div>
        <div className="right">
          <div className="header">查看</div>
          <div className="container">
            <div className="content">
              <Table head={head} items={items} />
            </div>
          </div>
        </div>
      </div>
      <Modal title="test" content={current} visible={visible} />
    </div>
  )
}