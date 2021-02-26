import React from 'react';
import Homepage from './home';
import { useViewport, breakpoint } from '@/hooks/viewportCtx';

export interface HomePageProps {
  type: number; // 1: mobile; 2: desktop: 3: pad; 4: ...
}

export default function () {
  const { width } = useViewport();
  const type = width < breakpoint ? 1 : 2;

  return (
    <div className="Homepage">
      <Homepage type={type} />
    </div>
  )
}