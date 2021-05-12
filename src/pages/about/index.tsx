import * as React from 'react';
import { HashRouter, Route, NavLink } from 'react-router-dom';
import DemoButton from './demo-button';
import DemoCarousel from './demo-carousel';
import DemoDivider from './demo-divider';
import DemoDropdown from './demo-dropdown';
import DemoEditor from './demo-editor';
import DemoImagePreview from './demo-image-preview';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="left-nav">
          <div className="menus">
            <NavLink className="menu-item" to={'/about/demo-button'}>
              Button 按钮
            </NavLink>
            <NavLink className="menu-item" to={'/about/demo-carousel'}>
              Carousel 走马灯/轮播图
            </NavLink>
            <NavLink className="menu-item" to={'/about/demo-divider'}>
              Divider 分割线
            </NavLink>
            <NavLink className="menu-item" to={'/about/demo-dropdown'}>
              Dropdown 下拉菜单
            </NavLink>
            <NavLink className="menu-item" to={'/about/demo-editor'}>
              Editor 编辑器
            </NavLink>
            <NavLink className="menu-item" to={'/about/demo-image-preview'}>
              ImagePreview 图片预览
            </NavLink>
          </div>
        </div>
        <div className="right-content">
          <HashRouter>
            <Route path="/about">
              <Route path="/about/demo-button"><DemoButton /></Route>
              <Route path="/about/demo-carousel"><DemoCarousel /></Route>
              <Route path="/about/demo-divider" component={DemoDivider} />
              <Route path="/about/demo-dropdown"><DemoDropdown /></Route>
              <Route path="/about/demo-editor" component={DemoEditor} />
              <Route path="/about/demo-image-preview" component={DemoImagePreview} />
            </Route>
          </HashRouter>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;