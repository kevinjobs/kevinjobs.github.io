/*
 * @description: 组件 - 走马灯（轮播图）
 * @author: kevinjobs
 * @date: 2021-04-27
 * @version: 0.0.2
 */
import React, { HTMLAttributes } from 'react';
import { Motion, spring } from 'react-motion';

export type CarouselProps = {
  items: any[],
  duration?: number, // 轮播图切换间隔时间
  start?: number, // 开始图片的索引值
  onClick?: React.MouseEventHandler<any>
} & HTMLAttributes<any>;

export interface ICarouselItem {
  cover: string, // the url of image
}

export const Carousel: React.FC<CarouselProps> = props => {
  const { items, duration = 5000, start = 0, onClick, ...rest } = props;
  const length = items.length; // 传入的图片列表长度

  // 新建一个 ref 用以获取组件宽度
  const ref: any = React.useRef();

  // 设置当前图片的索引值，从 props 获取，默认为 0
  const [ currentItemIndex, setCurrentItemIndex ] = React.useState(start);
  // 获取组件宽度
  const [ clientWidth, setClientWidth ] = React.useState<number>();

  /**
   * 上一张
   * @param e 鼠标点击事件
   */
  const handlePrev = (e: any) => {
    setCurrentItemIndex(currentItemIndex - 1);
    if (currentItemIndex === 0) {
      setCurrentItemIndex(length - 1);
    }
  }

  /**
   * 下一张
   * @param e 鼠标点击事件
   */
  const handleNext = (e: any) => {
    setCurrentItemIndex(currentItemIndex + 1);
    if (currentItemIndex === length - 1) {
      setCurrentItemIndex(0);
    }
  }

  /**
   * 通过指示器选择图片
   * @param e event of mouse click
   */
  const handleSelect = (e: any) => {
    const i = e.target.dataset.index;
    setCurrentItemIndex(Number(i));
  }

  /**
   * 绘制走马灯的单张图片
   * @param item ICarouselItem
   * @param index the index of image
   * @returns ReactNode
   */
  const renderItem = (item: any, index: number) => {
    const baseUrl = 'https://mintforge-1252473272.cos.ap-nanjing.myqcloud.com/image/';

    let width: any = 0;
    if (rest.style) {
      width = rest.style.width;
    } else if (clientWidth) {
      width = clientWidth;
    } else {
      width = 1000;
    }
    const left = (index-currentItemIndex) * Number(width);
    const show = currentItemIndex === index;

    return (
      <Motion style={{x: spring(show ? 0 : left) }} key={index}>
        {
          ({x}) => (
            <div
              className="carousel-item"
              style={{left: x}}>
              <img
                src={baseUrl+item.cover}
                alt={item.title}
                data-index={index}
                onClick={onClick}
              />
            </div>
          )
        }
      </Motion>
    )
  }

  /**
   * 绘制轮播图（走马灯）指示器
   * @param item ICarouselItem
   * @param index the index of array map
   * @returns ReactNode
   */
  const renderNavi = (item: any, index: number) => {
    const zoomWidth = currentItemIndex === index ? 40 : 30;
    const zoomHeight = currentItemIndex === index ? 6 : 4;
    const highlight = currentItemIndex === index ? '100%' : '75%';

    return (
      <span
        className="navi-dot"
        key={index}
        style={{width: zoomWidth, height: zoomHeight, opacity: highlight}}
        data-index={index}
        onClick={handleSelect}>
        { item }
      </span>
    )
  }

  React.useEffect(() => {
    setClientWidth(ref.current.clientWidth);
  }, [])

  /**
   * 使用副作用设置自动轮播时长
   */
  React.useEffect(() => {
    const timer = setInterval(() => {
      if (currentItemIndex < length - 1) {
        setCurrentItemIndex(currentItemIndex + 1);
      } else {
        setCurrentItemIndex(0);
      }
    }, duration);
    return () => clearInterval(timer);
  }, [currentItemIndex])

  return (
    <div className="mint-carousel" {...rest} ref={ref}>
      <div className="carousel-container">
        { items && items.map(renderItem) }
        <div className="item-prev" onClick={handlePrev}>Prev</div>
        <div className="item-next" onClick={handleNext}>Next</div>
        <div className="navigator" style={{width: length * 40}}>
          { Array(length).fill('').map(renderNavi) }
        </div>
      </div>
    </div>
  )
}