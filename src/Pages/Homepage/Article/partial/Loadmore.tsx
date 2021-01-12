import * as React from 'react';
import { Divider } from '../../../../Components';
import { useViewport, breakpoint } from '../../../../Utils/viewportContext';

interface Props {
  more: boolean,
  loadmore?: React.MouseEventHandler<HTMLDivElement>
}

const LoadMore: React.FC<Props> = (props) => {
  const { width } = useViewport();

  //console.log(width);

  const className = () => {
    if (props.more) {
      return 'loadmore animate__animated animate__fadeInUp'
    } else {
      return 'loadmore animate__animated animate__fadeInUp nomore'
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { loadmore } = props;
    if (loadmore) {
      (loadmore as React.MouseEventHandler<HTMLDivElement>)(e);
    }
  }

  return(
    <div
      className={className()}
      onClick={handleClick}
    >
      {
        width > breakpoint
        ? <Divider>{props.more ? 'Load More ...' : 'No More Articles'}</Divider>
        : <span>{props.more ? 'Load More ...' : 'No More Articles'}</span>
      }
    </div>
  )
}

export default LoadMore;