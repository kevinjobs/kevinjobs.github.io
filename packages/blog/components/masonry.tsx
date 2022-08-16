import React from "react";

export interface MasonryProps {
  cols?: number;
  colWidth?: number;
  gutter?: number;
  data: any;
  onClickItem(e: React.MouseEvent<HTMLElement>, item: MasonryItem): void;
}

export interface MasonryItem {
  width: number;
  height: number;
  key: string;
  child: React.ReactNode;
}

export default function Masonry(props: MasonryProps) {
  const {
    cols = 3,
    colWidth = 320,
    gutter = 8,
    data,
    onClickItem
  } = props;

  const [totalHeight, setTotalHeight] = React.useState(0);

  const colHeightList = Array.from({length: cols}, () => 0);
  let tmpTotalHeight = 0;

  const getShortestColIdx = (colHeights) => {
    const min = Math.min(...colHeights);
    return colHeights.indexOf(min);
  }

  const generateItemStyle = (item: MasonryItem, idx: number) => {
    const shortest = getShortestColIdx(colHeightList);
    const offsetLeft = (colWidth + gutter) * shortest;
    const offsetTop = colHeightList[shortest];

    const normalizedItemHeight = (colWidth / item.width) * item.height;
    colHeightList[shortest] += (normalizedItemHeight + gutter);

    if (idx === data.length - 1) {
      tmpTotalHeight = Math.max(...colHeightList);
    }

    return {
      left: offsetLeft,
      top: offsetTop,
      position: "absolute",
      width: colWidth,
      height: normalizedItemHeight,
      cursor: "pointer",
    } as React.CSSProperties;
  }

  const renderItem = (item: MasonryItem, idx: number) => {
    const { key, child } = item;
    const style = generateItemStyle(item, idx);

    return (
      <div style={style} key={key} onClick={e => onClickItem(e, item)}>
        { child }
      </div>
    )
  }

  React.useEffect(() => {
    setTotalHeight(tmpTotalHeight);
  }, [colHeightList, data.length]);

  return (
    <div style={{width: (colWidth+gutter)*cols-gutter, height: totalHeight, position: "relative"}}>
      {data && data.map(renderItem)}
    </div>
  )
}