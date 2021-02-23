import React from 'react';
import ReactDOM from 'react-dom';
import { TransitionGroup } from 'react-transition-group';
import Message, { MessageType } from './message';
import Transition from '@/components/transition';

export interface Notice {
  text: string;
  key: string;
  type: MessageType,
  duration: number
}

let seed = 0;
const now = Date.now();
const getUuid = (): string => {
  const id = seed;
  seed += 1;
  return `MESSAGE_${now}_${id}`;
}

let add: (notice: Partial<Notice>) => void;

export const MessageContainer = () => {
  const [notices, setNotices] = React.useState<Partial<Notice>[]>([]);
  const maxCount = 5;

  const remove = (notice: Partial<Notice>) => {
    const { key } = notice;

    setNotices((prevNotices) => (
      prevNotices.filter(({ key: itemKey}) => key !== itemKey)
    ));
  }

  add = (notice: Partial<Notice>) => {
    const duration = notice.duration || 3 * 1000;

    console.log(notice.key);

    setNotices((prevNotices) => [...prevNotices, notice]);

    setTimeout(() => {
      remove(notice)
    }, duration);
  }

  React.useEffect(() => {
    if (notices.length > maxCount) {
      const [firstNotice] = notices;
      remove(firstNotice)
    }
  }, [notices]);

  return (
    <div className="mint-message">
      <TransitionGroup>
        {
          notices.map(({ text, key, type}) => (
            <Transition
              timeout={1000}
              in
              animation="SlideInTop"
              key={key}
            >
              <Message text={text || 'notext'} type={type || 'info'}/>
            </Transition>
          ))
        }
      </TransitionGroup>
    </div>
  )
}

let el = document.querySelector('#mint-message-wrapper');
if (!el) {
  el = document.createElement('div');
  el.className = 'mint-message-wrapper';
  el.id = 'mint-message-wrapper';
  document.body.append(el);
}

ReactDOM.render(<MessageContainer />, el);

const api = (notice: Partial<Notice>) => {
  const result: Partial<Notice> = notice;
  result.key = getUuid();
  add(result);
}

export default api;