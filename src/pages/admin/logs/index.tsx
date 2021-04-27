import React from 'react';
import dayjs from 'dayjs';
import { LogApi } from '@/apis';
import { message, Table } from '@/components';

export interface AdminLogPageProps {};

const AdminLogPage: React.FC<AdminLogPageProps> = props => {
  const [logs, setLogs] = React.useState<any[]>();

  const today = dayjs().format('YYYY-MM-DD');

  React.useEffect(() => {
    LogApi.getList(today).then(res => {
      if (res.data.code === 1) {
        setLogs(renderLogsTableData(res.data.data));
      }
    }).catch((err: any) => {
      message({type: 'danger', text: err.response.data.msg });
    });
  }, [])

  const renderLogsTableData = (logs: any[]) => {
    const newLogs = logs.map((log: any) => {
      let newLog = log;
      delete newLog['_id'];
      newLog['create_at'] = dayjs(log['create_at']).format('YYYY-MM-DD HH:mm:ss');
      newLog['ip'] = (
        <a
          href={`https://ip.tool.chinaz.com/${log['ip']}`}
          target="_blank"
          >{log['ip']}</a>
      )
      return newLog;
    });
    return newLogs;
  }

  return (
    <div className="admin-log-page admin-page">
      <div className="header">
        <h3>日志查看</h3>
      </div>
      <div className="container">
        <div className="viewer">
          { logs && <Table data={logs} /> }
        </div>
      </div>
    </div>
  )
}

export default AdminLogPage;