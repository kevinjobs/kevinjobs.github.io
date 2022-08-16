import React from "react";
import Image from "next/image";
import Masonry from "../../components/masonry";
import styles from "../../styles/gallery.module.scss";
import { getImagesData } from "../../lib/images";
import {StaticProps} from "../article/[id]";

export interface GalleryImage {
  source: string;
  key: string;
  width: number;
  height: number;
  title: string;
}

export interface GalleryProps {
  imagesData: GalleryImage[];
}

export async function getStaticProps(props: StaticProps) {
  const { params }= props;

  const imagesData: GalleryImage = await getImagesData();

  return {
    props: {
      imagesData,
    },
  };
}

export default function GalleryPage(props: GalleryProps) {
  const gutter = 8;
  const { imagesData } = props;

  const ref = React.useRef<any>();

  const [cols, setCols] = React.useState<number>();
  const [itemWidth, setItemWidth] = React.useState<number>();

  const data = imagesData.map(d => {
    return {
      ...d,
      key: d.title,
      child: (
        <Image
          src={d.source}
          alt={d.title}
          className={styles.masonryItemImg}
          width={d.width}
          height={d.height}
        />
      )
    }
  });

  const handleResize = (e) => {
    const innerWidth = e.target.innerWidth;
    const outerWidth = e.target.outerWidth;
    const delta = outerWidth - innerWidth;
    const pureWidth = innerWidth - delta * 1.5;
    const [w, c] = generateColsAndWidth(pureWidth, gutter);
    setItemWidth(w);
    setCols(c);
  }

  React.useEffect(() => {
    const [w, c] = generateColsAndWidth(window.innerWidth, gutter);
    setItemWidth(w);
    setCols(c);

    const target = window;
    target.addEventListener("resize", handleResize);
    return () => target.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.galleryContainer} ref={ref}>
      <Masonry
        gutter={gutter}
        colWidth={itemWidth}
        cols={cols}
        data={data}
        onClickItem={(e, item) => {}}
      />
    </div>
  )
}

const generateColsAndWidth = (width: number, gutter: number) => {
  let w;
  let c;

  if (width > 1920) {
    w = (width - 300 - 4 * gutter) / 5;
    c = 5;
  } else if (width > 1440) {
    w = (width - 200 - 3 * gutter) / 4;
    c = 4;
  } else if (width > 768) {
    w = (width - 100 - 2 * gutter) / 3;
    c = 3;
  } else {
    w = (width - gutter) / 2;
    c = 2;
  }
  return [w, c];
}