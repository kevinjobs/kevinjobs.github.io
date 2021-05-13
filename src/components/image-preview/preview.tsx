/*
 * @description: 
 * @author: kevinjobs
 * @date: 2021-05-13
 * @version: 0.0.2
 * @changes: 2021-05-13 [perf] 默认高亮选定的图片序号；
 * @changes: 2021-05-13 [perf] 当选定图片超过缩略图展示范围时，将其移动中间；
 */
import * as React from 'react';
import { Motion, spring } from 'react-motion';
import { LeftC, RightC, Close } from '@icon-park/react';

interface IData {
  source: string,
  title: string
}

export type PreviewProps = {
  data: IData[],
  defaultIndex?: number, // 默认显示的索引值
  onClose?: any
};

// 对传入的默认 index 进行处理
// 当其大于 9（第九张） 时，才调整其位置（第一页的队列无法显示这么多）
const convertDefaultIndex = (i: number) => {
  if (i > 9) {
    return -((i - 6) * 136);
  } else {
    return 0
  }
}

export const Preview: React.FC<PreviewProps> = (props) => {
  const { data, defaultIndex = 0, onClose } = props;

  const [selectedImage, setSelectedImage] = React.useState<IData>(data[defaultIndex]);
  const [offset, setOffset] = React.useState(convertDefaultIndex(defaultIndex));

  // 点击下方图片缩略图时，将对应的图片对象传入
  const handleClick = (e: any, index: number) => {
    setSelectedImage(data[index]);
  };

  const renderItem = (item: IData, index: number) => {
    // 当前展示的图片，添加 active 类名，用于高亮显示
    let classname = 'list-item ';
    if (index === data.indexOf(selectedImage)) {
      classname += 'active'
    };

    return (
      <div
        className={classname}
        key={index}
        onClick={e => handleClick(e, index)}
      >
        <img src={item.source} alt={item.title} />
      </div>
    )
  };

  return (
    <div className="mint-image-preview">
      <div className="container">
        <div className="close-button" onClick={onClose}>
          <Close theme="filled" size="24" fill="#cecece"/>
        </div>
        <div className="preview">
          {/** 大图展示 */}
          <div className="preview-container">
          { selectedImage && <img src={selectedImage.source} alt={selectedImage.title} /> }
          </div>
        </div>
        <div className="list">
          {/** 图片缩略图 */}
          <div className="prev" onClick={e => {if (offset < 0) setOffset(offset + 200);}}>
            <LeftC theme="filled" size="38" fill="#525252" />
          </div>
          <div className="list-container">
            <Motion style={{x: spring(offset, {stiffness: 300, damping: 40})}}>
              {
                ({x}) => (
                  <div
                    className="list-container-slide"
                    style={{width: data.length * 136, left: x}}>
                    { data && data.map(renderItem) }  
                  </div>
                )
              }
            </Motion>
          </div>
          <div className="next" onClick={e => setOffset(offset - 200)}>
            <RightC theme="filled" size="38" fill="#525252" />
          </div>
        </div>
      </div>
    </div>
  )
}