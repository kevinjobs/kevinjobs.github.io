import React from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';

const Drager: React.FC<any> = () => {
  const Window = styled.div`
    width: 400px;
    height: 600px;
    border: 1px solid #f1f1f1;
    border-radius: 8px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  `;

  return (
    <Draggable
      axis="both"
      defaultPosition={{x: 0, y: 0}}>
      <Window>
        <h3>Drag Me!</h3>
      </Window>
    </Draggable>
  )
}

export default Drager;