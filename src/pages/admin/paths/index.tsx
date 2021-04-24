import * as React from 'react';
import dayjs from 'dayjs';
import { PathApi, IPath } from '@/apis';
import { Button, Table, Tag } from '@/components';
import AdminPathEditor from './path-editor';

export interface AdminPathsPageProps {}

const AdminPathsPage: React.FC<AdminPathsPageProps> = props => {
  const [newPath, setNewPath] = React.useState<IPath>();
  const [paths, setPaths] = React.useState<any[]>();

  React.useEffect(() => {
    getPathList();
  }, [])

  const getPathList = () => {
    PathApi.getList().then((res: any) => {
      // console.log(res);
      if (res.data.code === 1) {
        const paths = res.data.data;
        setPaths(renderPathsTableData(paths));
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

  const handleEdit = (e: React.MouseEvent<any>) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    if (target.dataset['path']) {
      const pathObj = JSON.parse(target.dataset['path']);
      setNewPath(pathObj);
    }
  }

  const handleDelete = (e: React.MouseEvent<any>) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    const id = target.dataset['id'];
    if (window.confirm('确认要删除该路径？') && id) {
      PathApi.deleteById(id).then(res => {
        if (res.data.code === 1) {
          console.log('删除成功');
          getPathList();
        } else {
          window.alert('删除失败');
        }
      })
    };
    
  }

  const renderPathsTableData = (paths: IPath[]) => {
    const newPaths = paths.map((path: any) => {
      let newPath = path;

      const dataPath = JSON.stringify(path);

      newPath['allowMethods'] = renderTag(path['allowMethods']);
      newPath['authRequiredMethods'] = renderTag(path['authRequiredMethods']);
      newPath['allowRoles'] = path['allowRoles'].map((role: any) => <Tag>{ role }</Tag>);
      newPath['pathname'] = path['pathname'];
      newPath['create_at'] = dayjs(path['create_at']).format('YYYY-MM-DD HH:mm:ss');
      newPath['update_at'] = dayjs(path['update_at']).format('YYYY-MM-DD HH:mm:ss');
      newPath['操作'] = (
        <>
          <Button type="danger" data-id={path['_id']} onClick={handleDelete}>删除</Button>
          <Button type="primary" data-path={dataPath} onClick={handleEdit}>编辑</Button>
        </>
      )
      delete newPath['_id'];
      
      return newPath;
    });

    return newPaths;
  }

  const renderTag = (items: any[]) => {
    return items.map((method: string) => {
      let theme: string;
      switch(method) {
        case 'get':
          theme = 'green';
          break;
        case 'post':
          theme = 'yellow';
          break;
        case 'put':
          theme = 'blue';
          break;
        case 'delete':
          theme = 'red';
          break;
        default:
          theme = 'default';
      };
      return <Tag theme={theme} type="outline">{ method }</Tag>;
    });
  }

  return (
    <div className="admin-paths-page admin-page">
      <div className="header">
        <h3>Api 路径编辑页面</h3>
        <Button onClick={handleAdd}>新增路径</Button>
      </div>
      <div className="container">
        { paths && <Table data={paths} />}
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