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
  key: string
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

  // 点击 block 时，获取焦点
  const handleBlockItemClick = (e: any, key: string) => {
    setNodeKeyFocused(key);
  };

  // 新建 block 时，自动获取焦点
  const handleBlockItemKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    /**
     * 处理键盘输入，当按键弹起时触发
     * @param e 键盘事件
     * @return {void}
     */
    if (e.keyCode === 13) {
      e.preventDefault();

      const shortUUID = short.generate();
      const newBlock: IBlock = {
        type: 'text',
        content: '',
        key: shortUUID
      };
      setNodeKeyFocused(shortUUID);

      const blocksCopy = blocks;
      blocksCopy.splice(index + 1, 0, newBlock);
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

  const renderBlock = (item: IBlock) => {
    const indexOfBlock = blocks.indexOf(item);

    return (
      <div className="block-item-container">
        <BlockItem
          className="block-item"
          key={item.key}
          onClick={e => handleBlockItemClick(e, item.key)}
          onKeyDown={e => handleBlockItemKeyDown(e, indexOfBlock)}
          data-key={item.key}
          contentEditable
        >
          { item.content }
        </BlockItem>
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
      console.log(containerRef);
      for (let childNode of containerRef.current.childNodes) {
        // 遍历所有 block，并设置焦点
        if (childNode['childNodes'][0].dataset['key'] === nodeKeyFocused) {
          childNode['childNodes'][0].focus();
        };
        // 当焦点切换时，将 block 的内容写入
        const newBlocks = blocks;
        for (let i = 0; i < newBlocks.length; i ++) {
          if (childNode['childNodes'][0].dataset['key'] === newBlocks[i]['key']) {
            newBlocks[i]['content'] = childNode['childNodes'][0].innerText;
          }
        };
        setBlocks(newBlocks);
      }
    }
  }, [containerRef, nodeKeyFocused, blocks]);

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
        { blocks && blocks.map(renderBlock) }
      </div>
    </div>
  )
}