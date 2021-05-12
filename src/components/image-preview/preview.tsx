/*
 * @description: 
 * @author: kevinjobs
 * @date: 
 * @version: 0.0.1
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
  onClose?: any
};

export const Preview: React.FC<PreviewProps> = (props) => {
  const { data, onClose } = props;

  const [image, setImage] = React.useState<IData>(data[0]);
  const [offset, setOffset] = React.useState(0);

  const handleClick = (e: any, index: number) => {
    setImage(data[index]);
  };

  const renderItem = (item: IData, index: number) => {
    return (
      <div
        className="list-item"
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
          <div className="preview-container">
          { image && <img src={image.source} alt={image.title} /> }
          </div>
        </div>
        <div className="list">
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