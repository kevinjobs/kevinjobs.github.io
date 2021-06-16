/*
 * @description: 
 * @author: kevinjobs
 * @date: 
 * @version: 0.0.1
 */
import * as React from 'react';
import Draggable from './draggable';

export default function ZhihuPage () {
  return (
    <div className="zhihu-page">
      <div className="header"></div>
      <div className="container">
        <div className="question-selector">
          <label>Question</label>
          <select>
            <option></option>
          </select>
        </div>
      </div>
      <Draggable />
    </div>
  )
};