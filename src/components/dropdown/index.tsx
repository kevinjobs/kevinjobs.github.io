import * as React from 'react';
import { Down } from '@icon-park/react';
import { Transition } from '@/components';

export interface DropdownProps {
  title?: string | React.ReactNode,
  theme?: string,
  children: React.ReactNode
};

const Dropdown: React.FC<DropdownProps> = props => {
  const { title, theme = '#000', children } = props;

  const ref: any = React.useRef();

  const [mouseOver, setMouseOver] = React.useState(false);
  const [color, setColor] = React.useState(theme);

  const handleMouseEnter = (e: any) => setMouseOver(true);
  const handleMouseLeave = (e: any) => setMouseOver(false);

  const textTitle = (
    <>
      <p>{ title }</p>
      <Down
        size="20"
        theme="outline"
        fill={color}/>
    </>
  );

  // 当鼠标移动到标题上时，获取标题的颜色，并赋值给箭头图标
  React.useEffect(() => {
    setColor(ref.current.style.color);
  }, [mouseOver]);

  return (
    <div
      className="mint-dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="mint-dropdown-container">
        <div
          className="mint-dropdown-title"
          ref={ref}
          style={{color:mouseOver?'#2196F3':theme}}
        >
          { typeof title === 'string' ? textTitle : title }
        </div>
        <div className="mint-dropdown-content">
          <Transition
            className="mint-dropdown-children"
            timeout={200}
            in={mouseOver}
            animation="FadeDown">
            <div>{ children }</div>
          </Transition>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;