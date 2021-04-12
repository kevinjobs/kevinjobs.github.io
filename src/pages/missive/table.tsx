import React from 'react';

export interface TableProps {
  data: {
    head: string[],
    items: any[][]
  }
};

export const Table: React.FC<TableProps> = props => {
  const { data } = props;

  const renderHead = (item: string, index: number) => (
    <th key={index}>{ item }</th>
  )

  const renderDataTd = (item: string, index: number) => (
    <td key={index}>{ item }</td>
  )

  const renderDataTr = (item: string[], index: number) => (
    <tr key={index}>{ item.map(renderDataTd) }</tr>
  )

  return (
    <table className="mint-table">
      <tbody>
        <tr>{ data.head.map(renderHead) }</tr>
        { data.items.map(renderDataTr) }
      </tbody>
    </table>
  )
}