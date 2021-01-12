import React from 'react';
import './style.scss';

interface Props {
  onChange?: React.ChangeEventHandler<React.ChangeEvent>,
  value?: string
}

const About: React.FC<Props> = (props: Props) => {
  const handleChange = (e: any) => {
    const { onChange } = props;
    if (onChange) {
      (onChange as React.ChangeEventHandler<React.ChangeEvent>)(e);
    }
  }

  return(
    <div className="search-bar">
      <input onChange={handleChange} value={props.value} />
    </div>
  )
}

export default About;