import React from 'react';


export interface MenuProps {
  show?: boolean,
  onClick?: any,
  color?: string
}

interface State {
  delayShow: boolean;
}

class MenuButton extends React.Component<MenuProps, State> {
  state: State = {
    delayShow: false
  }

  render() {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      const { onClick } = this.props;
      if (onClick) {
        (onClick as React.MouseEventHandler<HTMLDivElement>)(e);
      }
    }

    return(
      <div
        className="close-button"
        onClick={handleClick}
      >
        <div className={this.props.show ? 'first-move child' : 'first child'}>
          <div
            className="grandson"
            style={{backgroundColor: this.props.color || '#000'}}
            onClick={handleClick}></div>
        </div>
        <div className={this.props.show ? 'second-move child' : 'second child'}>
          <div
            className="grandson"
            style={{backgroundColor: this.props.color || '#000'}}
            onClick={handleClick}></div>
        </div>
        <div className={this.props.show ? 'third-move child' : 'third child'}>
          <div
            className="grandson"
            style={{backgroundColor: this.props.color || '#000'}}
            onClick={handleClick}></div>
        </div>
      </div>
    )
  }
}

export default MenuButton;