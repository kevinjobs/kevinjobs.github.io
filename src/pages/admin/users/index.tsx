import React from 'react';
import { UserApi, IUser } from '@/apis';
import { Button, Table } from '@/components';

export interface AdminUserPageProps {}

const AdminUserPage: React.FC<AdminUserPageProps> = props => {
  const [newUser, setNewUser] = React.useState<IUser>();
  const [table, setTable] = React.useState<any[]>();

  const tableHead = [
    { title: '序号', width: 50, height: 80 },
    { title: '用户名', width: 100, height: 80 },
    { title: '昵称', width: 100, height: 80 },
    { title: '头像', width: 80, height: 80 },
    { title: '个人主页', width: 250, height: 80 },
    { title: '生日', width: 80, height: 80 },
    { title: '性别', width: 80, height: 80 },
    { title: '地址', width: 200, height: 80 },
    { title: '个人宣言', width: 150, height: 80 },
    { title: '描述', width: 130, height: 80 },
    { title: '用户等级', width: 100, height: 80 },
    { title: '操作', width: 150, height: 80 }
  ]

  React.useEffect(() => getPathList(), [])

  const getPathList = () => {
    UserApi.getList().then((res: any) => {
      // console.log(res);
      if (res.data.code === 1) {
        const users = res.data.data;
        renderRow(users);
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
    if (window.confirm('确认要删除该用户？')) {
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

  const renderRow = (users: IUser[]) => {
    const tableData = [];
    for (let i = 0; i < users.length; i ++) {
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
      } = users[i];
      const operator = (
        <>
          <Button onClick={e => handleEdit(e, users[i])}>编辑</Button>
          <Button type="danger" onClick={handleDelete} data-id={_id}>删除</Button>
        </>
      )
      tableData.push([i+1, username, nickname, avatar, homepage, birthday,
        gender, location, motto, desc, role, operator
      ]);
    };
    setTable(tableData);
  }

  return (
    <div className="admin-users-page admin-page">
      <div className="header">
        <h3>用户列表</h3>
        <Button onClick={handleAdd}>新增用户</Button>
      </div>
      <div className="container">
      </div>
    </div>
  )
}

export default AdminUserPage;