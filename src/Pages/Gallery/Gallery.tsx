import React, { createRef } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuButton } from '../../Components';
import { getPostList, getPostById } from '../../Apis/post';
import { ImageInterface } from './gallery.interface';
import { scrollToMore, debounce } from '../../Utils';

import Masonry from './Masonry';
import FloatPanel from './FloatPanel';

import './style.scss';

interface GalleryProps {
  columns: number,
  gutter: number,
  type: number
}

interface State {
  imageList: ImageInterface[],
  currentPage: number,
  pageSize: number
  isMenuOpen: boolean,
  currentKey: number | undefined,
  currentPost: ImageInterface | undefined
}

class DesktopGallery extends React.Component<GalleryProps, State> {
  state: State = {
    imageList: [],
    currentPage: 2,
    pageSize: 8,
    isMenuOpen: false,
    currentKey: undefined,
    currentPost: undefined
  }

  private ref: any = createRef();

  private onFloatPanel = (e: any) => {
    const id: string = e.target.attributes.getNamedItem('data-id').value;
    const key: any = e.target.attributes.getNamedItem('data-key').value;
    // console.log(id);
    this.setState({currentKey: parseInt(key)});
    getPostById(id).then(res => {
      this.setState({currentPost: res.data.data})
    }).catch(err => console.error(err));
  }

  private stopScroll = (e: any) => {
    this.state.isMenuOpen || this.state.currentPost
    ? e.preventDefault()
    : e.stopPropagation()
  }

  private loadmore = (currentPage: number, pageSize: number) => {
    getPostList(currentPage, pageSize, 1).then(res => {
      if (res.data.data.items.length === 0) {
        // message.info('没有更多图片',1)
      } else {
        this.setState({imageList: this.state.imageList.concat(res.data.data.items)});
      }
    });
    this.setState({currentPage: this.state.currentPage + 1});
  }

  private scroll = (e: any) => {
    if (scrollToMore()) this.loadmore(this.state.currentPage, this.state.pageSize);
  }

  componentDidMount() {
    getPostList(1, 8 ,1).then(res => {
      this.setState({imageList: this.state.imageList.concat(res.data.data.items)});
    }).catch(err => { console.error(err) });
    document.body.addEventListener('wheel', debounce(this.scroll, 500), {passive: false});
    document.body.addEventListener('touchmove', debounce(this.scroll, 500), {passive: false});
    document.body.addEventListener('wheel', this.stopScroll, {passive: false});
    document.body.addEventListener('touchmove', this.stopScroll, {passive: false});
  }

  componentWillUnmount() {
    document.body.removeEventListener('wheel', debounce(this.scroll, 0));
    document.body.removeEventListener('touchmove', debounce(this.scroll, 0));
    document.body.removeEventListener('wheel', this.stopScroll);
    document.body.removeEventListener('touchmove', this.stopScroll);
  }

  render() {
    const Navbar = (
      <div
        className="Gallery-Navbar"
        style={{height:window.innerHeight,display:this.state.isMenuOpen?'':'none'}}
      >
        <ul>
          <li><NavLink to={'home'}>Home</NavLink></li>
          <li><NavLink to={'gallery'}>Gallery</NavLink></li>
          <li><NavLink to={'exam'}>Exam</NavLink></li>
        </ul>
      </div>
    )

    const Cover = (
      <div className="Gallery-Container__Cover">
        <div className="gallery-menu">
          <MenuButton
            onClick={(e: any) => this.setState({isMenuOpen: !this.state.isMenuOpen})}
            show={this.state.isMenuOpen}
            color='#d1d1d1'
          />
        </div>
        <img
          alt='background'
          src='https://mintforge-1252473272.cos.ap-nanjing.myqcloud.com/image/background.png'
          style={{height:window.innerHeight}}
        />
        <div className="moto"><p>我曾见过光 再无法忘记</p></div>
      </div>
    )

    const showMasonry = (imageList: ImageInterface[]) => {
      const { columns, gutter } = this.props;

      if (imageList) {
        return (
          <div className="Gallery-Container__Masonry">
            <Masonry
              items={imageList}
              columnWidth={(this.ref.current?.clientWidth-gutter*(columns-1))/columns}
              columns={columns}
              gutter={gutter}
              openImage={this.onFloatPanel}
            />
          </div>
        )
      }
    }

    const showFloatPanel = (post: ImageInterface | undefined) => {
      if (post) {
        return (
          <FloatPanel
            image={post}
            onClose={(e: any) => this.setState({currentPost: undefined})}
            onPrev={(e: any) => {
              if (this.state.currentKey && this.state.currentKey >= 1) {
                this.setState({currentPost: this.state.imageList[this.state.currentKey - 1]});
                this.setState({currentKey: this.state.currentKey - 1});
              } else {
                this.setState({currentPost: this.state.imageList[this.state.imageList.length - 1]});
                this.setState({currentKey: this.state.imageList.length - 1});
              }
            }}
            onNext={(e: any) => {
              if (this.state.currentKey !== undefined && this.state.currentKey < this.state.imageList.length - 1) {
                this.setState({currentPost: this.state.imageList[this.state.currentKey + 1]});
                this.setState({currentKey: this.state.currentKey + 1});
              } else {
                this.setState({currentPost: this.state.imageList[0]});
                this.setState({currentKey: 0});
              }
            }}
            type={this.props.type}
          />
        )
      }
    }

    return(
      <div className="Gallery">
        { Navbar }
        <div className="Gallery-Container" ref={this.ref}>
          { Cover }
          { showMasonry(this.state.imageList) }
        </div>
        { showFloatPanel(this.state.currentPost) }
      </div>
    )
  }
}

export default DesktopGallery;