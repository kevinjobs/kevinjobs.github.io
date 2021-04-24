import * as React from 'react';
import { Button } from '@/components';

export interface SearchProps {
  value: string,
  name: string,
  placeholder: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  onSearch?: React.MouseEventHandler<HTMLButtonElement>,
  onEnter?: React.KeyboardEventHandler<HTMLInputElement>
};

export const Search: React.FC<SearchProps> = props => {
  const { value, name, placeholder, onChange, onSearch, onEnter, children } = props;

  return (
    <div className="mint-search">
      <input
        value={value}
        name={name}
        onChange={onChange}
        onKeyDown={e => {
          if (e.key === 'Enter' && onEnter) {
            onEnter(e)
          }
        }}
        placeholder={placeholder}
      />
      <Button type="primary" style={{height: 33}} onClick={onSearch}>
        { children || '给我搜' }
      </Button>
    </div>
  )
}