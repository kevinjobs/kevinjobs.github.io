import React from 'react';
import { Down } from '@icon-park/react';
import { Transition } from '@/components';

export interface DropdownProps {
  title?: string | React.ReactNode,
  theme?: string,
  children: React.ReactNode
};

const Dropdown: React.FC<DropdownProps> = props => {
  const { title, children } = props;

  const [mouseOver, setMouseOver] = React.useState(false);

  const handleMouseEnter = (e: any) => setMouseOver(true);
  const handleMouseLeave = (e: any) => setMouseOver(false);

  const textTitle = (
    <>
      <p>{ title }</p>
      <Down
        size="20"
        theme="outline"
        fill={mouseOver ? '#2196F3' : '#f4f4f4'}/>
    </>
  )

  return (
    <div
      className="mint-dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="mint-dropdown-container">
        <div className="mint-dropdown-title">
          { typeof title === 'string' ? textTitle : title }
        </div>
        <div className="mint-dropdown-content">
          <Transition
            className="mint-dropdown-children"
            timeout={200}
            in={mouseOver}
            animation="FadeInOut">
            <div>{ children }</div>
          </Transition>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;