import React from 'react';
import classNames from 'classnames';

export interface SwitchProps {
  color?: string,
  onSwitch?: any,
  type?: 'default' | 'dot'
}

const Switch: React.FC<SwitchProps> = props => {
  const [toggle, setToggle] = React.useState(true);

  const { color = '#333', onSwitch, type = 'default' } = props;

  const handleClick = (e: any) => {
    setToggle(!toggle);
    if (onSwitch) {
      onSwitch(e);
    }
  }

  const classname = classNames({
    [`mint-switch-${type}`]: type,
    'open': toggle
  })

  return (
    <button
      className={classname}
      role="switch"
      onClick={handleClick}
    >
      <div className="container"
        style={{backgroundColor: toggle ? color : ''}}>
        <div className="handle">
          {
            type === 'dot' ? toggle ? '日' : '夜' : null
          }
        </div>
      </div>
    </button>
  )
}

export default Switch;