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
    <>
      <Navbar />
      <div className={classname}>
        <Homepage type={'desktop'} />
      </div>
    </>
  )
}