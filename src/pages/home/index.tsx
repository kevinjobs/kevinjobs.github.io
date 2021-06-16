import React from 'react';
import Homepage from './home';
import { Navbar } from '@/components';
import { useDevice, useTheme } from '@/hooks';

export interface HomePageProps {
  type: string; // 1: mobile; 2: desktop: 3: pad; 4: ...
}

export default function Home () {
  const device: string = useDevice();
  const theme: string = useTheme();

  const classname = `homepage ${device} ${theme}`
  
  return (
    <div className={classname}>
      <div className="homepage-navbar">
        <Navbar style={{borderRadius: '0 0 8px 8px'}} />
      </div>
      <Homepage type={'desktop'} />
    </div>
  )
}