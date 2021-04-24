import * as React from 'react';

export interface TableProps {
  data: any[]
};

export const Table: React.FC<TableProps> = props => {
  const [heads, setHeads] = React.useState<string[]>();
  const [headWidths, setHeadWidths] = React.useState<number[]>([]);
  const ref: any = React.useRef();

  const { data } = props;

  React.useEffect(() => {
    // 对传入的数据的第一项，取出其 keys 作为列表头
    // 约定其他项的 keys 与第一项是一样的
    if (data[0]) {
      setHeads(Object.keys(data[0]));
    }
  }, [data])

  React.useEffect(() => {
    if (ref.current) {
      const thChildren = Array.from(ref.current.children).slice(1);
      const widths = thChildren.map((child: any) => child.clientWidth);
      if (widths.length) {
        console.log(widths);
        setHeadWidths(widths);
      }
    }
  }, [heads])

  const renderDataTr = (item: any, index: number) => {
    return (
      <tr key={index} ref={ref}>
        <td><span style={{width: 50}}>{ index + 1 }</span></td>
        {
          Object.entries(item).map((t: any, index: number) => {
            return (
              <td key={index}>
                <span style={{width:headWidths[index]}} id={t[0]}>{t[1]}</span>
              </td>
            )
          })
        }
      </tr>
    )
  }

  return (
    <div className="mint-table">
      <table className="mint-table-head">
        <thead>
          <tr>
            <th><span style={{width: 50}}>序号</span></th>
            {heads?.map((item,index) => (
              <th key={index}>
                <span id={item} style={{width: headWidths[index]}}>{item}</span>
              </th>
            ))}
          </tr>
        </thead>
      </table>
      <table className="mint-table-body">
        <tbody>
          { data.map(renderDataTr) }
        </tbody>
      </table>
    </div>
  )
}