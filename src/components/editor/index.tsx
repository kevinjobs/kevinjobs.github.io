import * as React from 'react';
import styled from 'styled-components';
import short from 'short-uuid';
import {
  H1,
  H2,
  H3,
  PreviewOpen,
  PreviewCloseOne
} from '@icon-park/react';
import Editable from './editable';

export type EditorProps = {
  value?: string,
  onChange?: (rawText: string | undefined, htmlText: string | undefined) => void,
} & Omit<React.HTMLAttributes<any>, 'value' | 'onChange'>;

interface IBlock {
  type?: 'text' | 'image' | 'link' | 'code',
  content?: string,
  key?: string,
  ref?: any
}

const findIndexOfBlock = (block: IBlock, blocks: IBlock[]) :number => {
  let indexOfBlock = -1;
  for (let i = 0; i < blocks.length; i ++) {
    if (block.key === blocks[i].key) {
      indexOfBlock = i;
    }
  };
  return indexOfBlock;
};

export const Editor: React.FC<EditorProps> = (props) => {
  let newBlock: IBlock = {
    type: 'text',
    content: '',
    key: short.generate()
  };

  const [editableBlocks, setEditableBlocks] = React.useState<IBlock[]>([newBlock]);
  const [isShowPreview, setIsShowPreview] = React.useState(false);

  const containerRef: any = React.createRef();

  const renderEditableBlock = (block: IBlock) => {
    const newBlock: IBlock = {
      type: 'text',
      content: '',
      key: short.generate()
    };

    return (
      <Editable
        dangerouslySetInnerHTML={{__html: block.content || ''}}
        data-type={block.type}
        data-content={block.content}
        data-key={block.key}
        key={block.key}
        onChange={(e, text, html) => {
          const editableBlocksCopy = editableBlocks.concat();
          const indexOfBlock = findIndexOfBlock(block, editableBlocksCopy);
          block.content = text;
          editableBlocksCopy.splice(indexOfBlock, 1, block);
          setEditableBlocks(editableBlocksCopy);
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setEditableBlocks(editableBlocks.concat([newBlock]));
          }
        }}
      />
    )
  };

  return (
    <div className="mint-editor">
      <div className="mint-editor-toolbar">
        <span className="add-title-1 toolbar-icon">
          <H1 theme="outline" size="20" fill="#333" strokeWidth={2}/>
        </span>
        <span className="add-title-2 toolbar-icon">
          <H2 theme="outline" size="16" fill="#333" strokeWidth={2}/>
        </span>
        <span className="add-title-3 toolbar-icon">
          <H3 theme="outline" size="12" fill="#333" strokeWidth={2}/>
        </span>
        <span className="toolbar-preview toolbar-icon" onClick={e => setIsShowPreview(!isShowPreview)}>
        {
          isShowPreview
            ? <PreviewCloseOne theme="outline" size="24" fill="#333" strokeWidth={2}/>
            : <PreviewOpen theme="outline" size="24" fill="#333" strokeWidth={2}/>
        }
        </span>
      </div>
      <div className="mint-editor-container" ref={containerRef}>
        { editableBlocks && editableBlocks.map(renderEditableBlock) }
      </div>
    </div>
  )
}