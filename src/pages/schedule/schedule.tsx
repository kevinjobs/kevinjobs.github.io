import React from 'react';
import dayjs from 'dayjs';
import { ITodo } from '@/apis';
import { Icon } from '@/components';

export interface ScheduleTodayProps {
  todos?: ITodo[],
  onClick?: any,
  onOpenMenu?: any,
  title?: string
}

const ScheduleToday: React.FC<ScheduleTodayProps> = props => {
  const { todos, onClick, onOpenMenu, title } = props;

  const renderItem = (item: ITodo, index: number) => {
    const { date, status } = item;
    let itemClass = `todo-item ${status}`;

    const today = dayjs();

    const itemDOM = (
      <div className={itemClass} key={index}>
        <div style={{width: '100%', display: 'flex', alignItems: 'center'}}>
          <span className="check-circle" onClick={e => onClick(e, item, 'done')}>
            <div className="check">
              <Icon icon="check" style={{color: '#777777'}}/>
            </div>
          </span>
          <span className="title" onClick={e => onClick(e, item, 'delete')}>
            { item.title }
          </span>
        </div>
        <div className="date">{ item.date }</div>
      </div>
    )

    if (title === '收集箱' && !date) {
      return itemDOM
    } else if (title !== '收集箱' && title === '已完成' && status === 'done') {
      return itemDOM
    } else if (date && date !== '') {
      switch (title) {
        case '今日待办':
          if (dayjs(date).isSame(today, 'day')) return itemDOM;
          break;
        case '已过期':
          if (dayjs(date).isBefore(today, 'day')) return itemDOM;
          break;
        case '将来':
          if (dayjs(date).isAfter(today, 'day')) return itemDOM;
          break;
      }
    }
  }

  return (
    <div className="schedule-today schedule-page">
      <div className="header">
        <h2 onClick={onOpenMenu}>{title}</h2>
        <span>
          <Icon icon="caret-right"
            theme="dark"
            style={{fontSize:28}} />
        </span>
      </div>
      <div className="container">
        <div className="todo-list">
          { todos && todos.map(renderItem) }
        </div>
      </div>
    </div>
  )
}

export default ScheduleToday;