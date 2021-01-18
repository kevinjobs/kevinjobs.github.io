import React from 'react';

interface Props {
  columns: number,
  columnWidth: number,
  gutter: number,
  items: any[],
}
/*
 * The classic "masonry" style Pinterest grid
 * @prop {number} columns - the number of columns in the grid
 * @prop {number} columnWidth - the fixed width of the columns
 * @prop {number} gutter  - the number of columns in the grid
 * @prop {Array}  items   - the list of items to render
 */
export default class Masonry extends React.Component<Props, any> {
  private columnHeights = Array.from({ length: this.props.columns }, () => 0);
  /*
   * Get the shortest column in the list of columns heights
   */
  getShortestColumn() {
    const minValue = Math.min(...this.columnHeights);
    return this.columnHeights.indexOf(minValue);
  }

  /*
   * Determine the top and left positions of the grid item. Update the
   * cached column height.
   * @param {Object} item - the grid item
   * @param {Object} item.height - the grid item's image height
   * @param {Object} item.width - the grid item's image width
   */
  getItemStyle(item: any) {
    const { columnWidth, gutter } = this.props;
    const shortestColumnIndex = this.getShortestColumn();
    const left = (columnWidth + gutter) * shortestColumnIndex;
    const top = this.columnHeights[shortestColumnIndex];
    const normalizedHeight = (columnWidth / item.width) * item.length;
    this.columnHeights[shortestColumnIndex] += (normalizedHeight + gutter);
    return {
      left: `${left}px`,
      top: `${top}px`,
      position: `absolute`
    } as React.CSSProperties;
  }

  /*
   * Render helper for an individual grid item
   * @param {Object} item - the grid item to render
   * @param {Object} item.url - the image src url
   */
  renderItem(item: any, index: number) {
    const baseUrl = 'https://mintforge-1252473272.cos.ap-nanjing.myqcloud.com/image/';
    return (
      <img className="ImageLayout__item"
        src={baseUrl + item.source.replace('JPG', 'jpg')}
        width={this.props.columnWidth}
        style={this.getItemStyle(item)}
        alt={item.title}
        key={index} />
    );
  }

  componentDidUpdate() {
    this.columnHeights = Array.from({ length: this.props.columns }, () => 0);
  }

  render() {
    const { items, columnWidth, columns, gutter } = this.props;
    return (
      <div className="ImageLayout" style={{position:'relative',width:columnWidth*columns+gutter*(columns-1)}}>
        { items.map(this.renderItem.bind(this))}
      </div>
    )
  }
}
