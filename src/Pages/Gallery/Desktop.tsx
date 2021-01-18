import React, { createRef } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuButton } from '../../Components';
import { getImages } from '../../Apis/image';
import { ImageType } from '../Types';

import Masonry from './Masonry';

import './style.scss';
import { message } from 'antd';

interface Props {
  columns: number,
  gutter: number
}

interface State {
  mask: boolean,
  isMenuOpen: boolean,
  images: ImageType[],
  page: number,
  limit: number
}

class DesktopGallery extends React.Component<Props, State> {
  state: State = {
    mask: false,
    isMenuOpen: false,
    images: [],
    page: 2,
    limit: 8
  }

  private ref: any = createRef();

  private openMenu = (e: any) => {
    e.preventDefault();
    this.setState({isMenuOpen: !this.state.isMenuOpen})
  }

  private stopScroll = (e: any) => {
    this.state.isMenuOpen
    ? e.preventDefault()
    : e.stopPropagation();
  }

  private loadmore = (page: number, limit: number) => {
    getImages(page, limit).then(res => {
      if (res.data.data.items.length === 0) {
        message.info('没有更多图片')
      } else {
        this.setState({images: this.state.images.concat(res.data.data.items)});
      }
    });
    this.setState({page: this.state.page + 1});
  }

  private scroll = (e: any) => {
    e.preventDefault();
    const top = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight;
    const cHeight = document.documentElement.clientHeight;
    const diff = height - top - cHeight
    if (diff <= 0) {
      // console.log(diff);
      this.loadmore(this.state.page, this.state.limit);
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scroll);
    document.body.addEventListener('wheel', this.stopScroll, {passive: false});
    document.body.addEventListener('touchmove', this.stopScroll, {passive: false});
    getImages(1,this.state.limit).then(res => {
      this.setState({images: res.data.data.items});
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll);
    document.body.removeEventListener('wheel', this.stopScroll);
    document.body.removeEventListener('touchmove', this.stopScroll);
  }

  render() {
    const Navbar = () => {
      return(
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
      )
    }

    const Cover = () => {
      return(
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
          <div className="mask" style={{display:this.state.isMenuOpen?'':'none',zIndex:2}}></div>
        </div>
      )
    }

    const ImageBox = () => {
      const { columns, gutter } = this.props;
      return(
        <div className="gallery-box">
          <Masonry
            items={this.state.images}
            columnWidth={(this.ref.current?.clientWidth-gutter*(columns-1))/columns}
            columns={columns}
            gutter={gutter}
          />
        </div>
      )
    }

    return(
      <div className="desktop-gallery">
        <Navbar />
        <div className="gallery-container" ref={this.ref}>
          <Cover />
          <ImageBox />
        </div>
      </div>
    )
  }
}

export default DesktopGallery;