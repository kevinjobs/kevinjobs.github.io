import React from 'react';
import { Modal, Button } from '@/components';
import Demo from '../demo';
import Box from '../box';

export default function DemoModal () {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const renderDemo = () => {
    return (
      <>
        <Modal
          title="A Modal Window"
          content="hello window"
          visible={isModalVisible}
          onClose={e => setIsModalVisible(false)}
          onConfirm={(e: any) => setIsModalVisible(false)}
          onCancel={(e: any) => setIsModalVisible(false)}
        />
        <Button onClick={e => setIsModalVisible(!isModalVisible)}>Show Modal</Button>
      </>
    )
  }

  return (
    <Demo
      title="Modal 模态框"
      desc="简单的模态框"
    >
      <Box content={renderDemo()} desc="展示实时输入" />
    </Demo>
  )
}