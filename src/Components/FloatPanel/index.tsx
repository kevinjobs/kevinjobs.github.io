import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import './style.scss';

interface Props {
  onClose?: React.MouseEventHandler<HTMLElement>,
  onWheel?: React.WheelEventHandler<HTMLElement>,
  onTouchMove?: React.TouchEventHandler<HTMLElement>
}

const FloatPanel: React.FC<Props> = (props) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { onClose } = props;
    if (onClose) {
      (onClose as React.MouseEventHandler<HTMLElement>)(e);
    }
  }

  const handleWheel = (e: React.WheelEvent<HTMLElement>) => {
    const { onWheel } = props;
    if (onWheel) {
      (onWheel as React.WheelEventHandler<HTMLElement>)(e);
    }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    const { onTouchMove } = props;
    if (onTouchMove) {
      (onTouchMove as React.TouchEventHandler<HTMLElement>)(e);
    }
  }

  return(
    <div className="float-card fade-in" onWheel={handleWheel} onTouchMove={handleTouchMove}>
      <span className="close">
        <CloseOutlined style={{fontSize:'inherit'}} onClick={handleClick} />
      </span>
      <div className="float-card-container no-scroll-bar" onWheel={handleWheel} onTouchMove={handleTouchMove}>
        { props.children }
      </div>
    </div>
  )
}

export default FloatPanel;