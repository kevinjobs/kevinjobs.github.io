import React from 'react';
import classNames from 'classnames';

export type SwitchProps = {
  checked?: boolean,
  type?: 'default' | 'dot',
  color?: 'default' | 'blue' | 'red' | 'orange',
  onChange?: (checked: boolean, e: React.MouseEvent<any>) => void
} & Omit<React.AllHTMLAttributes<any>, 'type' | 'onChange'>;

const Switch: React.FC<SwitchProps> = props => {
  const {
    checked = false,
    type = 'default',
    color = 'default',
    onChange
  } = props;

  const [isChecked, setIsChecked] = React.useState(checked);

  const ColorMap = {
    default: '#313131',
    blue: '#2196F3',
    red: '#F44336',
    orange: '#FF9800'
  }

  const bColor = ColorMap[color];
  const hColor = '#f1f1f1';

  const handleOnChange = (e: any) => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(checked, e);
    };
  }

  const classname = classNames({
    [`mint-switch-${type}`]: type,
    'checked': isChecked
  })

  return (
    <button
      className={classname}
      role="switch"
      onClick={handleOnChange}
      aria-checked
    >
      <div className="container"
        style={{backgroundColor: isChecked ? hColor : bColor}}>
        <div className="handle" style={{backgroundColor: isChecked ? bColor : hColor}}>
          {
            type === 'dot' ? isChecked ? '日' : '夜' : null
          }
        </div>
      </div>
    </button>
  )
}

export default Switch;