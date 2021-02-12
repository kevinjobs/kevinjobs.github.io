import React, { useState } from 'react';
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

  const [showInfo, setShowInfo] = useState(true);

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
    maxHeight: '90%',
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
    color: '#f1f1f1',
    cursor: showInfo ? 'zoom-in' : 'zoom-out'
  } as React.CSSProperties;

  const infoStyle = {
    width: props.type === 'mobile' ? '100%' : 1000,
    position: props.type === 'mobile' ? 'absolute' : '',
    bottom: props.type === 'mobile' ? 0 : '',
    padding: props.type === 'mobile' ? '0px 20px' : '20px 30px',
    borderRadius: 'inherit',
    overflowY: 'scroll',
    lineHeight: props.type === 'mobile' ? .5 : 1.5,
    backgroundColor: props.type === 'mobile' ? 'rgba(0,0,0,.35)' :'#e9e9e9',
    display: showInfo ? 'block' : 'none',
    color: props.type === 'mobile' ? '#d1d1d1' : '#000',
    fontSize: props.type === 'mobile' ? '.8rem' : 'auto'
  } as React.CSSProperties;

  const closeStyle = {
    cursor:'pointer',
    position:'absolute',
    top: props.type === 'mobile' ? '' : 10,
    left: props.type === 'mobile' ? '50%' : '',
    right: props.type === 'mobile' ? '' : 10,
    bottom: props.type === 'mobile' ? -40 : '',
    transform: props.type === 'mobile' ? 'translateX(-50%)' : 'none',
    fontSize: props.type === 'mobile' ? 30 : 'auto',
    color: props.type === 'mobile' ? '#d1d1d1' : '#000'
  } as React.CSSProperties;

  const baseUrl = 'https://mintforge-1252473272.cos.ap-nanjing.myqcloud.com/image/';

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { close } = props;
    if (close) {
      (close as React.MouseEventHandler<HTMLElement>)(e);
    }
  }

  const onShowInfo = (e: React.MouseEvent<HTMLElement>) => {
    setShowInfo(!showInfo);
  }

  return(
    <div className="image-float-card"
      style={cardStyle}
    >
      <div className="image-float-card__image" style={imgStyle}>
        <div style={{textAlign:'right',fontSize:20}} onClick={handleClick.bind(this)}>
          <CloseCircleOutlined style={closeStyle} />
        </div>
        <img
          src={baseUrl + image.source.replace('JPG', 'jpg')}
          alt={image.title}
          style={{maxWidth:'100%',maxHeight:'100%',borderRadius:5}}
          onClick={onShowInfo}
        />
      </div>
      <div className="image-float-card__info no-scroll-bar fade-in" style={infoStyle} onClick={onShowInfo}>
        <h2 style={{color:'inherit',margin:'15px 0px'}}>{image.title || '暂无标题'}</h2>
        <p>{image.desc || '暂无描述'}</p>
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