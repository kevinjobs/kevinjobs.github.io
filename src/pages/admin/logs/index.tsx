import React from 'react';
import dayjs from 'dayjs';
import { LogApi } from '@/apis';
import { Table } from '@/components';

export interface AdminLogPageProps {};

const AdminLogPage: React.FC<AdminLogPageProps> = props => {
  const [logs, setLogs] = React.useState<any[]>();

  const today = dayjs().format('YYYY-MM-DD');

  React.useEffect(() => {
    LogApi.getList(today).then(res => setLogs(res.data.data));
  }, [])

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