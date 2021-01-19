import React from 'react';
import { ImageType } from '../Types';

import {
  CameraFilled,
  CompassFilled,
  BulbFilled,
  SkinFilled,
  VideoCameraFilled,
  CloseCircleOutlined
} from '@ant-design/icons';

type Props = {
  isShow: boolean,
  image: ImageType,
  close?: any,
  type?: 'desktop' | 'mobile'
}

const ImageFloatCard: React.FC<Props> = (props: Props) => {
  const { image } = props;

  const cardStyle = {
    display: props.isShow ? 'flex' : 'none',
    flexWrap: props.type === 'mobile' ? 'wrap' : 'nowrap',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    maxWidth: '90%',
    height: 'auto',
    maxHeight: '95%',
    zIndex: 3,
    width: 1400,
    backgroundColor: '#fff',
    borderRadius: 5
  } as React.CSSProperties;

  const imgStyle = {
    flexGrow: 1,
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,.75)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  } as React.CSSProperties;

  const infoStyle = {
    width: 1000,
    padding: '20px 30px',
    borderRadius: 'inherit',
    overflowY: 'scroll'
  } as React.CSSProperties;

  const commentStyle = {
    zIndex: 4,
    borderRadius: 10,
    padding: 10
  } as React.CSSProperties;

  const commentItemStyle = {
    backgroundColor: '#f1f1f1'
  }

  const baseUrl = 'https://mintforge-1252473272.cos.ap-nanjing.myqcloud.com/image/';

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { close } = props;
    if (close) {
      (close as React.MouseEventHandler<HTMLElement>)(e);
    }
  }

  return(
    <div className="image-float-card" style={cardStyle}>
      <div className="image-float-card__image" style={imgStyle}>
        <img
          src={baseUrl + image.source.replace('JPG', 'jpg')}
          alt={image.title}
          style={{maxWidth:'100%',maxHeight:'100%',borderRadius:5}}
        />
      </div>
      <div className="image-float-card__info no-scroll-bar" style={infoStyle}>
        <div style={{textAlign:'right',fontSize:20}} onClick={handleClick.bind(this)}>
          <CloseCircleOutlined style={{cursor: 'pointer'}} />
        </div>
        <h3>{image.title || 'no title'}</h3>
        <p>{image.desc || 'no desc'}</p>
        <p><SkinFilled /> {image.author}</p>
        <p><BulbFilled /> {image.exposure_time}</p>
        <p><VideoCameraFilled /> {image.iso} (ISO)</p>
        <p><CameraFilled /> {image.manufacturer}</p>
        <p><CompassFilled /> {image.position}</p>
        <hr />
        <div className="image-float-card__comment" style={commentStyle}>
          <h3>Selected Comments</h3>
          <div className="image-float-card__comment_item" style={commentItemStyle}>
            <p style={{padding:'2px 10px',borderRadius:5,margin:0}}>Hello, Everyone! </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageFloatCard;