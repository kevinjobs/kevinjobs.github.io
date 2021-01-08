import React from 'react';
import Question from './QuestionCard';
import Subject from './Subject';
import ChapterCard from './ChapterCard';
import './style.scss';
import { QuestionType, SubjectType } from '../Types';

interface State {
  currentSubject: number | null,
  currentTrunkKey: number | null,
  currentIndex: number,
  mask: boolean
}

export default class Exam extends React.Component<any, State> {
  state: State = {
    currentSubject: null,
    currentTrunkKey: null,
    currentIndex: 0,
    mask: false
  }

  private questions: QuestionType[] = [
    {
      id: 0,
      type: 1,
      spent: [24, 28, 22, 32, 33, 27],
      right_times: 0,
      stem: `
        美国经济学家马尔萨斯提出：“人口增长的趋势永远快于生产的增长。
        如果不加控制，人口总是按几何级数增长，而生活资料只能按照算数级数增长，
        人口扩张到生活资料仅能够维持生存的极限时，就会出现饥饿、战争和疾病。”
        美国经济学家马尔萨斯提出：“人口增长的趋势永远快于生产的增长。
        如果不加控制，人口总是按几何级数增长，而生活资料只能按照算数级数增长，
        人口扩张到生活资料仅能够维持生存的极限时，就会出现饥饿、战争和疾病。”
        美国经济学家马尔萨斯提出：“人口增长的趋势永远快于生产的增长。
        如果不加控制，人口总是按几何级数增长，而生活资料只能按照算数级数增长，
        人口扩张到生活资料仅能够维持生存的极限时，就会出现饥饿、战争和疾病。”
        美国经济学家马尔萨斯提出：“人口增长的趋势永远快于生产的增长。
        如果不加控制，人口总是按几何级数增长，而生活资料只能按照算数级数增长，
        人口扩张到生活资料仅能够维持生存的极限时，就会出现饥饿、战争和疾病。”
        美国经济学家马尔萨斯提出：“人口增长的趋势永远快于生产的增长。
        如果不加控制，人口总是按几何级数增长，而生活资料只能按照算数级数增长，
        人口扩张到生活资料仅能够维持生存的极限时，就会出现饥饿、战争和疾病。”
        美国经济学家马尔萨斯提出：“人口增长的趋势永远快于生产的增长。
        如果不加控制，人口总是按几何级数增长，而生活资料只能按照算数级数增长，
        人口扩张到生活资料仅能够维持生存的极限时，就会出现饥饿、战争和疾病。”
      `,
      answers: [
        '只要有效的控制住人口，就能从根本上避免饥饿、战争和疾病',
        '人口增长速度和生产增长速度的不协调，将会导致战争等后续问题',
        '人类永远无法避免饥饿、战争和疾病，因为人口增长是必然的',
        '人口增长，是一切战争和疾病的直接原因',
      ],
      total: 2
    },
    {
      id: 1,
      type: 1,
      spent: [24, 28, 22, 32, 33, 27],
      right_times: 0,
      stem: `
        美国经济学家马尔萨斯提出：“人口增长的趋势永远快于生产的增长。
      `,
      answers: [
        '只要有效的控制住人口，就能从根本上避免饥饿、战争和疾病',
        '人口增长速度和生产增长速度的不协调，将会导致战争等后续问题',
        '人类永远无法避免饥饿、战争和疾病，因为人口增长是必然的',
        '人口增长，是一切战争和疾病的直接原因',
      ],
      total: 2
    }
  ]

  private subjects: SubjectType[] = [
    {
      id: 1,
      name: '刑法',
      rate: 0,
      chapter_amount: 19,
      section_amount: 117,
      question_amount: 1119
    },
    {
      id: 2,
      name: '刑诉法',
      rate: 5,
      chapter_amount: 19,
      section_amount: 117,
      question_amount: 1119
    }
    ,
    {
      id: 3,
      name: '民法',
      rate: 0,
      chapter_amount: 19,
      section_amount: 117,
      question_amount: 1119
    },
    {
      id: 4,
      name: '民诉法',
      rate: 0,
      chapter_amount: 19,
      section_amount: 117,
      question_amount: 1119
    },
    {
      id: 5,
      name: '三国法',
      rate: 0,
      chapter_amount: 19,
      section_amount: 117,
      question_amount: 1119
    },
    {
      id: 6,
      name: '商经法',
      rate: 0,
      chapter_amount: 19,
      section_amount: 117,
      question_amount: 1119
    },
    {
      id: 7,
      name: '商经法',
      rate: 0,
      chapter_amount: 19,
      section_amount: 117,
      question_amount: 1119
    },
    {
      id: 8,
      name: '商经法',
      rate: 0,
      chapter_amount: 19,
      section_amount: 117,
      question_amount: 1119
    }
  ]

  private setTreeData = () => {
    const sections: object[] = [
      {
        name: '',
        key: ''
      }
    ]

    const chapters: object[] = [
      {
        name: '',
        key: '',
        children: sections
      }
    ]

    return(
      [
        {
          title: this.subjects[this.state.currentSubject ? this.state.currentSubject : 0].name,
          key: this.state.currentSubject,
          children: chapters
        }
      ]
    )
  }

  render() {

    const getQuestion = () => {
      if (this.state.currentIndex < this.questions.length) {
        return this.questions[this.state.currentIndex]
      } else {
        return this.questions[0]
      }
    }

    const onSelectChapter = (e: any) => {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      const id: number = e.target.attributes.getNamedItem('data-id').value;
      console.log('selected subject id:', id);
      this.setState({currentSubject: id});
      this.setState({mask: true})
    }

    const onCloseChapter = (e: any) => {
      this.setState({currentSubject: null});
      this.setState({mask: false});
    }

    const onSelectQuestion = (selectedkeys: any, info: any) => {
      console.log(selectedkeys);
      this.setState({currentTrunkKey: selectedkeys});
      this.setState({mask: true});
      this.setState({currentSubject: null});
    }

    const onSelectQuestionByIndex = (e: any) => {
      const order: number = e.target.attributes.getNamedItem('data-order').value;
      console.log('selectd question index: ', order);
      this.setState({currentIndex: order});
    }

    const onCloseQuestion = (e: any) => {
      this.setState({currentTrunkKey: null});
      this.setState({mask: false});
    }

    return(
      <div className="exam">
        <Subject subjects={this.subjects} onClick={onSelectChapter} />
        {
          this.state.currentSubject
          ? <ChapterCard
              treeData={this.setTreeData()}
              onSelect={onSelectQuestion}
              onClose={onCloseChapter}
            />
          : ''
        }
        {
          this.state.currentTrunkKey
          ? <Question 
              question={getQuestion()}
              onClose={onCloseQuestion}
              onSelect={onSelectQuestionByIndex}  
            />
          : ''
        }
        <div className="mask" style={{display: this.state.mask ? '' : 'None'}}></div>
      </div>
    )
  }
}