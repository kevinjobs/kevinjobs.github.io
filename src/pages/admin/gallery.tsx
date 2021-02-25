import React from 'react';
import { getPostList } from '@/apis/post';
import { Pagination, message } from '@/components';

const AdminGalleryPage: React.FC = () => {
  const [imageList, setImageList] = React.useState<any []>();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    getPostList(1, 9, 1).then(res => {
      if (res.status === 200 && res.data.code === 1) {
        setImageList(res.data.data.items);
        setTotal(res.data.data.total);
      }
    })
  }, [])

  const handlePrev = () => {
    if (currentPage >= 2) {
      getPostList(currentPage - 1, 9, 1).then(res => {
        if (res.status === 200 && res.data.code === 1) {
          setImageList(res.data.data.items);
          setCurrentPage(currentPage - 1);
        }
      })
    } else {
      message({type: 'warning', text: '已经是第一页'})
    }
  };
  const handleNext = () => {
    if (currentPage * 9 <= total) {
      getPostList(currentPage + 1, 9, 1).then(res => {
        if (res.status === 200 && res.data.code === 1) {
          setImageList(res.data.data.items);
          setCurrentPage(currentPage + 1);
        }
      })
    } else {
      message({type: 'warning', text: '已经是最后一页'});
    }
  };

  const renderItem = (item: any, index: number) => {
    const baseurl = 'https://mintforge-1252473272.cos.ap-nanjing.myqcloud.com/image/';
    return (
      <div className="item shadow-card" key={index}>
        <img src={baseurl + item.cover.replace('JPG', 'jpg')}
          alt={item.title} />
      </div>
    )
  }

  return (
    <div className="Admin-Gallery-Page shadow-card">
      <div className="Container">
        <div className="header">
          <h3>所 有 图 片</h3>
        </div>
        { imageList ? imageList.map(renderItem) : <div className="mint-loader"></div> }
        <div className="prev-next">
          <Pagination onPrev={handlePrev} onNext={handleNext} />
        </div>
      </div>
    </div>
  )
}

export default AdminGalleryPage;