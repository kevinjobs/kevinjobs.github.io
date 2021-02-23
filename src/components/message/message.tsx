import './_style.scss';
import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Icon from '@/components/Icon';

export type MessageType = 'info' | 'success' | 'danger' | 'warning';

export interface MessageProps {
  text: string,
  type: MessageType
}

const Message: React.FC<MessageProps> = (props: MessageProps) => {
  const { text, type } = props;

  const renderHeader = (type: MessageType): React.ReactElement => {
    let icon: IconProp;

    switch (type) {
      case 'info':
        icon = 'circle-notch';
        break;
      case 'success':
        icon = 'check-circle';
        break;
      case 'danger':
        icon = 'times';
        break;
      case 'warning':
        icon = "exclamation";
        break;
      default:
        icon = 'info';
        break
    }

    return (
      <div className="header">
        <Icon icon={icon} theme={type} />
      </div>
    )
  }

  return (
    <div className="mint-message-content">
      { renderHeader(type) }
      <div className="text"><p>{ text }</p></div>
    </div>
  )
}

export default Message;