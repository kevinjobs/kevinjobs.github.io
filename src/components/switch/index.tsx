import React from 'react';
import classNames from 'classnames';

export interface SwitchProps {
  color?: string,
  hcolor?: string,
  onSwitch?: any,
  type?: 'default' | 'dot'
}

const Switch: React.FC<SwitchProps> = props => {
  const { color = '#333', hcolor = '#f1f1f1', onSwitch, type = 'default' } = props;

  const [toggle, setToggle] = React.useState("left");

  const handleClick = (e: any) => {
    toggle === 'left' ? setToggle('right') : setToggle('left');
    onSwitch && onSwitch(e);
  }

  const classname = classNames({
    [`mint-switch-${type}`]: type,
    [`${toggle}`]: true
  })

  return (
    <button
      className={classname}
      role="switch"
      onClick={handleClick}
    >
      <div className="container"
        style={{backgroundColor: color}}>
        <div className="handle" style={{backgroundColor: hcolor}}>
          {
            type === 'dot' ? toggle ? '日' : '夜' : null
          }
        </div>
      </div>
    </button>
  )
}

export default Switch;