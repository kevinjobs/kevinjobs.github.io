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
  const [prevButtonColor, setPrevButtonColor] = React.useState('#525252');
  const [nextButtonColor, setNextButtonColor] = React.useState('#525252');

  const [zoom, setZoom] = React.useState(1000);
  const [positionXStart, setPositionXStart] = React.useState(0);
  const [positionYStart, setPositionYStart] = React.useState(0);
  const [positionXEnd, setPositionXEnd] = React.useState(0);
  const [positionYEnd, setPositionYEnd] = React.useState(0);
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  const imgRef: any = React.useRef();

  // 点击下方图片缩略图时，将对应的图片对象传入
  const handleClick = (e: any, index: number) => {
    e.preventDefault();
    setSelectedImage(data[index]);
  };

  // 处理放大缩小
  const handleZoom = (e: any) => {
    e.preventDefault();
    let delta = e.deltaY;
    if (zoom <= 100) {
      if (delta < 0) {
        setZoom(zoom - delta)
      };
    } else {
      setZoom(zoom - delta);
    };
  };

  const handleDragStart = (e: any) => {
    // e.preventDefault();
    if (x === 0) {
      setPositionXStart(e.clientX);
      setPositionYStart(e.clientY);
    };
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setPositionXEnd(e.clientX);
    setPositionYEnd(e.clientY);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setPositionXEnd(e.clientX);
    setPositionYEnd(e.clientY);
  };

  const handlePrev = (e: any) => {
    setPrevButtonColor('#a1a1a1');
    if (offset < 0) {
      if (offset === -136) {
        setOffset(0);
      } else {
        setOffset(offset + 136 * 2);
      };
    };
    setTimeout(() => {
      setPrevButtonColor('#525252');
    }, 100);
  };

  const handleNext = (e: any) => {
    setNextButtonColor('#a1a1a1');
    if ((data.length * 136 + offset) > 1360) {
      setOffset(offset - 136 * 2);
    };
    setTimeout(() => {
      setNextButtonColor('#525252');
    }, 100);
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

  const handleWheel = (e: any) => {
    // console.log(e);
    e.preventDefault();
    e.stopPropagation();
  };

  // 监听 scroll
  React.useEffect(() => {
    document.body.addEventListener('wheel', handleWheel, {passive: false});
    return () => {
      document.body.removeEventListener('wheel', handleWheel);
    };
  }, []);

  React.useEffect(() => {
    setX(positionXEnd - positionXStart);
    setY(positionYEnd - positionYStart);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [positionXEnd, positionYEnd]);

  const styles = {
    transform: `scale(${zoom/1000}, ${zoom/1000}) translate(${x}px,${y}px)`
  } as React.CSSProperties;

  return (
    <div className="mint-image-preview">
      <div className="container">
        <div className="close-button" onClick={onClose}>
          <Close theme="filled" size="24" fill="#cecece"/>
        </div>
        <div className="preview">
          {/** 大图展示 */}
          <div className="preview-container">
            {
              selectedImage &&
              <img
                src={selectedImage.source}
                alt={selectedImage.title}
                onWheel={handleZoom}
                style={styles}
                draggable
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                ref={imgRef}
              />
            }
          </div>
        </div>
        <div className="list">
          {/** 图片缩略图 */}
          <div className="prev" onClick={handlePrev}>
            <LeftC theme="filled" size="38" fill={prevButtonColor} />
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
          <div className="next" onClick={handleNext}>
            <RightC theme="filled" size="38" fill={nextButtonColor} />
          </div>
        </div>
      </div>
    </div>
  )
}