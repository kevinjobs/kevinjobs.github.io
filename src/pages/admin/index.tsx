import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import AdminRoutes from './routes';

export default function AdminPage () {
  const Admin = styled.div`
    display: flex;
    flex-wrap: nowrap;
    height: 100vh;
  `;

  const Navigator = styled.div`
    padding: 16px 0;
    background-color: #525288;
    .header {
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .container {
      ul {
        list-style: none;
        width: 100%;
        text-align: center;
        li {
          font-size: 1.2rem;
          cursor: pointer;
          width: 100%;
          display: inline-block;
          a {
            text-decoration: none;
            display: inline-block;
            width: 100%;
            height: 100%;
            padding: 16px 0;
            color: #f1f1f1;
            &:hover {
              background-color: #333333;
            }
          }
          a.active {
            background-color: #333333;
            color: #f1f1f1;
          }
        }
      }
    }
  `;

  const RightContainer = styled.div`
    width: 100%;
    height: 100%;
    flex-grow: 1;
  `;

  return (
    <Admin>
      <Navigator>
        <div className="header">
          <h3>后 台 导 航</h3>
        </div>
        <div className="container">
          <ul>
            <li><NavLink to={'/admin/posts'}>概览</NavLink></li>
            <li><NavLink to={'/admin/tags'}>标签列表</NavLink></li>
            <li><NavLink to={'/admin/paths'}>路径列表</NavLink></li>
            <li><NavLink to={'/admin/logs'}>日志查看</NavLink></li>
            <li><NavLink to={'/admin/users'}>用户列表</NavLink></li>
          </ul>
        </div>
      </Navigator>
      <RightContainer>
        <AdminRoutes />
      </RightContainer>
    </Admin>
  )
}