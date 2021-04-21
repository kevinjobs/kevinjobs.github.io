import React from 'react';
import { Transition } from '@/components';

export interface CarouselProps {
  items: any[],
  width?: number,
  height?: number
};

export const Carousel: React.FC<CarouselProps> = props => {
  const { items, width = 500, height = 300 } = props;
  const length = items.length;

  const [currentItemIndex, setCurrentItemIndex] = React.useState(0);

  const handlePrev = (e: any) => {
    setCurrentItemIndex(currentItemIndex - 1);
    if (currentItemIndex === 0) {
      setCurrentItemIndex(length - 1);
    }
  }

  const handleNext = (e: any) => {
    setCurrentItemIndex(currentItemIndex + 1);
    if (currentItemIndex === length - 1) {
      setCurrentItemIndex(0);
    }
  }

  const handleSelect = (e: any) => {
    const i = e.target.dataset.index;
    setCurrentItemIndex(Number(i));
    console.log(i);
  }

  const renderItem = (item: any, index: number) => {
    const baseUrl = 'https://mintforge-1252473272.cos.ap-nanjing.myqcloud.com/image/';

    const left = (index-currentItemIndex) * 500;

    return (
      <Transition in={left === 0} timeout={500} animation="CarouselSlide" key={index}>
        <div
          className="carousel-item"
          style={{left: left}}>
          <img src={baseUrl+item.cover} alt={item.title} />
        </div>
      </Transition>
    )
  }

  const renderNavi = (item: any, index: number) => {
    console.log(index, currentItemIndex);

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

  return (
    <div className="mint-carousel" style={{width: width, height: height}}>
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