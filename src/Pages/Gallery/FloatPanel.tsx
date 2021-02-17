import React, { useState } from 'react';
import { ImageInterface } from './gallery.interface';
import classNames from 'classnames';

import {
  CameraFilled,
  CompassFilled,
  BulbFilled,
  SkinFilled,
  VideoCameraFilled,
  CloseCircleOutlined,
  EnvironmentFilled,
  CalendarFilled,
  CaretLeftFilled,
  CaretRightFilled
} from '@ant-design/icons';

interface Props {
  image: ImageInterface,
  onClose?: any,
  onPrev?: any,
  onNext?: any,
  type: number
}

const FloatPanel: React.FC<Props> = (props: Props) => {
  const { image } = props;

  const baseUrl = 'https://mintforge-1252473272.cos.ap-nanjing.myqcloud.com/image/';

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { onClose } = props;
    if (onClose) {
      (onClose as React.MouseEventHandler<HTMLElement>)(e);
    }
  }

  const onPrev = (e: React.MouseEvent<HTMLElement>) => {
    const { onPrev } = props;
    if (onPrev) {
      (onPrev as React.MouseEventHandler<HTMLElement>)(e);
    } 
  }

  const onNext = (e: React.MouseEvent<HTMLElement>) => {
    const { onNext } = props;
    if (onNext) {
      (onNext as React.MouseEventHandler<HTMLElement>)(e);
    } 
  }

  const classnames = classNames({
    "Gallery-FloatPanel": true,
    "Mobile": props.type === 1 ? true : false,
    "Desktop": props.type === 2 ? true : false
  })

  return(
    <div className={classnames}>
      <div onClick={handleClick.bind(this)} className="Gallery-FloatPanel__close">
        <CloseCircleOutlined />
      </div>
      <div className="Gallery-FloatPanel__prev" onClick={onPrev}><CaretLeftFilled /></div>
      <div className="Gallery-FloatPanel__image">
        <img
          src={baseUrl + image.cover.replace('JPG', 'jpg')}
          alt={image.title}
        />
        <div className="Gallery-FloatPanel__image-info">
          <div className="Gallery-FloatPanel__image-info__item">
            <h2 style={{color:'inherit',margin:'15px 0px'}}>{image.title || '暂无标题'}</h2>
            <p>{image.desc || '暂无描述'}</p>
            <p>{image.author} <SkinFilled /></p>
            <p>{image.exif.exposure_time} <BulbFilled /></p>
            <p>{image.exif.iso} (ISO) <VideoCameraFilled /></p>
            <p>{image.exif.manufacturer} <CameraFilled /> </p>
            <p>{image.exif.address.split('|')[0] || '未知地点'} <CompassFilled /></p>
            <p>{image.exif.address.split('|')[1] || '未知景点'} <EnvironmentFilled /></p>
            <p>{image.exif.datetime} <CalendarFilled /></p>
          </div>
        </div>
      </div>
      <div className="Gallery-FloatPanel__next" onClick={onNext}><CaretRightFilled /></div>
    </div>
  )
}

export default FloatPanel;