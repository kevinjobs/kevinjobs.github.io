import React from 'react';
import { Icon, Transition } from '@/components';

export type PullDownProps = {
  data: PullDownData[];
  onSelect?: any
} & React.HTMLAttributes<any>;

export interface PullDownData {
  title: string,
  key: string,
  open?: boolean
  children?: PullDownData[]
} 

const PullDown: React.FC<PullDownProps> = props => {
  const [childShow, setChildShow] = React.useState(true);

  const { data, onSelect, ...restProps } = props;

  const renderChild = (child: PullDownData, index: number) => {
    return (
      <div
        className="mint-child-item"
        key={index}
        onClick={onSelect}
        data-key={child.key}
        data-title={child.title}
      >{ child.title }</div>
    )
  }

  const renderMenu = (menu: PullDownData, index: number) => {
    return (
      <div className="mint-menu" key={index}>
        <div className="mint-menu-header">
          <span className="mint-menu-arrow">
            <Icon
              icon="chevron-down"
              style={{color: '#000', transform: childShow ? 'rotate(90deg)' : ''}}/>
          </span>
          <span className="mint-menu-title"
            data-key={menu.key}
            data-title={menu.title}
            onClick={e => setChildShow(!childShow)}>
            { menu.title }
          </span>
        </div>
        <Transition in={childShow} timeout={300} animation="ExpandShrinkV">
          <div className="mint-menu-child" style={{borderLeft: childShow ? '1px dotted #000' : ''}}>
            { menu.children?.map(renderChild) }
          </div>
        </Transition>
      </div>
    )
  }

  return (
    <div className="mint-pull-down" {...restProps}>
      <div className="mint-menus">
        { data.map(renderMenu) }
      </div>
    </div>
  )
}

export default PullDown;