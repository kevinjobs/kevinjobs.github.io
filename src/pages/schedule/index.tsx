import React from 'react';
import { ITodo, TodoApi } from '@/apis';
import Schedule from './schedule';
import { Icon, Transition } from '@/components';

const SchedulePage: React.FC = () => {
  const [todos, setTodos] = React.useState<ITodo[]>();
  const [day, setDay] = React.useState(0);
  const [sync, setSync] = React.useState(0);
  const [menuShow, setMenuShow] = React.useState(false);

  const menus = [
    '今日待办',
    '收集箱',
    '将来',
    '已过期',
    '已完成'
  ]

  React.useEffect(() => {
    TodoApi.getList().then(res => {
      if (res.data.code === 1) {
        setTodos(res.data.data);
      }
    })
  }, [sync])

  const handleClick = (e: any, item: ITodo, flag: string) => {
    const { _id, status } = item;
    if (status === flag) item.status = 'todo';
    else item.status = flag;
    updateTodoItem(_id, item);
  }

  const updateTodoItem = (id: string, item: ITodo) => {
    TodoApi.putById(id, item).then(res => {
      if (res.data.code === 1) setSync(Math.random());
    })
  }

  const renderMenuItem = (item: string, index: number) => {
    return (
      <div
        className="menu-item"
        key={index}
        onClick={e => {
          setDay(menus.indexOf(item));
          setMenuShow(false);
      }}>
        <h3>{ item }</h3>
      </div>
    )
  }

  return (
    <div className="schedule">
      <Transition in={menuShow} animation="SlideInLeft" timeout={500} className="schedule-slide">
        <div>
          <div className="header">
            <div className="close" onClick={e => setMenuShow(!menuShow)}>
              <Icon icon="times" theme="dark" />
            </div>
          </div>
          <div className="menus">
            { menus.map(renderMenuItem) }
          </div>
        </div>
      </Transition>
      <div className="header">
        <Icon
          icon="bars"
          onClick={e => setMenuShow(!menuShow)}
          style={{fontSize: 20, color: '#555555'}} />
      </div>
      <Schedule todos={todos} onClick={handleClick} title={menus[day]} />
    </div>
  )
}

export default SchedulePage;