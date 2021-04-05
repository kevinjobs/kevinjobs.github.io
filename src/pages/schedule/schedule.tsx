import React from 'react';
import { ITodo } from '@/apis';
import { Icon } from '@/components';

export interface ScheduleTodayProps {
  todos?: ITodo[],
  onClick?: any,
  title?: string
}

const ScheduleToday: React.FC<ScheduleTodayProps> = props => {
  const { todos, onClick, title } = props;

  const renderItem = (item: ITodo, index: number) => {
    let itemClass = `todo-item ${item.status}`;

    return (
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
  }

  return (
    <div className="schedule-today schedule-page">
      <div className="header">
        <h3>{title}</h3>
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