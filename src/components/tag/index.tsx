import * as React from 'react';

export type TagProps = {
  theme?: string,
  type?: 'outline' | 'fill'
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'type' | 'onClick'>;

export const Tag: React.FC<TagProps> = props => {
  const { theme = 'default', type = 'fill', children, ...rest } = props;

  const styles: React.CSSProperties = {};

  return (
    <div
      className={`mint-tag mint-tag-${theme} mint-tag-${type}`}
      style={styles}
      {...rest}
    >
      { children }
    </div>
  )
}