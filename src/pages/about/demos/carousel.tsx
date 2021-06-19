import * as React from 'react';
import { Carousel } from '@/components';
import { PostApi, IPost } from '@/apis';

export const Demo: React.FC<any> = (props) => {
  const [images, setImages] = React.useState<IPost[]>();

  React.useEffect(() => {
    PostApi
      .getPostList(1,5,'picture')
      .then(res => setImages(res.data.data.items));
  }, []);

  return (
    <div className="demo">
      <div className="container">
        <div className="header">Carousel 走马灯</div>
        <div className="desc">走马灯组件，用于切换图片展示</div>
        <div className="content">
          <div className="comps" style={{width: '100%',height: 600}}>
            {
              images &&
              <Carousel
                items={images}
                onClick={e => e.preventDefault() }
              />
            }
          </div>
          <div className="detail">
            走马灯组件
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;