import React from 'react';
import { Input } from '@/components';
import Demo from '../demo';
import Box from '../box';

export default function DemoInputPage () {
  const [inputWord, setInputWord] = React.useState('');

  const handleInput = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setInputWord(e.target.value);
  }

  const renderDemo = () => {
    return (
      <>
        <Input value={inputWord} onChange={handleInput} />
        <p>{ inputWord }</p>
      </>
    )
  }

  return (
    <Demo
      title="Input 输入组件"
      desc="提供多种样式的输入"
    >
      <Box content={<Input />} desc="基本输入" />
      <Box content={<Input search />} desc="带有搜索框" />
      <Box content={renderDemo()} desc="展示实时输入" />
    </Demo>
  )
}