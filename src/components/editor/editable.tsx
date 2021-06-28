import React from 'react';

const replaceCaret = (el: any) => {
  const target = document.createTextNode('');
  el.current.appendChild(target);
  const isTargetFocused = document.activeElement === el.current;
  if (target !== null && target.nodeValue !== null && isTargetFocused) {
    let sel = window.getSelection();
    if (sel !== null) {
      let range = document.createRange();
      range.setStart(target, target.nodeValue.length);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    };
    el.current.focus();
  }
}

type EditableProps = {
  disabled?: boolean,
  onChange?: (event: React.SyntheticEvent<any>, text: string, html: string) => void;
} & Omit<React.HTMLAttributes<any>, 'onChange'>;

const Editable: React.FC<EditableProps> = (props) => {
  const {
    onBlur,
    onChange,
    onKeyDown,
    onKeyUp,
    disabled = false,
    ...restProps
  } = props;

  const el: any = React.createRef();

  const [text, setText] = React.useState('');
  const [html, setHtml] = React.useState('');

  const emitChange = (originalEvt: React.SyntheticEvent<any>) => {
    const innerText = el.current.innerText;
    const innerHTML = el.current.innerHTML;
    // console.log(originalEvt);
    innerText && setText(innerText);
    innerHTML && setHtml(innerHTML);
    replaceCaret(el);
    if (onChange) {
      onChange(originalEvt, text, html);
    };
  };

  return (
    <div
      ref={el}
      className="mint-editable"
      onInput={emitChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      contentEditable={!disabled}
      {...restProps}
    ></div>
  )
};

export default Editable;