import React, { useState } from 'react';
import { Dropdown, Menu, Modal } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import store from '../../Store';
import { toLogout } from '../../Store/actions/auth-action';
import { UserType } from '../../Pages/Types';

interface Props {
  user: UserType
}

const UserInfo: React.FC<Props> = (props) => {
  const [visible, setVisible] = useState(false);

  const handleOk = () => {
    setVisible(false);
    store.dispatch(toLogout())
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const showModal = () => {
    setVisible(true);
  };

  const { user } = props;

  const menu = (
    <Menu>
      <Menu.Item>
        { user.isLogin ? user.id : ''}
      </Menu.Item>
      <Menu.Item onClick={showModal}>
        Logout
      </Menu.Item>
    </Menu>
  )

  return(
    <div className="logout">
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()} href="ss">
          {user.username}
          <DownOutlined />
        </a>
      </Dropdown>

      <Modal
        title="Logout Confirm"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Do you confirm the logout?</p>
      </Modal>
    </div>
  )
}

export default UserInfo;