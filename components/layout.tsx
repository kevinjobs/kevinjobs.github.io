import styles from '../styles/app.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../public/logo.png';

const urls = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Category',
    path: '/category',
  },
  {
    name: 'About',
    path: '/about',
  },
];

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <div className={styles.app}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <img src={Logo.src} alt="logo" />
          </Link>
        </div>
        <div className={styles.menu}>
          <ul>
            {urls.map((u) => {
              const cls = u.path === router.asPath ? styles.activedLink : styles.link;
              return (
                <li key={u.name} className={cls}>
                  <Link href={u.path}>{u.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
}
