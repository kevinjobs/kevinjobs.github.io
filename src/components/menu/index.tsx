import React from 'react';


export interface MenuProps {
  show?: boolean,
  onClick?: any,
  onClickMenu?: any,
  color?: string
}

class MenuButton extends React.Component<MenuProps, any> {
  render() {
    const { onClick, onClickMenu } = this.props;

    return(
      <div
        className="close-button"
        onClick={onClick}
      >
        <div className={this.props.show ? 'first-move child' : 'first child'}>
          <div
            className="grandson"
            style={{backgroundColor: this.props.color || '#000'}}
            onClick={onClickMenu}></div>
        </div>
        <div className={this.props.show ? 'second-move child' : 'second child'}>
          <div
            className="grandson"
            style={{backgroundColor: this.props.color || '#000'}}
            onClick={onClickMenu}></div>
        </div>
        <div className={this.props.show ? 'third-move child' : 'third child'}>
          <div
            className="grandson"
            style={{backgroundColor: this.props.color || '#000'}}
            onClick={onClickMenu}></div>
        </div>
      </div>
    )
  }
}

export default MenuButton;