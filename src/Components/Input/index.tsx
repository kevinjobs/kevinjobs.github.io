import React from 'react';

type Props = {
  name?: string,
  value?: string,
  onChange?: Function,
  label?: string
}

const Input: React.FC<Props> = (props: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLElement>) => {
    const { onChange } = props;
    if (onChange) {
      (onChange as React.ChangeEventHandler<HTMLElement>)(e);
    }
  }

  return(
    <div>
      <label>{props.label}</label>
      <input
        name={props.name}
        value={props.value}
        onChange={handleChange}
        style={{marginLeft:10}}
      />
    </div>
  )
}

export default Input;