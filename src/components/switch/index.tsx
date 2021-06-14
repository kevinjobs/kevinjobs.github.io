import React from 'react';
import classNames from 'classnames';

export type SwitchProps = {
  bgColor?: string,
  handleColor?: string,
  type?: 'default' | 'dot'
} & React.AllHTMLAttributes<any>

const Switch: React.FC<SwitchProps> = props => {
  const {
    bgColor = '#333',
    handleColor = '#fff',
    type = 'default',
    onClick
  } = props;

  const [toggle, setToggle] = React.useState("left");
  const [bColor, setBColor] = React.useState(bgColor);
  const [hColor, setHColor] = React.useState(handleColor);

  const handleClick = (e: any) => {
    if (onClick) {
      (onClick as React.MouseEventHandler<any>)(e);
    };
    if (toggle === 'left') {
      setToggle('right');
      setBColor(handleColor);
      setHColor(bgColor);
    } else if (toggle === 'right') {
      setToggle('left');
      setBColor(bgColor);
      setHColor(handleColor);
    }
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
      aria-checked
    >
      <div className="container"
        style={{backgroundColor: bColor}}>
        <div className="handle" style={{backgroundColor: hColor}}>
          {
            type === 'dot' ? toggle ? '日' : '夜' : null
          }
        </div>
      </div>
    </button>
  )
}

export default Switch;