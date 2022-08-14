import styles from '../styles/layout.module.scss';
import Navi, {NavItem} from "./navi";
import Footer from "./footer";
import { useRouter } from "next/router";
import React from "react";

export default function Layout({ children }) {
  const router = useRouter();

  const NAV_ITEMS: NavItem[] = [
    {
      title: "category",
      key: "page-category",
      to: "/category",
      onClick(e: React.MouseEvent<HTMLDivElement>, item: NavItem) {
        e.preventDefault();
        router.push(item.to).then();
      }
    },
    {
      title: "about",
      key: "page-about",
      to: "/about",
      onClick(e: React.MouseEvent<HTMLDivElement>, item: NavItem) {
        e.preventDefault();
        router.push(item.to).then();
      }
    }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Navi items={NAV_ITEMS} />
        {children}
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
