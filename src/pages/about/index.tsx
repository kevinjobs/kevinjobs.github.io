import * as React from 'react';
import DemoNavi from './navigator';
import DemoRoutes from './routes';

import DemoButton from './demos/button';
import DemoCarousel from './demos/carousel';
import DemoDivider from './demos/divider';
import DemoDropdown from './demos/dropdown';
import DemoEditor from './demos/editor';
import DemoImagePreview from './demos/image-preview';
import DemoInput from './demos/input';
import DemoModal from './demos/modal';

export interface IItem {
  key: string | number,
  nameEN: string,
  nameCN: string,
  path?: string,
  component?: React.ComponentType<any>
}

const AboutPage: React.FC = () => {
  const menus: IItem[] = [
    {key: 1, nameEN: 'button', nameCN: '按钮', component: DemoButton},
    {key: 2, nameEN: 'carousel', nameCN: '走马灯', component: DemoCarousel},
    {key: 3, nameEN: 'divider', nameCN: '分割线', component: DemoDivider},
    {key: 4, nameEN: 'dropdown', nameCN: '下拉菜单', component: DemoDropdown},
    {key: 5, nameEN: 'editor', nameCN: '编辑器', component: DemoEditor},
    {key: 6, nameEN: 'image-preview', nameCN: '图片预览器', component: DemoImagePreview},
    {key: 7, nameEN: 'input', nameCN: '输入框', component: DemoInput},
    {key: 8, nameEN: 'modal', nameCN: '模态框', component: DemoModal}
  ]

  return (
    <div className="about-page">
      <div className="container">
        <div className="left-nav">
          <DemoNavi items={menus} />
        </div>
        <div className="right-content">
          <DemoRoutes items={menus} />
        </div>
      </div>
    </div>
  )
}

export default AboutPage;