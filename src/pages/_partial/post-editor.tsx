import React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

import { Button } from '@/components';
import { IPost } from '@/types';

export interface PostEditorProps {
  post: IPost | undefined,
  onCancel?: any,
  onSubmit?: any
}

const ArticleEditor: React.FC<PostEditorProps> = props => {
  const [articleForm ,setArticleForm] = React.useState<IPost | undefined>(props.post);

  const mdParser = new MarkdownIt();

  const handleChange = (e: any) => {
    const newArticleForm = JSON.parse(JSON.stringify(articleForm));
    const name = e.target.name;
    newArticleForm[name] = e.target.value;
    setArticleForm(newArticleForm);
  }

  const handleContentChange = (content: any, e: any) => {
    const newArticleForm = JSON.parse(JSON.stringify(articleForm));
    newArticleForm['content'] = content.text;
    setArticleForm(newArticleForm);
    // console.log(e);
  }

  const handleSubmit = (e: any) => {
    const { onSubmit } = props;
    if (onSubmit) {
      (onSubmit as React.MouseEventHandler<HTMLButtonElement>)(e);
    }
  }

  const handleCancel = (e: any) => {
    const { onCancel } = props;
    if (onCancel) {
      (onCancel as React.MouseEventHandler<HTMLButtonElement>)(e);
    }
  }

  const FormItem = (label: string, name: string, value: string | number | undefined, isDisable = false, ph: string = '') => {
    return (
      <div className="form__item">
        <label>{label}</label>
        <input
          type="text"
          value={value}
          name={name}
          disabled={isDisable}
          placeholder={ph}
          onChange={handleChange}/>
      </div>
    )
  }

  const markdownStyle: React.CSSProperties = {
    minHeight: '700px'
  }

  
  return (
    <div className="PostEditor">
      <div className="container">
        <div className="title-and-content">
          <div className="header">
            <input
              type="text"
              value={articleForm?.title}
              name="title"
              placeholder='请在此填写标题'
              onChange={handleChange}/>
          </div>
          <div className="editor">
            <div className="content">
              <MdEditor
                style={markdownStyle}
                renderHTML={(text) => mdParser.render(text)}
                onChange={handleContentChange}
                value={articleForm?.content}
                config={{view: {html: false}}}
              />
            </div>
          </div>
        </div>
        <div className="other-infos">
          <div className="form__item">
            <label>ID</label>
            <span>{ articleForm?.id }</span>
          </div>
          <div className="form__item">
            <label>Type</label>
            <select>
              <option value="1">Article</option>
              <option value="2">Photo</option>
              <option value="3">Question</option>
            </select>
          </div>
          { FormItem('作者', 'author', articleForm?.author, true) }
          { FormItem('封面', 'cover', articleForm?.cover, false, '此处填写封面图片 URL') }
          <div className="form__item">
            <label>创建日期</label>
            <span>{ articleForm?.create_at }</span>
          </div>
          <div className="form__item">
            <label>修改日期</label>
            <span>{ articleForm?.update_at }</span>
          </div>
          { FormItem('简介', 'desc', articleForm?.desc, false, '此处填写简介') }
          { FormItem('考点', 'questionPoint', articleForm?.questionPoint, false, '此处填写考点') }
          <div className="operation">
            <Button type="primary"
              onClick={handleSubmit}
              data-form={JSON.stringify(articleForm)}
            >{ articleForm?.id ? 'Update' : 'Create' }</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleEditor;