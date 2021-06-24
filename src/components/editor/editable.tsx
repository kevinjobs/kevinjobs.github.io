import React from 'react';

const replaceCaret = (el: HTMLElement) => {
  const target = document.createTextNode('');
  el.appendChild(target);
  const isTargetFocused = document.activeElement === el;
  if (target !== null && target.nodeValue !== null && isTargetFocused) {
    let sel = window.getSelection();
    if (sel !== null) {
      let range = document.createRange();
      range.setStart(target, target.nodeValue.length);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    };
    if (el instanceof HTMLElement) el.focus();
  }
}

type EditableProps = {
  disabled: boolean
} & React.HTMLAttributes<any>

const Editable: React.FC<EditableProps> = (props) => {
  const {
    onBlur,
    onChange,
    onKeyDown,
    onKeyUp,
    disabled = false
  } = props;

  const el: any = React.useRef();

  const emitChange = (originalEvt: React.SyntheticEvent<any>) => {
    const html = el.innerHTML;
    const evt = Object.assign({}, originalEvt, {
      target: {
        value: html
      }
    });
    onChange(evt);
  };

  return (
    <div
      ref={el}
      className="mint-editable"
      onInput={emitChange}
      onBlur={onBlur || emitChange}
      onKeyDown={onKeyDown || emitChange}
      onKeyUp={onKeyUp || emitChange}
      contentEditable={!disabled}
    ></div>
  )
};

export default Editable;