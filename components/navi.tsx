import styles from "../styles/nav.module.scss";
import React from "react";
import Link from "next/link";

export interface NavItem {
  title: string;
  key: string;
  to: string;
  icon?: React.ReactNode;
  onClick?(e: React.MouseEvent<HTMLDivElement>, item: NavItem): void;
}

export interface NavProps {
  height?: number;
  /**
   * nav item height, default is 68px
   */
  itemHeight?: number;
  theme?: string;
  items?: NavItem[];
}

export default function Nav(props: NavProps) {
  const { height=80, itemHeight=68, items } = props;

  const [isOpen, setIsOpen] = React.useState(false);

  const handleClickOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOpen((isOpen) => !isOpen);
  }

  const renderNavItem = (item: NavItem, itemHeight: number) => {
    return (
      <div
        className={styles.navItem}
        key={item.key}
        style={{ height: itemHeight }}
        onClick={e => {
          e.preventDefault();
          if (item.onClick) {
            item.onClick(e, item);
            setIsOpen(false);
          }
        }}
      >
        <span>{item.title}</span>
      </div>
    );
  }

  return (
    <div
      className={styles.container}
      style={{height: !isOpen ? height : height+items.length*itemHeight+24}}
    >
      <div className={styles.logoLine} style={{height}}>
        <div className={styles.logo}>
          <Link href={"/"}>Kevin Jobs</Link>
        </div>
        <div className={styles.menuButton}>
          <div className={styles.closeOrOpen} onClick={handleClickOpen}>
            <div className={isOpen ? styles.handleOneOpen : styles.handleOne}></div>
            <div className={isOpen ? styles.handleTwoOpen : styles.handleTwo}></div>
          </div>
        </div>
      </div>
      <div className={styles.navItems}>
        {items && items.map(item => renderNavItem(item, itemHeight))}
      </div>
    </div>
  )
}