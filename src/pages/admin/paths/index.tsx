import React from 'react';
import { PathApi, IPath } from '@/apis';
import { Button } from '@/components';
import AdminPathEditor from './path-editor';

export interface AdminPathsPageProps {}

const AdminPathsPage: React.FC<AdminPathsPageProps> = props => {
  const [paths, setPaths] = React.useState<IPath[]>();
  const [newPath, setNewPath] = React.useState<IPath>();

  React.useEffect(() => getPathList(), [])

  const getPathList = () => {
    PathApi.getList().then((res: any) => {
      // console.log(res);
      if (res.status === 200) {
        if (res.data.code === 1) {
          setPaths(res.data.data);
        }
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
    return <span key={index} className={`tag ${tagTheme}-light`}>{item}</span>
  }

  const renderRow = (path: IPath, index: number) => {
    const { pathname, allowMethods, allowRoles, authRequiredMethods, _id } = path;

    return (
      <tr key={index}>
        <td>{ index + 1 }</td>
        <td>{ "/" + pathname }</td>
        <td>{ allowMethods?.map(renderSpan) }</td>
        <td>{ authRequiredMethods?.map(renderSpan) }</td>
        <td>{ allowRoles?.map(renderSpan) }</td>
        <td>
          <Button onClick={e => handleEdit(e, path)}>编辑</Button>
          <Button type="danger" onClick={handleDelete} data-id={_id}>删除</Button>
        </td>
      </tr>
    )
  }

  return (
    <div className="admin-paths-page">
      <div className="header">
        <h3>Api 路径编辑页面</h3>
        <Button onClick={handleAdd}>新增路径</Button>
      </div>
      <div className="container">
        <table>
          <tbody>
            <tr>
              <th>序号</th>
              <th>路径名</th>
              <th>允许的方法</th>
              <th>需要认证的方法</th>
              <th>允许的用户等级</th>
              <th>操作</th>
            </tr>
            { paths?.map(renderRow) }
          </tbody>
        </table>
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