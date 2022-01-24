/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-01-24 15:00:04
 * @LastEditTime : 2022-01-24 17:40:57
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \kevinjobs.github.io\components\layout.js
 * @Description  : 
 */
import styles from '../styles/app.module.scss';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className={styles.app}>
      <div className={styles.nav}>
        <div className='logo'>Mint Forge</div>
        <div className={styles.menu}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/category">Category</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
      </div>
      { children }
    </div>
  )
}