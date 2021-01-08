// import { ScanOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { ImageType } from '../Types';

interface Props {
  image: ImageType,
  onClick?: any
}

const Card: React.FC<Props> = (props) => {
  // console.log(props);

  const { image } = props;

  const [scale, setScale] = useState(1);
  const [delta, setDelta] = useState(1000);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { onClick } = props;
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLElement>)(e);
    }
    setScale(1);
  }
  
  const zoom = (e: any) => {
    // e.stopPropagation();
    let d: number = -e.deltaY;
    setDelta(delta + d);
    let zoomScale: number = delta/1000;
    if (zoomScale > .3 && zoomScale < 2) {
      setScale(zoomScale);
    }
  }

  if (image) {
    return(
      <div className="gallery-card mask">
        <img
          src={props.image.source}
          alt={props.image.title}
          onClick={handleClick}
          onWheel={zoom}
          className="gallery-image"
          style={{transform:`scale(${scale},${scale})`}}
        />
      </div>
    )
  } else {
    return(<div className="gallery-card"></div>)
  }
}

export default Card;