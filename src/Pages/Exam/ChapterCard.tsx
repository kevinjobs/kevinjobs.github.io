import React from 'react';
import { Tree } from 'antd';
import { DownOutlined, CloseOutlined } from '@ant-design/icons';

interface Props {
  treeData: any,
  onClose?: any,
  onSelect?: any,
  defaultExpandedKeys?: string[]
}

export default class ChapterCard extends React.Component<Props, any> {
  private handleClose = (e: any) => {
    const { onClose } = this.props;
    if (onClose) {
      (onClose as React.MouseEventHandler<HTMLElement>)(e);
    }
  }

  private handleSelect = (e: any) => {
    const { onSelect } = this.props;
    if (onSelect) {
      (onSelect as React.MouseEventHandler<HTMLElement>)(e);
    }
  }

  render() {
    console.log(this.props.treeData);
    
    return(
      <div className="chapter-card">
        <div className="close" onClick={this.handleClose}>
          <CloseOutlined style={{fontSize:'inherit'}} />
        </div>
        <Tree
          showLine
          switcherIcon={<DownOutlined />}
          defaultExpandedKeys={this.props.defaultExpandedKeys || [1]}
          onSelect={this.handleSelect}
          treeData={this.props.treeData}
        />
      </div>
    )
  }
}