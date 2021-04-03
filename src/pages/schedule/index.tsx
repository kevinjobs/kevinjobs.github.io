import React from 'react';

export interface ScheduleProps {};

export interface ITodo {
  title: string,
  start?: Date,
  doing?: Date,
  end?: Date,
  done?: boolean
}

const SchedulePage: React.FC<ScheduleProps> = props => {
  const [checkStatus, setCheckStatus] = React.useState('hidden');

  const checkIcon = (
    <svg width="24" height="24">
      <path
        fill="currentColor"
        d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03
        -.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45
         0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z">
      </path>
    </svg>
  )

  const mockItesm: ITodo[] = [
    {
      title: "去海边搞点薯条",
      start: new Date(),
    },
    {
      title: "去海边搞点薯条",
      start: new Date(),
    },
    {
      title: "去海边搞点薯条",
      start: new Date(),
    }
  ]

  const handleCheck = (e: any) => {
    if (checkStatus === 'hidden') {
      setCheckStatus('visible');
    } else {
      setCheckStatus('hidden');
    }
  }

  const renderItem = (item: ITodo, index: number) => {
    return (
      <div className="todo-item" key={index}>
        <span className="todo-check" onClick={handleCheck}>
          <span className="check" style={{visibility: checkStatus === 'hidden' ? 'hidden' : 'visible' }}>
            { checkIcon }
          </span>
        </span>
        <span>{ item.title }</span>
      </div>
    )
  }

  return (
    <div className="schedule-page">
      <div className="container">
        <div className="todo-list">
          <div className="today">
            { mockItesm.map(renderItem) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchedulePage;