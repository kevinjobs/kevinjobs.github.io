import React from 'react';

export interface TableProps {
  head: {
    title: string,
    width: number,
    height?: number
  }[],
  items: any[][]
};

export const Table: React.FC<TableProps> = props => {
  const { head, items } = props;

  const renderHead = (item: any, index: number) => (
    <th key={index} style={{width: item.width}}>{ item.title }</th>
  )

  const renderDataTd = (item: string, index: number) => (
    <td key={index} style={{width:head[index]['width'],height:head[index]['height']||50}}>
      { item }
    </td>
  )

  const renderDataTr = (item: string[], index: number) => (
    <tr key={index}>{ item.map(renderDataTd) }</tr>
  )

  return (
    <div className="mint-table">
      <table className="mint-table-head">
        <thead>
          <tr>{ head.map(renderHead) }</tr>
        </thead>
      </table>
      <table className="mint-table-body">
        <tbody>
          { items.map(renderDataTr) }
        </tbody>
      </table>
    </div>
  )
}