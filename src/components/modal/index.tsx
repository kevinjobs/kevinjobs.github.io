import React, { HTMLAttributes } from 'react';
import ReactDOM from 'react-dom';
import { Motion, spring } from 'react-motion';
import Draggable from 'react-draggable';
import { CloseSmall } from '@icon-park/react';

export type ModalProps = {
  title?: string,
  content?: string,
  visible?: boolean,
  onClose: React.MouseEventHandler<HTMLDivElement> 
} & HTMLAttributes<any>;

export const Modal: React.FC<ModalProps> = props => {
  const { title, content, visible, children, onClose, ...rest } = props;

  const [modalVisible, setModalVisible] = React.useState(visible);
  const [iconColor, setIconColor] = React.useState('#555');

  // 渲染模态框主要部分
  const renderModal = React.useCallback(() => (
    <div className="mint-modal" style={{display: modalVisible ? 'flex' : 'none'}} {...rest}>
      <Draggable>
        <div className="mint-draggable-wrapper">
          <Motion style={{x: spring(modalVisible ? 1 : 0)}}>
            {
              ({x}) => (
                <div className="mint-modal-container" style={{transform: `scale(${x})`}}>
                  <div className="header">
                    <div className="title">{ title }</div>
                  </div>
                  <div className="close"
                    onClick={onClose}
                    onMouseEnter={e => setIconColor('#1890ff')}
                    onMouseLeave={e => setIconColor('#555')}>
                    <CloseSmall theme="outline" size="24" fill={iconColor} />
                  </div>
                  <div className="content">{ children || content }</div>
                </div>
              )
            }
          </Motion>
        </div>
      </Draggable>
    </div> 
  ), [children, content, iconColor, modalVisible, onClose, rest, title])

  // 渲染模态框
  React.useEffect(() => {
    let el = document.querySelector('#mint-modal-wrapper');
    if (!el) {
      el = document.createElement('div');
      el.className = 'mint-modal-wrapper';
      el.id = 'mint-modal-wrapper';
      document.body.append(el);
    }
    ReactDOM.render(renderModal(), el);
  }, [modalVisible, iconColor, renderModal]);

  React.useEffect(() => {
    setModalVisible(visible);
  }, [visible]);

  return <></>;
}