import React, { useState } from 'react';
import { ImageType } from '../Types';

import { CloseCircleOutlined } from '@ant-design/icons';

type Props = {
  images: ImageType[] | undefined
}

const AdminImage: React.FC<Props> = (props: Props) => {
  const [form, setForm] = useState<ImageType>();

  const style = {
    display: 'flex',
    flexWrap: 'wrap'
  } as React.CSSProperties;

  const itemStyle = {
    width: 150,
    height: 170,
    margin: 10,
    backgroundColor: '#dfdfdf'
  } as React.CSSProperties;

  const editStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    width: 1000,
    height: 800,
    zIndex: 4,
    backgroundColor: '#fff',
    padding: '20px 40px'
  } as React.CSSProperties;

  const formStyle = {
    width: '100%',
  } as React.CSSProperties;

  const openEditPanel = (e: any) => {
    const index: number = e.target.attributes.getNamedItem('data-index').value;
    const { images } = props;
    if (images) {
      setForm(images[index]);
    }
  }

  const onClose = (e: any) => {
    setForm(undefined);
  }

  const handleSubmit = (e: any) => {
    console.log('submit');
    e.preventDefault();
  }

  const handleChange = (e: any) => {
    let key = e.target.name;
    let value = e.target.value;
    if (form) {
      form[key] = value;
      console.log(key, value);
      setForm(form);
    }
  }

  const EditPanel = () => {
    const baseUrl = 'https://mintforge-1252473272.cos.ap-nanjing.myqcloud.com/image/';
    if (form) {
      return(
        <div className="admin-image__edit" style={editStyle}>
          <div style={{textAlign:'right',fontSize:20}} onClick={onClose}>
            <CloseCircleOutlined style={{cursor:'pointer',position:'absolute',top:10,left:10,color:'#a1a1a1'}} />
          </div>
          <form style={formStyle} onSubmit={handleSubmit}>
            <div className="admin-image__edit--item admin-image__edit--base">
              <div><label>标题</label><input value={form?.title} name="title" onChange={handleChange} /></div>
              <div>
                <label>图源</label><input value={form?.source} name="source" onChange={handleChange} />
                <label>作者</label><input value={form?.author} name="author" onChange={handleChange} />
              </div>
              <div>
                <label>分类</label><input value={form?.category} name="category" onChange={handleChange} />
                <label>标签</label><input value={form?.tags} name="tags" onChange={handleChange} />
              </div>
              <div><label>描述</label><input value={form?.desc} name="desc" onChange={handleChange} /></div>
            </div>
            <div className="admin-image__edit--item admin-image__edit--date">
              <label>创建时间</label><input value={form?.create_time} name="create_time" onChange={handleChange} />
              <label>修改时间</label><input value={form?.update_time} name="update_time" onChange={handleChange} />
            </div>
            <div className="admin-image__edit--item admin-image__edit--cameral">
              <div>
                <label>相机制造商</label><input value={form?.manufacturer} name="manufacturer" onChange={handleChange} />
                <label>相机系统版本</label><input value={form?.system_version} name="system_version" onChange={handleChange} />
              </div>
              <div>
                <label>相机镜头</label><input value={form?.cameral_lens} name="cameral_lens" onChange={handleChange} />
                <label>相机型号</label><input value={form?.cameral_model} name="cameral_model" onChange={handleChange} />
              </div>
              <div>
                <label>曝光时间</label><input value={form?.exposure_time} name="exposure_time" onChange={handleChange} />
                <label>ISO</label><input value={form?.iso} name="iso" onChange={handleChange} />
              </div>
              <div>
                <label>高度</label><input value={form?.length} name="length" onChange={handleChange} />
                <label>宽度</label><input value={form?.width} name="width" onChange={handleChange} />
              </div>
            </div>
            <div className="admin-image__edit--item admin-image__edit--location">
              <div>
                <label>海拔</label><input value={form?.altitude} name="altitude" onChange={handleChange} />
                <label>海拔正负</label><input value={form?.altitude_ref} name="altitude_ref" onChange={handleChange} />
              </div>
              <div></div>
              <div>
                <label>经度</label><input value={form?.longitude} name="longitude" onChange={handleChange} />
                <label>经度东西</label><input value={form?.longitude_ref} name="longitude_ref" onChange={handleChange} />
              </div>
              <div>
                <label>纬度</label><input value={form?.latitude} name="latitude" onChange={handleChange} />
                <label>纬度南北</label><input value={form?.latitude_ref} name="latitude_ref" onChange={handleChange} />
              </div>
              <div><label>地点</label><input style={{width:500}} value={form?.position} name="position" onChange={handleChange} /></div>
            </div>
            <div className="admin-image__edit--item admin-image__edit--preview">
              <label>预览图</label>
              <img src={baseUrl + form?.source.replace('JPG','jpg')} alt={form?.title} />
            </div>
            <input type="submit" value="submit" />
          </form>
        </div>
      )
    } else {
      return <></>
    }
  }

  return(
    <div className="admin-image" style={style}>
      {
        props.images?.map((image, index) => {
          const baseUrl = 'https://mintforge-1252473272.cos.ap-nanjing.myqcloud.com/image/';
          return(
            <div className="admin-image__item" key={index} style={itemStyle}>
              <img
                src={baseUrl + image.source.replace('JPG','jpg')}
                alt={image.title || 'noname'}
                style={{objectFit:'cover',width:'100%',height:150}}
              />
              <button data-index={index} onClick={openEditPanel}>Edit</button>
              <button>Delete</button>
            </div>
          )
        })
      }
      { EditPanel() }
    </div>
  )
}

export default AdminImage;