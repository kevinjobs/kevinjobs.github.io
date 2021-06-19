import * as React from 'react';
import { ImagePreview } from '@/components';
import axios from '@/utils/axios';

export const Demo: React.FC<any> = (props) => {
  const [imgs, setImgs] = React.useState<any[]>();
  const [visible, setVisible] = React.useState(false);

  const style = {
    item: {
      display: 'inline-block',
      width: 150,
      height: 150
    } as React.CSSProperties,
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    } as React.CSSProperties
  } 

  const convertData = (imgs: any[]) => {
    const newImgs = [];

    for (let img of imgs) {
      const newImg = { title: '', source: ''};
      newImg['title'] = img['id'];
      newImg['source'] = img['source'];
      newImgs.push(newImg);
    };

    return newImgs;
  };

  const renderItem = (item: any, index: number) => (
    <div className="item" key={index} style={style.item}>
      <img src={item.source} alt={item.id} style={style.img} onClick={e => setVisible(true)} />
    </div>
  )

  React.useEffect(() => {
    axios
      .get('/zhihus?page_size=30')
      .then(res => {
        setImgs(res.data.data.items);
      }).catch(err => console.log(err));
  }, []);

  return (
    <div className="demo">
      <div className="container">
        <div className="header">Edidtor</div>
        <div className="desc">简单的 markdown 编辑器</div>
        <div className="content">
          <div className="comps" style={{width:'100%'}}>
            { imgs && imgs.map(renderItem) }
          </div>
          <div className="detail">
            最简单的编辑器样式
          </div>
        </div>
      </div>
      { visible && imgs && <ImagePreview data={convertData(imgs)} onClose={(e: any) => setVisible(false)} /> }
    </div>
  );
};

export default Demo;