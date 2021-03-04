import React from 'react';
import { ImageInterface } from '@/types';

export interface MasonryProps {
  columns: number,
  columnWidth: number,
  gutter: number,
  items: ImageInterface[],
  openImage?: any
}
/*
 * The classic "masonry" style Pinterest grid
 * @prop {number} columns - the number of columns in the grid
 * @prop {number} columnWidth - the fixed width of the columns
 * @prop {number} gutter  - the number of columns in the grid
 * @prop {Array}  items   - the list of items to render
 */
const Masonry: React.FC<MasonryProps> = props => {
  const [height, setHeight] = React.useState(0);

  const { items, columnWidth, columns, gutter, openImage } = props;
  const length = items.length;

  let longestHeight = 0;
  let columnHeights = Array.from({ length: columns }, () => 0);

  /*
   * Get the shortest column in the list of columns heights
   */
  const getShortestColumn = () => {
    const minValue = Math.min(...columnHeights);
    return columnHeights.indexOf(minValue);
  }

  /*
   * Determine the top and left positions of the grid item. Update the
   * cached column height.
   * @param {Object} item - the grid item
   * @param {Object} item.height - the grid item's image height
   * @param {Object} item.width - the grid item's image width
   */
  const getItemStyle = (item: ImageInterface, index: number) => {
    const shortestColumnIndex = getShortestColumn();

    const left = (columnWidth + gutter) * shortestColumnIndex;
    const top = columnHeights[shortestColumnIndex];

    const normalizedHeight = (columnWidth / item.exif.width) * item.exif.height;
    columnHeights[shortestColumnIndex] += (normalizedHeight + gutter);

    if (index === length - 1) {
      longestHeight = Math.max(...columnHeights);
      // console.log(longestHeight);
    };
    
    return {
      left: `${left}px`,
      top: `${top}px`,
      position: 'absolute',
      width: `${columnWidth}px`,
      height: `${normalizedHeight}px`
    } as React.CSSProperties;
  }

  /*
   * Render helper for an individual grid item
   * @param {Object} item - the grid item to render
   * @param {Object} item.url - the image src url
   */
  const renderItem = (item: ImageInterface, index: number) => {
    const baseUrl = 'https://mintforge-1252473272.cos.ap-nanjing.myqcloud.com/image/';
    // console.log('index', index, 'img', item.id);
    const { cover = '' } = item;
    return (
      <img
        className="masonry__item shadow-card-middle"
        style={getItemStyle(item, index)}
        key={index}
        data-picid={item.id}
        onClick={openImage}
        src={baseUrl + cover.replace('JPG', 'jpg')}
        alt={item.title || 'noname'}
      />
    );
  }

  React.useEffect(() => {
    setHeight(longestHeight);
  })

  const style = {
    position: 'relative',
    width: columnWidth*columns+gutter*(columns-1),
    height: height
  } as React.CSSProperties

  return (
    <div
      className="mint-masonry"
      style={style}>
      { items && items.map(renderItem) }
    </div>
  )
}

export default Masonry;