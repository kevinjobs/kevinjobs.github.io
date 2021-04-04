import React from 'react';
import { LogApi } from '@/apis';

export interface AdminLogPageProps {};

const AdminLogPage: React.FC<AdminLogPageProps> = props => {
  const [logs, setLogs] = React.useState<string[]>();
  const [log, setLog] = React.useState();

  React.useEffect(() => {
    LogApi.getList().then(res => {
      if (res.status === 200) {
        if (res.data.code === 1) {
          setLogs(res.data.data);
          setLog(res.data.data[0]);
        }
      }
    }).catch(err => {
      if (err.response.status === 401) {
        window.alert(err.response.data.msg);
      }
    })
  }, [])

  const handleClick = (e: any, filename: string) => {
    setLog(undefined);

    LogApi.getByFileName(filename).then(res => {
      if (res.status === 200) {
        if (res.data.code === 1) {
          setLog(res.data.data);
        }
      }
    }).catch(err => {
      if (err.response.status === 401) {
        window.alert(err.response.data.msg);
      }
    })
  }

  const renderItem = (item: string, index: number) => {
    return (
      <tr key={index} onClick={e => handleClick(e, item)}>
        <td>{ index + 1 }</td>
        <td>{ item }</td>
      </tr>
    )
  }

  return (
    <div className="admin-log-page admin-page">
      <div className="header">
        <h3>日志查看</h3>
      </div>
      <div className="container">
        <table>
          <tbody>
            <tr>
              <th>序号</th>
              <th>文件名</th>
            </tr>
            { logs?.map(renderItem) }
          </tbody>
        </table>
        <div className="log-viewer">
          <div>{ log ? log : <div className="mint-loader"></div> }</div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogPage;