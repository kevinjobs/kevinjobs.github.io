import React from 'react';
import ReactDOM from 'react-dom';
import { Motion, spring } from 'react-motion';
import { CloseSmall } from '@icon-park/react';

export interface ModalProps {
  title?: string,
  content?: string,
  visible?: boolean,
  onClose: React.MouseEventHandler<HTMLDivElement> 
};

export const Modal: React.FC<ModalProps> = props => {
  const { title, content, visible, onClose } = props;
  const [modalVisible, setModalVisible] = React.useState(visible);
  const [iconColor, setIconColor] = React.useState('#333');

  const handleIconHover = (e: any) => {
    if (iconColor === '#333') {
      setIconColor('#1890ff');
    } else {
      setIconColor('#333');
    }
  }

  const renderModal = () => (
    <div className="mint-modal" style={{display: modalVisible ? 'flex' : 'none'}}>
      <div className="mint-modal-mask" onClick={onClose}></div>
      <Motion style={{x: spring(modalVisible ? 1 : 0)}}>
        {
          ({x}) => (
            <div className="mint-modal-container" style={{transform: `scale(${x})`}}>
              <div className="header">
                <div className="title">{ title }</div>
                <div className="close"
                  onClick={onClose}
                  onMouseEnter={handleIconHover}
                  onMouseLeave={handleIconHover}>
                  <CloseSmall theme="outline" size="24" fill={iconColor} />
                </div>
              </div>
              <div className="content">{ content }</div>
            </div>
          )
        }
      </Motion>
    </div>
  )

  React.useEffect(() => {
    let el = document.querySelector('#mint-modal-wrapper');
    if (!el) {
      el = document.createElement('div');
      el.className = 'mint-modal-wrapper';
      el.id = 'mint-modal-wrapper';
      document.body.append(el);
    }

    ReactDOM.render(renderModal(), el);
  }, [modalVisible, iconColor]);

  React.useEffect(() => {
    setModalVisible(visible);
  }, [visible]);

  return <></>;
}