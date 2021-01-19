import React from 'react';
import { ImageType } from '../Types';

import {
  CameraFilled,
  CompassFilled,
  BulbFilled,
  SkinFilled,
  VideoCameraFilled,
  CloseCircleOutlined,
  EnvironmentFilled,
  CalendarFilled
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
    alignItems: 'center',
    color: '#f1f1f1'
  } as React.CSSProperties;

  const infoStyle = {
    width: 1000,
    padding: '20px 30px',
    borderRadius: 'inherit',
    overflowY: 'scroll',
    lineHeight: props.type === 'mobile' ? 1.2 : 1.5,
    backgroundColor: '#e9e9e9'
  } as React.CSSProperties;

  const commentStyle = {
    zIndex: 4,
    borderRadius: 10,
    padding: 10
  } as React.CSSProperties;

  const baseUrl = 'https://mintforge-1252473272.cos.ap-nanjing.myqcloud.com/image/';

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { close } = props;
    if (close) {
      (close as React.MouseEventHandler<HTMLElement>)(e);
    }
  }

  return(
    <div className="image-float-card"
      style={cardStyle}
    >
      <div className="image-float-card__image" style={imgStyle}>
        <div style={{textAlign:'right',fontSize:20}} onClick={handleClick.bind(this)}>
          <CloseCircleOutlined style={{cursor:'pointer',position:'absolute',top:10,left:10,color:'inherit'}} />
        </div>
        <img
          src={baseUrl + image.source.replace('JPG', 'jpg')}
          alt={image.title}
          style={{maxWidth:'100%',maxHeight:'100%',borderRadius:5}}
        />
      </div>
      <div className="image-float-card__info no-scroll-bar" style={infoStyle}>
        <h2>{image.title || '我们向往未知'}</h2>
        <p>{image.desc || '这是未知的世界'}</p>
        <p><SkinFilled /> {image.author}</p>
        <p><BulbFilled /> {image.exposure_time}</p>
        <p><VideoCameraFilled /> {image.iso} (ISO)</p>
        <p><CameraFilled /> {image.manufacturer}</p>
        <p><CompassFilled /> {image.position.split('|')[0] || '未知地点'}</p>
        <p><EnvironmentFilled /> {image.position.split('|')[1] || '未知景点'}</p>
        <p><CalendarFilled /> {image.create_time}</p>
      </div>
    </div>
  )
}

export default ImageFloatCard;