import styled from 'styled-components';

export interface BoxProps {
  content: any,
  desc: string
}

export default function Box (props: BoxProps) {
  const { content, desc } = props;

  const Boxer = styled.div`
    border: 1px solid #f1f1f1;
    border-radius:4px;
    background-color: #fff;
    display: inline-block;
    margin: 8px;
  `;

  const Content = styled.div`
    padding: 8px 16px;
  `;

  const Desc = styled.div`
    padding: 8px 16px;
    border-top: 1px dashed #afafaf;
    color: #555;
    font-size: .8rem;
    background-color: #f1f1f1;
  `;
  
  return (
    <Boxer className="demo-show-box">
      <Content className="content">{ content }</Content>
      <Desc>{ desc }</Desc>
    </Boxer> 
  )
}