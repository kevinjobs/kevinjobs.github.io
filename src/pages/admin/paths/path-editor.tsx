import React from 'react';
import { IPath, PathApi } from '@/apis';
import { Button } from '@/components';

export interface AdminPathEditorProps {
  path: IPath;
  onSubmit?: any,
  onCancel?: any
};

const AdminPathEditor: React.FC<AdminPathEditorProps> = props => {
  const { onSubmit, onCancel } = props;

  const {
    _id,
    pathname,
    allowMethods = [],
    authRequiredMethods = [],
    allowRoles = []
  } = props.path;

  const [newPathName, setNewPathName] = React.useState(pathname);
  const [allowMethod1, setAllowMethod1] = React.useState(allowMethods.find((item) => item === 'get'));
  const [allowMethod2, setAllowMethod2] = React.useState(allowMethods.find((item) => item === 'post'));
  const [allowMethod3, setAllowMethod3] = React.useState(allowMethods.find((item) => item === 'put'));
  const [allowMethod4, setAllowMethod4] = React.useState(allowMethods.find((item) => item === 'delete'));
  const [authMethod1, setAuthMethod1] = React.useState(authRequiredMethods.find((item) => item === 'get'));
  const [authMethod2, setAuthMethod2] = React.useState(authRequiredMethods.find((item) => item === 'post'));
  const [authMethod3, setAuthMethod3] = React.useState(authRequiredMethods.find((item) => item === 'put'));
  const [authMethod4, setAuthMethod4] = React.useState(authRequiredMethods.find((item) => item === 'delete'));
  const [allowRole1, setAllowRole1] = React.useState(allowRoles.find((item) => item === 'super'));
  const [allowRole2, setAllowRole2] = React.useState(allowRoles.find((item) => item === 'admin'));
  const [allowRole3, setAllowRole3] = React.useState(allowRoles.find((item) => item === 'vip'));
  const [allowRole4, setAllowRole4] = React.useState(allowRoles.find((item) => item === 'common'));

  const handleSumbit = (e: any) => {
    const form: IPath = {
      pathname: '',
      allowMethods: [],
      authRequiredMethods: [],
      allowRoles: []
    };
    form.pathname =  newPathName;
    allowMethod1 && form.allowMethods?.push(allowMethod1);
    allowMethod2 && form.allowMethods?.push(allowMethod2);
    allowMethod3 && form.allowMethods?.push(allowMethod3);
    allowMethod4 && form.allowMethods?.push(allowMethod4);
    authMethod1 && form.authRequiredMethods?.push(authMethod1);
    authMethod2 && form.authRequiredMethods?.push(authMethod2);
    authMethod3 && form.authRequiredMethods?.push(authMethod3);
    authMethod4 && form.authRequiredMethods?.push(authMethod4);
    allowRole1 && form.allowRoles?.push(allowRole1);
    allowRole2 && form.allowRoles?.push(allowRole2);
    allowRole3 && form.allowRoles?.push(allowRole3);
    allowRole4 && form.allowRoles?.push(allowRole4);
    // console.log(form);
    if (window.confirm('确定要提交吗？')) {
      if (_id) {
        PathApi.putById(_id, form).then(res => {
          if (res.status === 200) {
            if (res.data.code === 1) {
              console.log('更新路径成功');
              onSubmit(e);
            } else {
              window.alert(res.data.msg);
            }
          }
        })
      } else {
        PathApi.postNewPath(form).then(res => {
          if (res.status === 200) {
            if (res.data.code === 1) {
              console.log('添加路径成功');
              onSubmit(e);
            } else {
              window.alert(res.data.msg);
            }
          }
        })
      }
    }
  }

  const handleNewPathNameChange = (e: any) => {
    // console.log(e.target.value);
    setNewPathName(e.target.value);
  }

  const handleMethodChange = (e: any, setter: any) => {
    const isChecked = e.target.checked;
    // console.log(e);
    if (isChecked) {
      // console.log(e.target.value);
      setter(e.target.value);
    } else {
      setter(undefined);
    }
  }

  return (
    <div className="admin-path-editor">
      <div className="container">
        <div className="title"><h4>路径编辑器</h4></div>
        <div className="editor">
          <div className="pathname item">
            <div className="label">路径名</div>
            <input
              name="pathname"
              placeholder="请输入路径名"
              value={newPathName}
              onChange={handleNewPathNameChange}
            />
          </div>
          <div className="allow-methods item">
            <div className="label">允许的方法</div>
            <label>
              <input
                name="allow-method-get"
                value="get"
                type="checkbox"
                checked={allowMethod1 ? true : false}
                onChange={(e: any) => handleMethodChange(e, setAllowMethod1)}
              />
              GET
            </label>
            <label>
              <input
                name="allow-method-post"
                value="post"
                type="checkbox"
                checked={allowMethod2 ? true : false}
                onChange={(e: any) => handleMethodChange(e, setAllowMethod2)}
              />
              POST
            </label>
            <label>
              <input
                name="allow-method-put"
                value="put"
                type="checkbox"
                checked={allowMethod3 ? true : false}
                onChange={(e: any) => handleMethodChange(e, setAllowMethod3)}
              />
              PUT
            </label>
            <label>
              <input
                name="allow-method-delete"
                value="delete"
                type="checkbox"
                checked={allowMethod4 ? true : false}
                onChange={(e: any) => handleMethodChange(e, setAllowMethod4)}
              />
              DELETE
            </label>
          </div>
          <div className="auth-required-methods item">
            <div className="label">需要认证的方法</div>
            <label>
              <input
                name="auth-method-get"
                value="get"
                type="checkbox"
                checked={authMethod1 ? true : false}
                onChange={(e: any) => handleMethodChange(e, setAuthMethod1)}
              />
              GET
            </label>
            <label>
              <input
                name="auth-method-post"
                value="post"
                type="checkbox"
                checked={authMethod2 ? true : false}
                onChange={(e: any) => handleMethodChange(e, setAuthMethod2)}
              />
              POST
            </label>
            <label>
              <input
                name="auth-method-put"
                value="put"
                type="checkbox"
                checked={authMethod3 ? true : false}
                onChange={(e: any) => handleMethodChange(e, setAuthMethod3)}
              />
              PUT
            </label>
            <label>
              <input
                name="auth-method-delete"
                value="delete"
                type="checkbox"
                checked={authMethod4 ? true : false}
                onChange={(e: any) => handleMethodChange(e, setAuthMethod4)}
              />
              DELETE
            </label>
          </div>
          <div className="allow-roles item">
            <div className="label">允许的用户等级</div>
            <label>
              <input
                name="allow-role-super"
                value="super"
                type="checkbox"
                checked={allowRole1 ? true : false}
                onChange={(e: any) => handleMethodChange(e, setAllowRole1)}
              />
              Super
            </label>
            <label>
              <input
                name="allow-role-admin"
                value="admin"
                type="checkbox"
                checked={allowRole2 ? true : false}
                onChange={(e: any) => handleMethodChange(e, setAllowRole2)}
              />
              Admin
            </label>
            <label>
              <input
                name="allow-role-vip"
                value="vip"
                type="checkbox"
                checked={allowRole3 ? true : false}
                onChange={(e: any) => handleMethodChange(e, setAllowRole3)}
              />
              Vip
            </label>
            <label>
              <input
                name="allow-role-common"
                value="common"
                type="checkbox"
                checked={allowRole4 ? true : false}
                onChange={(e: any) => handleMethodChange(e, setAllowRole4)}
              />
              Common
            </label>
          </div>
          <div className="operator item">
            <Button type="primary" onClick={handleSumbit}>
              { _id ? '更新' : '新增' }
            </Button>
            <Button type="default" onClick={onCancel}>取消</Button>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default AdminPathEditor;