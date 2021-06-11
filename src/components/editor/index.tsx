import * as React from 'react';
import marked from 'marked';
import styled from 'styled-components';

export type EditorProps = {
  value?: string,
  onChange?: (rawText: string | undefined, htmlText: string | undefined) => void,
} & Omit<React.HTMLAttributes<any>, 'value' | 'onChange'>;

const Toolbar = styled.div`
  cursor: pointer;
  background-color: #f1f1f1;
  padding: 8px 18px;
  border-bottom: 1px solid #dddddd;
`;

export const Editor: React.FC<EditorProps> = props => {
  const { value, onChange, style } = props;

  const [isShowPreview, setIsShowPreview] = React.useState(false);
  const [htmlText, sethtmlText] = React.useState<string>('');
  const [rawText, setRawText] = React.useState<string | undefined>(value);

  const ref: any = React.useRef();

  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    /**
     * 处理键盘输入，当按键弹起时触发
     * @param e 键盘事件
     * @return {void}
     */
    setRawText(ref.current.innerText);
  }

  const handleClickPreview = (e: React.MouseEvent<HTMLButtonElement>) => {
    /**
     * control the preview panel visibility
     */
    e.preventDefault();
    setIsShowPreview(!isShowPreview);
  }

  React.useEffect(() => {
    onChange && onChange(rawText, htmlText);
    sethtmlText(marked(ref.current.innerText));
  }, [rawText, htmlText, onChange]);

  return (
    <div className="mint-editor" style={style}>
      <Toolbar>
        <button className="add-title-1">H1</button>
        <button className="preview" onClick={handleClickPreview}>Preview</button>
      </Toolbar>
      <div className="mint-editor-container">
        <div
          className="mint-editor-left"
          contentEditable
          ref={ref}
          onKeyUp={handleKeyUp}>{ value }</div>
        <div className="mint-editor-right" style={{display: isShowPreview ? 'block' : 'none'}}>
          <div dangerouslySetInnerHTML={{__html: htmlText}}></div>
        </div>
      </div>
    </div>
  )
}