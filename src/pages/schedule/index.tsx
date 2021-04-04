import React from 'react';
import dayjs from 'dayjs';
import { Button, Icon } from '@/components';
import { ITodo, TodoApi } from '@/apis';

export interface ScheduleProps {
  todos: ITodo[]
};

export const findItemById = (arr: any[], id: string) => {
  return arr.findIndex((item: any) => {
    return Object.is(item.id, id)
  })
}

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

const SchedulePage: React.FC<ScheduleProps> = props => {
  const [todayTodos, setTodayTodos] = React.useState<ITodo[]>(props.todos);
  const [futureTodos, setFutureTodos] = React.useState<ITodo[]>(props.todos);
  const [historyTodos, setHistoryTodos] = React.useState<ITodo[]>(props.todos);
  const [notyetTodos, setNotyetTodos] = React.useState<ITodo[]>(props.todos);
  const [doneTodos, setDoneTodos] = React.useState<ITodo[]>(props.todos);

  const [sync, setSync] = React.useState(0);
  const [float, setFloat] = React.useState<ITodo>();
  const [showHistory, setShowHistory] = React.useState(false);

  React.useEffect(() => {
    const today = dayjs().format('YYYY-MM-DD');

    TodoApi.getList().then(res => {
      if (res.status === 200) {
        if (res.data.code === 1) {
          const items = res.data.data;

          const todayTodoss: ITodo[] = [];
          const futureTodoss: ITodo[] = [];
          const historyTodoss: ITodo[] = [];
          const notyetTodoss: ITodo[] = [];
          const doneTodoss: ITodo[] = [];

          items.map((item: ITodo) => {
            if (item.status === 'done') {
              doneTodoss.push(item);
            } else {
              if (item.date) {
                if (dayjs(item.date).isSame(today, 'day')) {
                  todayTodoss.push(item);
                } else if (dayjs(item.date).isBefore(today, 'day')) {
                  historyTodoss.push(item);
                } else if (dayjs(item.date).isAfter(today, 'day')) {
                  futureTodoss.push(item);
                }
              } else {
                notyetTodoss.push(item);
              }
            }
          });

          setTodayTodos(todayTodoss);
          setFutureTodos(futureTodoss);
          setHistoryTodos(historyTodoss);
          setNotyetTodos(notyetTodoss);
          setDoneTodos(doneTodoss);
        }
      }
    })
  }, [sync, float])

  const handleCheck = (e: any, item: ITodo, flag: string = '') => {
    const { _id, status } = item;
    
    if (flag === '') {
      if (status === 'done') {
        item.status = 'todo';
      } else {
        item.status = 'done';
      }
    } else {
      item.status = flag;
    }
    
    // const result = findItemById(todos, _id);
    // todos.splice(result, 1, item);
    // setTodos(todos);

    TodoApi.putById(_id, item).then(res => {
      if (res.status === 200) {
        if (res.data.code === 1) {
          setSync(Math.random());
        }
      }
    })

    setFloat(undefined);
  }

  const handleAdd = (e: any) => {
    console.log(e);
  }

  const handleView = (e: any, item: ITodo) => {
    setFloat(item);
  }

  const putTodoSync = (item: ITodo) => {
    const { _id } = item;

    TodoApi.putById(_id, item).then(res => {
      if (res.status === 200) {
        if (res.data.code === 1) {
          setSync(Math.random());
        }
      }
    })
  }

  const renderItem = (item: ITodo, index: number) => {
    return (
      <div className={`todo-item ${item.status}`} key={index}>
        <span className="todo-check" onClick={e => handleCheck(e, item)}>
          <span className="check" style={{visibility: item.status === 'done' ? 'visible' : 'hidden' }}>
            { checkIcon }
          </span>
        </span>
        <span onClick={e => handleView(e, item)}>{ item.title }</span>
      </div>
    )
  }

  const renderFloat = (item: ITodo) => {
    const { status } = item;

    let todoClassname: string = 'status-todo status-item ';
    let doneClassname: string = 'status-done status-item ';
    let deleteClassname: string = 'status-delete status-item ';

    switch (status) {
      case 'todo':
        todoClassname += 'selected';
        break;
      case 'done':
        doneClassname += 'selected';
        break;
      case 'delete':
        deleteClassname += 'selected';
        break;
    }
    
    return (
      <div className="schedule-float">
        <div className="mask" onClick={e => setFloat(undefined)}></div>
        <div className="container">
          <div className="title item">
            <input
              name="title"
              value={item.title}
              onChange={e => {
                const value = e.target.value;
                if (value) item.title = value;
                else item.title = '';
                setFloat(item);
                setSync(Math.random());
              }}
            />
          </div>
          <div className="status item">
            <span>状态: </span>
            <span className={todoClassname} onClick={e => {
              item.status = 'todo';
              setFloat(item);
              setSync(Math.random());
            }}>todo</span>
            <span className={doneClassname} onClick={e => {
              item.status = 'done';
              setFloat(item);
              setSync(Math.random());
            }}>done</span>
            <span className={deleteClassname} onClick={e => {
              item.status = 'delete';
              setFloat(item);
              setSync(Math.random());
            }}>delete</span>
          </div>
          <div className="date item">
            计划时间: 
            <input
              type="date"
              value={item.date}
              onChange={e => {
                const value = e.target.value;
                if (value) item.date = value;
                else item.date = '';
                setFloat(item);
                setSync(Math.random);
              }}
            />
            <span
              className="unset-date"
              onClick={e => {
                item.date = '';
                setFloat(item);
                setSync(Math.random);
              }}
            >
              <Icon icon="times-circle" theme="dark" />
            </span>
          </div>
          <div className="desc item">
            描述: { item.desc }
          </div>
          <div className="operate">
            <Button type="primary" onClick={e => {
              putTodoSync(item);
              setFloat(undefined);
            }}>好</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="schedule-page">
        <div className="container">
          <div className="todo-list">
            <div className="today day">
              <div className="header">
                <h2>今 天</h2>
              </div>
              { todayTodos.map(renderItem) }
            </div>
            <div className="future day">
              <div className="header">
                <h2>将 来</h2>
              </div>
              { futureTodos.map(renderItem) }
            </div>
            <div className="done day">
              <div className="header">
                <h2>已 完 成</h2>
              </div>
              { doneTodos.map(renderItem) }
            </div>
            <div className="notyet day">
              <div className="header">
                <h2>收 集 箱</h2>
              </div>
              { notyetTodos.map(renderItem) }
            </div>
            <div className="show-history day" onClick={e => setShowHistory(!showHistory)}>
              <p>{ showHistory ? '隐藏' : '显示' }已过期的计划</p>
            </div>
            <div className="history day" style={{display: showHistory ? '' : 'none'}}>
              <div className="header">
                <h2>已 过 期</h2>
              </div>
              { historyTodos.map(renderItem) }
            </div>
          </div>
        </div>
        <div className="schedule-add" onClick={handleAdd}>
          <Icon icon="plus-circle" style={{fontSize: 40, color: '#555'}}/>
        </div>
      </div>
      { float && renderFloat(float) }
    </>
  )
}

SchedulePage.defaultProps = {
  todos: [
    {
      title: '',
      status: '',
      _id: 'sdfsdfsdf'
    }
  ]
}

export default SchedulePage;