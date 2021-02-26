import React from 'react';
import { useHistory } from 'react-router-dom';
import { getPostById } from '@/apis/post';
import { ImageInterface } from '@/types';
import { Image } from '@/components';

const PhotoPage: React.FC<any> = props => {
  const { id } = props.match.params;
  const [image, setImage] = React.useState<ImageInterface>();

  const baseurl = 'https://mintforge-1252473272.cos.ap-nanjing.myqcloud.com/image/';
  const history = useHistory();

  React.useEffect(() => {
    getPostById(id).then(res => {
      if (res.status === 200 && res.data.code === 1) {
        setImage(res.data.data);
      }
    }).catch(err => console.log(err));
  }, [])

  return (
    <div className="PhotoPage" onClick={e => history.goBack()}>
      <div className="PhotoPage-Container">
        {
          image
            ? <Image src={baseurl + image.cover.replace('JPG', 'jpg')} className="photo" />
            : <div className="mint-loader"></div>
        }
      </div>
    </div>
  )
}

export default PhotoPage;