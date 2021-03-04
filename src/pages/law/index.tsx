import React from 'react';
import { getPostList, getPostById, patchById, postNew, deleteById } from '@/apis/post';
import { ArticleInterface } from '@/types';
import { Button } from '@/components';
import Editor from '@/pages/admin/editor';
import MarkdownIt from 'markdown-it';
import { breakpoint, useViewport } from '@/hooks/viewportCtx';

const LawPage: React.FC = () => {
  const [questions, setQuestions] = React.useState<ArticleInterface[]>();
  const [currentQuestion, setCurrentQuestion] = React.useState<ArticleInterface>();
  const [newQues, setNewQues] = React.useState<ArticleInterface>();

  const md = new MarkdownIt();
  const { width } = useViewport();

  React.useEffect(() => {
    getPostList(1, 8, 2).then(res => {
      if (res.status === 200 && res.data.code === 1) {
        // console.log(res.data);
        setQuestions(res.data.data.items);
      }
    })
  }, [currentQuestion, newQues])

  const handleSelect = (e: any) => {
    const id = e.target.dataset.id;
    // console.log(id);
    getPostById(id).then(res => {
      if (res.status === 200 && res.data.code === 1) {
        setCurrentQuestion(res.data.data);
      }
    })
  }

  const handleCancel = (e: any) => {
    setCurrentQuestion(undefined);
  }

  const handleAdd = (e: any) => {
    const ques: ArticleInterface = { title: "", content: "", type: 2 };
    setNewQues(ques);
  }

  const handleModify = (e: any) => {
    setNewQues(currentQuestion);
  }

  const handleDelete = (e: any) => {
    deleteById(currentQuestion?.id).then(res => {
      if (res.status === 200 && res.data.code === 1) {
        alert('deleted');
        setCurrentQuestion(undefined);
      }
    })
  }

  const handleSubmit = (e: any) => {
    const articleForm = JSON.parse(e.target.dataset.form);
    const submitForm = JSON.parse(JSON.stringify(articleForm));
    delete submitForm['id'];
    delete submitForm['create_at'];
    delete submitForm['update_at'];
    delete submitForm['exif'];

    if (articleForm && articleForm.id) {
      patchById(articleForm.id, submitForm)
        .then(res => {
          if (res.status === 200 && res.data.code === 1) {
            alert('update success');
            setNewQues(undefined);
            setCurrentQuestion(res.data.data);
          }
        }).catch(err => console.log(err));
    } else {
      postNew(submitForm)
        .then(res => {
          if (res.status === 200 && res.data.code === 1) {
            alert('post success');
            setNewQues(undefined);
          }
        }).catch(err => alert(err));
    }
  }

  const renderQues = (question: ArticleInterface, index: number) => {
    const {
      title,
      id
    } = question;

    return (
      <div
        className="question-card shadow-card"
        key={index}
        data-id={id}
        onClick={handleSelect}
      >
        <span className="tag tag-blue">{ question.questionPoint }</span>
        <h3>{ title }</h3>
      </div>
    )
  }

  const renderQuesCard = (question: ArticleInterface) => {
    return (
      <div className="question-float">
        <div className="container">
          <div className="header">
            <span className="tag tag-blue">{ question.questionPoint }</span>
            <span><h3>{ question.title }</h3></span>
          </div>
          <div className="content"
            dangerouslySetInnerHTML={{__html: md.render(question.content)}}>
          </div>
          <div className="cancel">
            <Button onClick={handleDelete} type="danger">删 除</Button>
            <Button onClick={handleModify} type="primary">修 改</Button>
            <Button onClick={handleCancel}>Close</Button>
          </div>
        </div>
      </div>
    )
  }

  const classname = 'LawPage' + ( width < breakpoint ? ' Mobile' : '');

  return (
    <div className={classname}>
      <div className="LawPage-Container">
        <div className="header">
          <Button onClick={handleAdd} type="primary">增加一条</Button>
        </div>
        <div className="list">
          { questions && questions.map(renderQues) }
        </div>
      </div>
      { currentQuestion && renderQuesCard(currentQuestion)}
      { newQues && <Editor post={newQues} onSubmit={handleSubmit} onCancel={(e: any) => setNewQues(undefined)} /> }
    </div>
  )
}

export default LawPage;