import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuButton } from '../../Components';
import { getImages } from '../../Apis/image';
import { ImageType } from '../Types';

import './style.scss';

interface State {
  mask: boolean,
  isMenuOpen: boolean,
  images: ImageType[],
  page: number,
  limit: number
}

class DesktopGallery extends React.Component<any, State> {
  state: State = {
    mask: false,
    isMenuOpen: false,
    images: [],
    page: 2,
    limit: 8
  }

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

  private loadmore = (e: any) => {
    // e.preventDefault();
    getImages(this.state.page, this.state.limit).then(res => {
      this.setState({images: this.state.images.concat(res.data.data.items)})
    })
    this.setState({page: this.state.page + 1});
  }

  componentDidMount() {
    document.body.addEventListener('wheel', this.stopScroll, {passive: false});
    document.body.addEventListener('touchmove', this.stopScroll, {passive: false});
    getImages(1,this.state.limit).then(res => {
      this.setState({images: res.data.data.items});
      // console.log(res.data.data);
    })
  }

  componentWillUnmount() {
    document.body.removeEventListener('wheel', this.stopScroll);
    document.body.removeEventListener('touchmove', this.stopScroll);
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

        <div className="gallery-container">

          <div className="gallery-cover" style={{height: document.body.clientHeight}}>
            <div className="gallery-menu">
              <MenuButton
                onClick={this.openMenu}
                show={this.state.isMenuOpen}
                color='#d1d1d1'
              /></div>
            <img
              alt='background'
              src='https://mintforge-1252473272.cos.ap-nanjing.myqcloud.com/image/background.png'
              style={{height: document.body.clientHeight}}
            />
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
            {
              this.state.images.map((image, index) => {
                const baseUrl = 'https://mintforge-1252473272.cos.ap-nanjing.myqcloud.com/image/';
                // console.log(this.state.images[0])
                return(
                  <div
                    className="img-box"
                    key={index}
                    onMouseOver={this.handleMouse}
                    onMouseOut={this.handleMouse}
                    style={{backgroundImage:`url(${baseUrl + image.source.replace('JPG', 'jpg')})`}}
                  >
                    <div className="img-box-content fade-in">
                      <h2>{image.title || 'No title'}</h2>
                      <p>{image.position || 'Unkown Location'}</p>
                      <p>{image.manufacturer || 'Unkown Manufacturer'}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div className="gallery-loadmore">
            <button onClick={this.loadmore}>Load More...</button>
          </div>
        </div>
        <div className="mask" style={{display:this.state.isMenuOpen?'':'none',zIndex:2}}></div>
      </div>
    )
  }
}

export default DesktopGallery;