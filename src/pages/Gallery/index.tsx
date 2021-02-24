import React from 'react';
import { message } from '@/components';

export interface GalleryPageProps {};

export default function () {
  return (
    <div className="Gallery">
      <button onClick={(e: any) => message({
        type: 'info',
        text: 'this is message',
        duration: 13000})}>message</button>
      <button onClick={(e: any) => message({
        type: 'danger',
        text: 'this is message',
        duration: 3000})}>message</button>
      <button onClick={(e: any) => message({
        type: 'success',
        text: 'this is message',
        duration: 3000})}>message</button>
      <button onClick={(e: any) => message({
        type: 'warning',
        text: 'this is message',
        duration: 3000})}>message</button>
    </div>
  )
}