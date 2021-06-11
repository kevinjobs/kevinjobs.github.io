import React from 'react';
import Homepage from './home';
import { useTheme, useViewport, breakpoint } from '@/hooks';

export interface HomePageProps {
  type: string; // 1: mobile; 2: desktop: 3: pad; 4: ...
}

export default function () {
  const { width } = useViewport();
  const theme = useTheme();
  const type = width < breakpoint ? 'Mobile' : 'Desktop';

  const classname = "Homepage " + `theme-${theme}`

  return (
    <div className={classname}>
      <Homepage type={type} />
    </div>
  )
}