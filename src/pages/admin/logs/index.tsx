import React from 'react';
import dayjs from 'dayjs';
import { LogApi } from '@/apis';
import { Table } from '@/components';

export interface AdminLogPageProps {};

const AdminLogPage: React.FC<AdminLogPageProps> = props => {
  const today = dayjs().format('YYYY-MM-DD');
  const head = [
    { title: 'id', width: 50 },
    { title: '访问日期', width: 200 },
    { title: 'ip', width: 150 },
    { title: 'method', width: 100 },
    { title: '访问地址', width: 500 },
    { title: 'status', width: 100 },
    { title: 'message', width: 150 },
    { title: 'length', width: 100 },
    { title: '用时', width: 100 }
  ]

  const [data, setData] = React.useState<any[]>();

  React.useEffect(() => {
    LogApi.getList(today).then(res => {
      if (res.status === 200) {
        if (res.data.code === 1) {
          const logs = res.data.data;
          const items = [];
          
          for (let i = 0; i < logs.length; i ++) {
            const ipLink = (
              <a
                target='blank'
                href={`https://ip.tool.chinaz.com/${logs[i]['ip']}`}>
              {logs[i]['ip']}</a>
            )

            items.push([
              logs.length - i,
              dayjs(logs[i]['create_at'])
                .format('YYYY-MM-DD HH:mm:ss'),
              ipLink,
              logs[i]['method'],
              logs[i]['url'],
              logs[i]['status'],
              logs[i]['message'],
              logs[i]['length'],
              logs[i]['spent']
            ]);
          };
          setData(items);
        }
      }
    }).catch(err => {
      window.alert(err);
    });
  }, [])


  return (
    <div className="admin-log-page admin-page">
      <div className="header">
        <h3>日志查看</h3>
      </div>
      <div className="container">
        <div className="viewer">
          { data && <Table head={head} items={data} /> }
        </div>
      </div>
    </div>
  )
}

export default AdminLogPage;