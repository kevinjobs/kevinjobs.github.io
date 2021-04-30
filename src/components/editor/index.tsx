import * as React from 'react';
import marked from 'marked';

export type EditorProps = {
  value?: string,
  onChange?: (rawText: string | undefined, htmlText: string | undefined) => void,
} & Omit<React.HTMLAttributes<any>, 'value' | 'onChange'>;

export const Editor: React.FC<EditorProps> = props => {
  const { value, onChange, style } = props;

  const [htmlText, sethtmlText] = React.useState<string>('');
  const [rawText, setRawText] = React.useState<string | undefined>(value);

  const ref: any = React.useRef();

  const handleKeyDown = (e: any) => {
    setRawText(ref.current.innerText);
  }

  React.useEffect(() => {
    onChange && onChange(rawText, htmlText);
    sethtmlText(marked(ref.current.innerText));
  }, [rawText, htmlText, onChange]);

  return (
    <div className="mint-editor" style={style}>
      <div className="mint-editor-container">
        <div
          className="mint-editor-left"
          contentEditable
          ref={ref}
          onKeyDown={handleKeyDown}>{ value }</div>
        <div className="mint-editor-right typo">
          <div dangerouslySetInnerHTML={{__html: htmlText}}></div>
        </div>
      </div>
    </div>
  )
}