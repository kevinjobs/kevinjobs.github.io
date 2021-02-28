import React from 'react';
import { getPostList, patchById, postNew } from '@/apis/post';
import { Pagination, message } from '@/components';
import Editor from './editor';
import { ImageInterface } from '@/types';

const AdminGalleryPage: React.FC = () => {
  const [imageList, setImageList] = React.useState<any []>();
  const [selectedImg, setSelectedImg] = React.useState<ImageInterface>();
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

  const handleSubmitForm = (e: any) => {
    const articleForm = JSON.parse(e.target.dataset.form);
    const submitForm = JSON.parse(JSON.stringify(articleForm));
    delete submitForm['id'];
    delete submitForm['create_at'];
    delete submitForm['update_at'];
    delete submitForm['exif'];

    submitForm['exif'] = JSON.stringify(articleForm['exif']);

    if (articleForm && articleForm.id) {
      patchById(articleForm.id, submitForm)
        .then(res => {
          if (res.status === 200 && res.data.code === 1) {
            alert('update success');
          }
          setSelectedImg(undefined);
        }).catch(err => console.log(err));
    } else {
      postNew(submitForm)
        .then(res => {
          if (res.status === 200 && res.data.code === 1) {
            alert('post success');
          }
          setSelectedImg(undefined);
        }).catch(err => alert(err));
    }
  }

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
        <img
          src={baseurl + item.cover.replace('JPG', 'jpg')}
          alt={item.title}
          onClick={e => setSelectedImg(item)}
        />
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
      {
        selectedImg &&
          <Editor
            post={selectedImg}
            onSubmit={handleSubmitForm}
            onCancel={(e: any) => setSelectedImg(undefined)} />
      }
    </div>
  )
}

export default AdminGalleryPage;