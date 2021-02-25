import React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

import { Button } from '@/components';
import { ArticleInterface } from '@/pages';

interface Props {
  post: ArticleInterface,
  onCancel?: any,
  onSubmit?: any
}

const ArticleEditor: React.FC<Props> = (props: Props) => {
  const [articleForm ,setArticleForm] = React.useState<ArticleInterface>(props.post);

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

  const FormItem = (label: string, name: string, value: string | undefined, isDisable = false, ph: string = '') => {
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
    height: 600,
    width: 600,
    border: 'none'
  }

  if (articleForm) {
    // console.log(articleForm);
    return (
      <div className="Admin-ArticleEditor">
        <div className="Admin-ArticleEditor__Container shadow-card">
          <div className="Left">
            <div className="header">
              <input
                type="text"
                value={articleForm.title}
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
                  value={articleForm.content}
                  config={{view: {html: false}}}
                />
              </div>
            </div>
          </div>
          <div className="Right">
            { FormItem('ID', 'id', articleForm.id, true) }
            { FormItem('作者', 'author', articleForm.author, true) }
            { FormItem('封面', 'cover', articleForm.cover, false, '此处填写封面图片 URL') }
            { FormItem('创建日期', 'create_at', articleForm.create_at, true) }
            { FormItem('修改日期', 'update_at', articleForm.update_at, true) }
            { FormItem('简介', 'desc', articleForm.desc, false, '此处填写简介') }
            <div className="Operation">
              <Button type="primary"
                onClick={handleSubmit}
                data-form={JSON.stringify(articleForm)}
              >{ articleForm.id ? 'Update' : 'Create' }</Button>
              <Button onClick={handleCancel}>Cancel</Button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <div className="Admin-ArticleEditor"></div>
  }
}

export default ArticleEditor;