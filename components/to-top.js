/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-01-24 21:33:58
 * @LastEditTime : 2022-01-24 22:03:14
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \kevinjobs.github.io\components\to-top.js
 * @Description  : 
 */
import styles from '../styles/to-top.module.scss';
import React from 'react';

export default function({position}) {
  let cls;
  let timer = null;
  
  const [visible, setVisible] = React.useState(false);

  switch(position) {
    case 'left-top':
      cls = styles.leftTop;
      break;
    case 'left-bottom':
      cls = styles.leftBottom;
      break;
    case 'right-top':
      cls = styles.rightTop;
      break;
    case 'rightBottom':
      cls = styles.rightBottom;
      break;
    default:
      cls = styles.rightBottom;
  }

  const handleClick = (e) => {
    cancelAnimationFrame(timer);

    let top = document.body.scrollTop || document.documentElement.scrollTop;
    if (top > 0 && top < 100) {
      scrollTo(0,top - 20);
      timer = requestAnimationFrame(handleClick);
    } else if (top >= 100 && top < 200) {
      scrollTo(0,top - 50);
      timer = requestAnimationFrame(handleClick);
    } else if (top >= 200 && top < 500) {
      scrollTo(0,top - 75);
      timer = requestAnimationFrame(handleClick);
    } else if (top >= 500) {
      scrollTo(0,top - 200);
      timer = requestAnimationFrame(handleClick);
    } else {
      cancelAnimationFrame(timer);
    }
  }

  const handleScroll = (e) => {
    let toTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (toTop > 300) setVisible(true);
    else setVisible(false);
  }

  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <div className={cls} style={{visibility:visible?'visible':'hidden'}}>
      <span onClick={handleClick}>回到顶部</span>
    </div>
  )
}
