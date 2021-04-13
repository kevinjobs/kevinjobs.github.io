import React from 'react';
import { Table } from '@/components';

export const MissivePage: React.FC = props => {
  const head = [
    '编号',
    '内容',
    '标签',
    '作者',
    '来源',
    '创建时间'
  ];

  const items = [
    [1, '这是一条测试内容', '测试', '测试员', '测试系统', '2021-04-12']
  ]

  return (
    <div className="missive-page">
      <div className="missive-container">
        <div className="left"></div>
        <div className="right">
          <div className="header"></div>
          <div className="content">
          </div>
        </div>
      </div>
    </div>
  )
}