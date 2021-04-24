import * as React from 'react';
import { Table, Modal, Search, Tag, message } from '@/components';
import { PostApi, IPost, ITag } from '@/apis';
import dayjs from 'dayjs';

export const MissivePage: React.FC = props => {
  const [current, setCurrent] = React.useState();
  const [visible, setVisible] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [listData, setListData] = React.useState<any[]>([]);

  const handleSelect = (e: any) => {
    setCurrent(e.target.dataset['content']);
    setVisible(true);
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(searchValue);
    PostApi.getPostList(1,9,'article',{keyword: searchValue})
      .then(res => {
        if (res.data.code === 1) {
          const items = renderTableData(res.data.data['items']);
          setListData(items);
        } else {
          message({type: 'warning', text: res.data.msg})
        }
      });
  }

  React.useEffect(() => {
    PostApi.getPostList(1,9,'article',{keyword: '的'}).then(res => {
      const items = renderTableData(res.data.data['items']);
      setListData(items);
    })
  }, []);

  const renderTableData = (items: IPost[]) => {
    const newItems = items.map((item: any) => {
      let newItem = item;
      newItem['cover'] = (
        <img
          src={item['cover']}
          alt={item['title']}
          style={{width: 200, objectFit: 'cover'}}
        />
      )
      // 绘制 tag
      newItem['tags'] = item['tags'].map((tag: ITag) => <Tag theme="red">{tag.name}</Tag>);
      // 转换时间
      newItem['create_at'] = dayjs(item['create_at']).format('YYYY-MM-DD HH:mm:ss');
      newItem['update_at'] = dayjs(item['update_at']).format('YYYY-MM-DD HH:mm:ss');
      // 处理 content
      newItem['content'] = (
        <div
          data-content={item['content']}
          onClick={handleSelect}
          style={{cursor:'pointer',whiteSpace:'nowrap',textOverflow:'ellipsis',width:300,overflow:'hidden'}}
          >{ item['content'] }</div>
      )
      return newItem
    });

    return newItems;
  }

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
                onEnter={handleSearch}
              >查找句子</Search>
            </div>
            <div className="content">
              <Table data={listData} />
            </div>
          </div>
        </div>
      </div>
      <Modal title="test" content={current} visible={visible} onClose={e => setVisible(false)} />
    </div>
  )
}