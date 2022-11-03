import React from "react";
import Image from "next/image";
import Masonry from "../../components/masonry";
import styles from "../../styles/gallery.module.scss";
import { getImagesData } from "../../lib/images";
import {StaticProps} from "../article/[id]";
import { GrPrevious, GrNext } from "react-icons/gr";

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
  const [selectedItem, setSelectedItem] = React.useState<GalleryImage>();
  const [selectedIdx, setSelectedIdx] = React.useState(0);

  const data: GalleryImage[] = imagesData.map(d => {
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
    const el = document.body
    const offsetWidth = el.offsetWidth;
    const [w, c] = generateColsAndWidth(offsetWidth, gutter);
    setItemWidth(w);
    setCols(c);
  }

  const handleClickItem = (e: React.MouseEvent<HTMLElement>, item, idx) => {
    e.preventDefault();
    setSelectedItem(item);
    setSelectedIdx(idx);
  }

  const renderPreview = (item: GalleryImage) => {
    return (
      <div className={styles.preview}>
        <div className={styles.prev} onClick={e => {
          setSelectedItem(data[selectedIdx - 1]);
          setSelectedIdx((selectedIdx) => selectedIdx - 1);
        }}>
          <GrPrevious size={32} className={styles.prevIcon} />
        </div>
        <div className={styles.next} onClick={e => {
          setSelectedItem(data[selectedIdx + 1]);
          setSelectedIdx((selectedIdx) => selectedIdx + 1);
        }}>
          <GrNext size={32} className={styles.nextIcon} />
        </div>
        <Image
          src={item.source}
          width={item.width}
          height={item.height}
          alt={item.title}
          onClick={e => {
            e.preventDefault();
            setSelectedItem(null);
          }}
        />
      </div>
    )
  }

  React.useEffect(() => {
    const [w, c] = generateColsAndWidth(document.body.offsetWidth, gutter);
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
        onClickItem={handleClickItem}
      />
      {selectedItem && renderPreview(selectedItem)}
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