import * as React from 'react';
import { Table, Modal, Search } from '@/components';
import { PostApi, IPost } from '@/apis';

export const MissivePage: React.FC = props => {
  const [current, setCurrent] = React.useState();
  const [visible, setVisible] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [listData, setListData] = React.useState([]);

  const handleSelect = (e: any) => {
    setCurrent(e.target.dataset['content']);
    setVisible(!visible);
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(searchValue);
    PostApi.getPostList(1,9,'article',{keyword: '尘'})
      .then(res => {
        setListData(res.data.data.items);
      });
  }

  React.useEffect(() => {
    PostApi.getPostList(1,9,'article',{keyword: ''})
      .then(res => {
        setListData(res.data.data.items);
      });
  }, []);

  return (
    <div className="missive-page">
      <div className="missive-container">
        <div className="left">
          <div className="header"></div>
          <div className="items">
            <div className="item">News</div>
            <div className="item">好文</div>
            <div className="item">好词</div>
            <div className="item">好构</div>
          </div>
        </div>
        <div className="right">
          <div className="header">
            <h3 className="title">查看</h3>
          </div>
          <div className="container">
            <div className="search">
              <Search
                value={searchValue}
                name="kw"
                placeholder="请输入关键词进行检索"
                onChange={handleSearchChange}
                onSearch={handleSearch}
              >查找句子</Search>
            </div>
            <div className="content">
              <Table data={listData} />
            </div>
          </div>
        </div>
      </div>
      <Modal title="test" content={current} visible={visible} />
    </div>
  )
}