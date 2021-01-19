import React, { useEffect, useState } from 'react';

import AdminImage from './Image';

import { getImages } from '../../Apis/image';
import { ImageType } from '../Types';

import './style.scss';

const Admin: React.FC = () => {

  const [images, setImages] = useState<ImageType[]>();

  useEffect(() => {
    getImages().then(res => {
      setImages(res.data.data.items);
    })
  })

  return(
    <AdminImage images={images} />
  )
}

export default Admin;