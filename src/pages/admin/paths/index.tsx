import React from 'react';
import { PathApi, IPath } from '@/apis';
import { Button, Table } from '@/components';
import AdminPathEditor from './path-editor';

export interface AdminPathsPageProps {}

const AdminPathsPage: React.FC<AdminPathsPageProps> = props => {
  const [newPath, setNewPath] = React.useState<IPath>();
  const [table, setTable] = React.useState<any[]>();

  const tableHead = [
    { title: '序号', width: 50 },
    { title: '路径名', width: 120 },
    { title: '允许的方法', width: 300 },
    { title: '需要认证的方法', width: 300 },
    { title: '允许的用户等级', width: 300 },
    { title: '操作', width: 200 }
  ]

  React.useEffect(() => {
    getPathList();
  }, [])

  const getPathList = () => {
    PathApi.getList().then((res: any) => {
      // console.log(res);
      if (res.status === 200) {
        if (res.data.code === 1) {
          const paths = res.data.data;
          renderRow(paths);
        }
      }
    }).catch(err => {
      if (err.response.status === 401) {
        window.alert(err.response.data.msg);
      }
    })
  }

  const handleAdd = (e: any) => {
    setNewPath({
      pathname: '',
      allowMethods: ['get'],
      authRequiredMethods: [],
      allowRoles: ['super', 'admin', 'vip', 'common']
    });
  }

  const handleEdit = (e: any, path: IPath) => {
    // console.log(path);
    setNewPath(path);
  }

  const handleDelete = (e: any) => {
    const id = e.target.dataset.id;
    // console.log(e.target.dataset);
    if (window.confirm('确认要删除该路径？')) {
      PathApi.deleteById(id).then(res => {
        if (res.status === 200) {
          if (res.data.code === 1) {
            console.log('删除成功');
            getPathList();
          } else {
            window.alert('删除失败');
          }
        }
      })
    }
  }

  const renderSpan = (item: string, index: number) => {
    let tagTheme;
    switch (item) {
      case 'get':
        tagTheme = 'tag-green';
        break;
      case 'post':
        tagTheme = 'tag-yellow';
        break;
      case 'put':
        tagTheme = 'tag-blue';
        break;
      case 'delete':
        tagTheme = 'tag-red';
        break;
      default:
        tagTheme = 'tag-default';
    }

    console.log(item);

    return (
      <span key={index} className={`tag ${tagTheme}-light`}>
        { item }
      </span>
    )
  }

  const renderRow = (paths: any[]) => {
    const tableDataTmp = [];

    if (paths) {
      for (let i = 0; i < paths.length; i ++) {
        const { pathname, allowMethods, allowRoles, authRequiredMethods, _id } = paths[i];

        const operator = (
          <>
            <Button onClick={e => handleEdit(e, paths[i])} size="small">编辑</Button>
            <Button type="danger" onClick={handleDelete} data-id={_id} size="small" style={{
              marginLeft: 8
            }}>删除</Button>
          </>
        )

        const td = [
          i + 1,
          "/" + pathname,
          allowMethods.map(renderSpan),
          authRequiredMethods.map(renderSpan),
          allowRoles.map(renderSpan),
          operator
        ];
        tableDataTmp.push(td)
      }
    }
    
    setTable(tableDataTmp);
  }

  return (
    <div className="admin-paths-page admin-page">
      <div className="header">
        <h3>Api 路径编辑页面</h3>
        <Button onClick={handleAdd}>新增路径</Button>
      </div>
      <div className="container">
        { table && <Table head={tableHead} items={table} /> }
      </div>
      {
        newPath &&
          <AdminPathEditor
            path={newPath}
            onSubmit={(e: any) => {
              setNewPath(undefined);
              getPathList();
            }}
            onCancel={(e: any) => setNewPath(undefined)}
          />
      }
    </div>
  )
}

export default AdminPathsPage;