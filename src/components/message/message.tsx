import React from 'react';
import { Info, Success, Remind, Caution } from '@icon-park/react';

export type MessageType = 'info' | 'success' | 'danger' | 'warning';

export interface MessageProps {
  text: string,
  type: MessageType
}

const Message: React.FC<MessageProps> = (props: MessageProps) => {
  const { text, type } = props;

  const renderHeader = (type: MessageType): React.ReactElement => {
    let icon;

    switch (type) {
      case 'info':
        icon = <Info theme="filled" fill="#FBC02D" size="20" />;
        break;
      case 'success':
        icon = <Success theme="filled" fill="#52c41a" size="20" />;
        break;
      case 'danger':
        icon = <Caution theme="filled" fill="#f5222d" size="20" />;
        break;
      case 'warning':
        icon = <Remind theme="filled" fill="#fa8c16" size="20" />;
        break;
      default:
        icon = <Info theme="filled" fill="#FBC02D" size="20" />;
        break
    }

    return <div className="header">{ icon }</div>;
  }

  return (
    <div className="mint-message-content">
      { renderHeader(type) }
      <div className="text"><p>{ text }</p></div>
    </div>
  )
}

export default Message;