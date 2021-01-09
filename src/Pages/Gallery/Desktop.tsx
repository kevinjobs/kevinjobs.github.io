import React, { createRef } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuButton } from '../../Common';

import './style-d.scss';
import IMG from '../../static/img/cool-background.png';

interface State {
  mask: boolean,
  isMenuOpen: boolean
}

class DesktopGallery extends React.Component<any, State> {
  state: State = {
    mask: false,
    isMenuOpen: false
  }

  private containerRef: any = createRef();

  private handleMouse = (e: any) => {
    e.preventDefault();
    this.setState({mask: !this.state.mask});
  }

  private openMenu = (e: any) => {
    e.preventDefault();
    this.setState({isMenuOpen: !this.state.isMenuOpen})
  }

  private stopScroll = (e: any) => {
    this.state.isMenuOpen
    ? e.preventDefault()
    : e.stopPropagation();
  }

  componentDidMount() {
    document.body.addEventListener('wheel', this.stopScroll, {passive: false});
  }

  render() {
    return(
      <div className="desktop-gallery">

        <div
          className="gallery-navbar"
          style={{height:document.body.clientHeight,display:this.state.isMenuOpen?'':'none'}}
        >
          <ul>
            <li><NavLink to={'home'}>Home</NavLink></li>
            <li><NavLink to={'gallery'}>Gallery</NavLink></li>
            <li><NavLink to={'exam'}>Exam</NavLink></li>
          </ul>
        </div>

        <div className="gallery-container" ref={this.containerRef}>

          <div className="gallery-cover" style={{height: document.body.clientHeight}}>
            <div className="gallery-menu">
              <MenuButton
                onClick={this.openMenu}
                show={this.state.isMenuOpen}
                color='#d1d1d1'
              /></div>
            <img src={IMG} style={{height: document.body.clientHeight}} />
            <div className="moto"><p>我曾见过光 再无法忘记</p></div>
          </div>

          <div className="gallery-category">
            <div className="cates">
              <button>Life</button>
              <button>Life</button>
              <button>Life</button>
              <button>Life</button>
              <button>Life</button>
            </div>
          </div>

          <div className="gallery-box">
            <div className="img-box">
              <img
                onMouseOver={this.handleMouse}
                onMouseOut={this.handleMouse}
                src='https://cdn.sspai.com/2021/01/03/35922638c1ae0add1ba6a14db62f9fac.png?imageMogr2/auto-orient/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708/interlace/1' />
            </div>
            <div className="img-box">
              <img
                onMouseOver={this.handleMouse}
                onMouseOut={this.handleMouse}
                src='https://cdn.sspai.com/2021/01/03/35922638c1ae0add1ba6a14db62f9fac.png?imageMogr2/auto-orient/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708/interlace/1' />
            </div>
            <div className="img-box">
              <img
                onMouseOver={this.handleMouse}
                onMouseOut={this.handleMouse}
                src='https://cdn.sspai.com/2021/01/03/35922638c1ae0add1ba6a14db62f9fac.png?imageMogr2/auto-orient/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708/interlace/1' />
            </div>
            <div className="img-box">
              <img
                onMouseOver={this.handleMouse}
                onMouseOut={this.handleMouse}
                src='https://cdn.sspai.com/2021/01/03/35922638c1ae0add1ba6a14db62f9fac.png?imageMogr2/auto-orient/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708/interlace/1' />
            </div>
            <div className="img-box">
              <img
                onMouseOver={this.handleMouse}
                onMouseOut={this.handleMouse}
                src='https://cdn.sspai.com/2021/01/03/35922638c1ae0add1ba6a14db62f9fac.png?imageMogr2/auto-orient/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708/interlace/1' />
            </div>
            <div className="img-box">
              <img
                onMouseOver={this.handleMouse}
                onMouseOut={this.handleMouse}
                src='https://cdn.sspai.com/2021/01/03/35922638c1ae0add1ba6a14db62f9fac.png?imageMogr2/auto-orient/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708/interlace/1' />
            </div>
            <div className="img-box">
              <img
                onMouseOver={this.handleMouse}
                onMouseOut={this.handleMouse}
                src='https://cdn.sspai.com/2021/01/03/35922638c1ae0add1ba6a14db62f9fac.png?imageMogr2/auto-orient/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708/interlace/1' />
            </div>
            <div className="img-box">
              <img
                onMouseOver={this.handleMouse}
                onMouseOut={this.handleMouse}
                src='https://cdn.sspai.com/2021/01/03/35922638c1ae0add1ba6a14db62f9fac.png?imageMogr2/auto-orient/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708/interlace/1' />
            </div>
            <div className="img-box">
              <img
                onMouseOver={this.handleMouse}
                onMouseOut={this.handleMouse}
                src='https://cdn.sspai.com/2021/01/03/35922638c1ae0add1ba6a14db62f9fac.png?imageMogr2/auto-orient/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708/interlace/1' />
            </div>
            <div className="img-box">
              <img
                onMouseOver={this.handleMouse}
                onMouseOut={this.handleMouse}
                src='https://cdn.sspai.com/2021/01/03/35922638c1ae0add1ba6a14db62f9fac.png?imageMogr2/auto-orient/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708/interlace/1' />
            </div>
            <div className="img-box">
              <img
                onMouseOver={this.handleMouse}
                onMouseOut={this.handleMouse}
                src='https://cdn.sspai.com/2021/01/03/35922638c1ae0add1ba6a14db62f9fac.png?imageMogr2/auto-orient/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708/interlace/1' />
            </div>
            <div className="img-box">
              <img
                onMouseOver={this.handleMouse}
                onMouseOut={this.handleMouse}
                src='https://cdn.sspai.com/2021/01/03/35922638c1ae0add1ba6a14db62f9fac.png?imageMogr2/auto-orient/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708/interlace/1' />
            </div>
          </div>

          <div className="gallery-loadmore">
            <button>Load More...</button>
          </div>
        </div>
        <div className="mask" style={{display:this.state.isMenuOpen?'':'none',zIndex:2}}></div>
      </div>
    )
  }
}

export default DesktopGallery;