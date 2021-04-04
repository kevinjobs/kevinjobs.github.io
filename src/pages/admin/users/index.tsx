import React from 'react';
import { UserApi, IUser } from '@/apis';
import { Button } from '@/components';

export interface AdminUserPageProps {}

const AdminUserPage: React.FC<AdminUserPageProps> = props => {
  const [user, setUsers] = React.useState<IUser[]>();
  const [newUser, setNewUser] = React.useState<IUser>();

  React.useEffect(() => getPathList(), [])

  const getPathList = () => {
    UserApi.getList().then((res: any) => {
      // console.log(res);
      if (res.status === 200) {
        if (res.data.code === 1) {
          setUsers(res.data.data);
        }
      }
    }).catch(err => {
      if (err.response.status === 401) {
        window.alert(err.response.data.msg);
      }
    })
  }

  const handleAdd = (e: any) => {
    window.alert('暂未开放')
  }

  const handleEdit = (e: any, user: IUser) => {
    window.alert('暂未开放')
  }

  const handleDelete = (e: any) => {
    const id = e.target.dataset.id;
    // console.log(e.target.dataset);
    if (window.confirm('确认要删除该路径？')) {
      UserApi.deleteById(id).then(res => {
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

  const renderRow = (user: IUser, index: number) => {
    const {
      _id,
      username,
      nickname,
      avatar,
      homepage,
      birthday,
      gender,
      location,
      motto,
      desc,
      role
    } = user;

    return (
      <tr key={index}>
        <td>{ index + 1 }</td>
        <td>{ username }</td>
        <td>{ nickname }</td>
        <td>{ avatar }</td>
        <td>{ homepage }</td>
        <td>{ birthday }</td>
        <td>{ gender }</td>
        <td>{ location }</td>
        <td>{ motto }</td>
        <td>{ desc }</td>
        <td>{ role }</td>
        <td>
          <Button onClick={e => handleEdit(e, user)}>编辑</Button>
          <Button type="danger" onClick={handleDelete} data-id={_id}>删除</Button>
        </td>
      </tr>
    )
  }

  return (
    <div className="admin-users-page admin-page">
      <div className="header">
        <h3>用户列表</h3>
        <Button onClick={handleAdd}>新增用户</Button>
      </div>
      <div className="container">
        <table>
          <tbody>
            <tr>
              <th>序号</th>
              <th>用户名</th>
              <th>昵称</th>
              <th>头像</th>
              <th>个人主页</th>
              <th>生日</th>
              <th>性别</th>
              <th>地址</th>
              <th>个人宣言</th>
              <th>描述</th>
              <th>用户等级</th>
              <th>操作</th>
            </tr>
            { user?.map(renderRow) }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminUserPage;