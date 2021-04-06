import React from 'react';
import Schedule from './schedule';
import { ITodo, TodoApi } from '@/apis';
import { Icon, Transition } from '@/components';

const SchedulePage: React.FC = () => {
  const [todos, setTodos] = React.useState<ITodo[]>();
  const [day, setDay] = React.useState(0);
  const [sync, setSync] = React.useState(0);
  const [menuShow, setMenuShow] = React.useState(false);
  const [newTodo, setNewTodo] = React.useState<ITodo>();
  const [inputSwitch, setInputSwitch] = React.useState(false);
  const [inputDate, setInputDate] = React.useState<string>();

  const ref: any = React.useRef();

  const menus = [
    '收集箱',
    '今日待办',
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
    _id && updateTodoItem(_id, item);
  }

  const handleChange = (e: any) => {
    const value = e.target.value;
    const anew: ITodo = {
      title: value,
      status: 'todo'
    }
    setNewTodo(anew);
  }

  const handleSubmit = (e: any) => {
    const text = ref.current.innerText;
    const form: ITodo = {
      title: text,
      status: 'todo',
      date: inputDate
    }
    TodoApi.postNew(form).then(res => {
      if (res.data.code === 1) setSync(Math.random());
    });
    setInputSwitch(false);
  }

  const handleInputClick = (e: any) => {
    setInputSwitch(true);
  }

  const updateTodoItem = (id: string, item: ITodo) => {
    TodoApi.putById(id, item).then(res => {
      if (res.data.code === 1) setSync(Math.random());
    })
  }

  const renderMenuItem = (item: string, index: number) => {
    let titleColor;
    if (item === '已过期') titleColor = '#dd4b39';
    else if (item === '已完成') titleColor = '#aaaaaa';

    return (
      <div
        className="menu-item"
        key={index}
        onClick={e => {
          setDay(menus.indexOf(item));
          setMenuShow(false);
      }}>
        <h3 style={{color: titleColor}}>{ item }</h3>
      </div>
    )
  }

  const renderNormalInput = (
    <span className="input">
      <span className="plus">
        <Icon icon="plus" style={{fontSize: 20, color: '#dd4b39'}} />
      </span>
      <input
        type="text"
        name="new-todo"
        value={newTodo?.title}
        placeholder="添加一个任务"
        onChange={handleChange}
        onClick={handleInputClick}
      />
    </span>
  )

  const renderSubmitButton = (
    <>
      <span
        className="confirm"
        role="button"
        onClick={handleSubmit}
      >添加任务</span>
      <span onClick={e => setInputSwitch(false)}>取消</span>
    </>
  )

  const renderRichInput = (
    <div className="rich-input">
      <div
        className="text"
        contentEditable
        placeholder="请输入待办事项"
        ref={ref}></div>
      <input
        type="date"
        value={inputDate}
        className="date"
        onChange={e => {
          const d = e.target.value;
          console.log(d);
          setInputDate(d);
        }}
      />
    </div>
  )

  return (
    <div className="schedule">
      <Transition in={menuShow} animation="SlideInLeft" timeout={500} className="schedule-slide">
        <div>
          <div className="header">
            <div className="close" onClick={e => setMenuShow(!menuShow)}>
              <Icon icon="times" style={{color: '#555'}} />
            </div>
          </div>
          <div className="menus">
            { menus.map(renderMenuItem) }
          </div>
        </div>
      </Transition>
      <Schedule
        todos={todos}
        onClick={handleClick}
        title={menus[day]}
        onOpenMenu={(e: any) => {
          setMenuShow(!menuShow)
        }}/>
      <div className="schedule-add">
        <div className="container">
          { inputSwitch ? renderRichInput : renderNormalInput }
          <div className="operate">
            { inputSwitch && renderSubmitButton }
          </div>
        </div>
      </div>
      <Transition
        in={menuShow}
        animation="FadeInOut"
        timeout={500}
        className="schedule-mask"
      ><div></div></Transition>
    </div>
  )
}

export default SchedulePage;