import * as React from 'react';
import styled from 'styled-components';
import short from 'short-uuid';
import {
  H1,
  H2,
  H3,
  AlignRightTwo,
  PreviewOpen,
  PreviewCloseOne
} from '@icon-park/react';

export type EditorProps = {
  value?: string,
  onChange?: (rawText: string | undefined, htmlText: string | undefined) => void,
} & Omit<React.HTMLAttributes<any>, 'value' | 'onChange'>;

interface IBlock {
  type: 'text' | 'image' | 'link' | 'code',
  content: string,
  key: string,
  ref?: any
}

export const Editor: React.FC<EditorProps> = (props) => {
  const defaultBlock: IBlock = {
    type: 'text',
    content: '',
    key: short.generate()
  };

  const [isShowPreview, setIsShowPreview] = React.useState(false);
  const [blocks, setBlocks] = React.useState<IBlock[]>([defaultBlock]);
  const [nodeKeyFocused, setNodeKeyFocused] = React.useState('');

  const containerRef: any = React.createRef();

  // 点击 block 时，将焦点移动到被点击的 block
  const handleBlockItemClick = (e: any, item: IBlock) => {
    e.preventDefault();
    setNodeKeyFocused(item.key);
  };

  //
  const handleBlockItemKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, item: IBlock) => {
    /**
     * 处理键盘输入，当按键弹起时触发
     * @param e 键盘事件
     * @return {void}
     */
    // console.log(e);
    // 复制一份新的 block 用于之后的操作
    const blocksCopy = blocks.concat();
    // 获取当前 block 在数组中的索引值
    const indexOfBlock = blocksCopy.indexOf(item);
    
    // 如果在聚焦的 block 按回车键，则在其之后添加一个新的 block
    if (e.key === 'Enter') {
      e.preventDefault();
      // 创建一个新的 block
      const shortUUID = short.generate();
      const newBlock: IBlock = {
        type: 'text',
        content: '',
        key: shortUUID
      };
      // 在当前 block 之后插入新的 block
      blocksCopy.splice(indexOfBlock + 1, 0, newBlock);
      // 获取焦点
      setNodeKeyFocused(shortUUID);
      setBlocks(blocksCopy);
    };
  };

  const handleClickPreview = (e: React.MouseEvent<HTMLButtonElement>) => {
    /**
     * 控制预览界面是否显示
     */
    e.preventDefault();
    setIsShowPreview(!isShowPreview);
    console.log(blocks);
  };

  const Toolbar = styled.div`
    background-color: #f1f1f1;
    padding: 8px 18px;
    border-bottom: 1px solid #dddddd;
    display: flex;
    .toolbar-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin: 0 4px;
    }
  `;

  const BlockItem = styled.div`
    width: 100%;
    outline: none;
    &.text {
      color: #242526;
    }
    .block-item-edit {
      display: inline-block;
      position: absolute;
      right: 4px;
    }
  `;

  const BlockItemEdit = styled.div`
    height: 24px;
    visibility: hidden;
    .operator {
      cursor: pointer;
    }
  `;

  const RenderBlock = (item: IBlock) => {
    return (
      <div className="block-item-container">
        <BlockItem
          className={`block-item ${item.type}`}
          key={item.key}
          onClick={e => handleBlockItemClick(e, item)}
          onKeyDown={e => handleBlockItemKeyDown(e, item)}
          data-content={item.content}
          data-key={item.key}
          data-type={item.type}
          contentEditable
        ></BlockItem>
        <BlockItemEdit className="block-item-edit">
          <span className="operator">
           <AlignRightTwo theme="outline" size="24" fill="#999" strokeWidth={2}/>
          </span>
        </BlockItemEdit>
      </div>
    )
  };

  React.useEffect(() => {
    if (containerRef.current) {
      for (let childNode of containerRef.current.childNodes) {
        const targetNode = childNode['childNodes'][0];
        // 如果当前 block 被选中，设置焦点
        if (targetNode.dataset['key'] === nodeKeyFocused) {
          targetNode.focus();
        };
      };
    };
  }, [containerRef, nodeKeyFocused]);

  return (
    <div className="mint-editor">
      <Toolbar>
        <span className="add-title-1 toolbar-icon">
          <H1 theme="outline" size="20" fill="#333" strokeWidth={2}/>
        </span>
        <span className="add-title-2 toolbar-icon">
          <H2 theme="outline" size="16" fill="#333" strokeWidth={2}/>
        </span>
        <span className="add-title-3 toolbar-icon">
          <H3 theme="outline" size="12" fill="#333" strokeWidth={2}/>
        </span>
        <span className="toolbar-preview toolbar-icon" onClick={handleClickPreview}>
        {
          isShowPreview
            ? <PreviewCloseOne theme="outline" size="24" fill="#333" strokeWidth={2}/>
            : <PreviewOpen theme="outline" size="24" fill="#333" strokeWidth={2}/>
        }
        </span>
      </Toolbar>
      <div className="mint-editor-container" ref={containerRef}>
        { blocks && blocks.map(RenderBlock) }
      </div>
    </div>
  )
}