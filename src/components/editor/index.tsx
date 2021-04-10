import React from 'react';
import marked from 'marked';

export interface EditorProps {
  value?: string,
  onChange?: any
};

export const Editor: React.FC<EditorProps> = props => {
  const { value, onChange } = props;

  const [raw, setRaw] = React.useState(value);
  const [preview, setPreview] = React.useState<string>('');

  const ref: any = React.useRef();

  const handleEnter = (e: any) => {
    if (e.key === 'Enter') {
      setPreview(marked(ref.current.innerText));
    }
  }

  React.useEffect(() => {
    raw && setPreview(marked(raw));
  }, [raw])

  return (
    <div className="mint-editor">
      <div className="mint-editor-container">
        <div className="mint-editor-left" contentEditable ref={ref}
          onKeyDown={handleEnter}></div>
        <div className="mint-editor-right typo">
          <div dangerouslySetInnerHTML={{__html: preview}}></div>
        </div>
      </div>
    </div>
  )
}