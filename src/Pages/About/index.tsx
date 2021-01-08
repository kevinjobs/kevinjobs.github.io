import React from 'react';
import './style.scss';
import { ImageType } from '../../Pages/Types';

interface Props {
  onClick?: any
}

interface State {
  images: ImageType[]
}

class About extends React.Component<Props, State> {
  render() {
    return(
      <div className="about">
      </div>
    )
  }
}

export default About;