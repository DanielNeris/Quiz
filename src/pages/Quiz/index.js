import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import api from '~/services/api';

import { answerRequest } from '~/store/modules/quiz/actions';

import { Container, Questions, Answer, QuestionTitle } from './styles';

export default function Quiz() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.quiz.loading);

  const [answerCheckd, setAnswerCheckd] = useState(false);
  const [answer, setAnswer] = useState('');
  const [questions, setQuestions] = useState([]);

  function handleSubmit() {
    if (answer === '') {
      toast.error('Resposta Vazia!');
      return;
    }

    dispatch(answerRequest(answer));
  }

  function handleCheckd() {
    setAnswerCheckd(true);
    console.tron.log(answerCheckd);
  }

  function handleReset() {
    console.tron.log('reset');
  }

  useEffect(() => {
    function loadQuestion() {
      // const response = await api.get('schedule');

      const response = [
        {
          question: '4 é par ?',
          answers: [
            { label: 'Sim', value: 'A' },
            { label: 'Não', value: 'B' },
            { label: 'Talvez', value: 'C' },
            { label: 'Sla', value: 'D' },
            { label: 'Corno', value: 'E' },
          ],
          correctAnswer: 'C',
          level: 1,
        },
        {
          question: '2 é par ?',
          answers: [
            { label: 'Sim', value: 'A' },
            { label: 'Não', value: 'B' },
            { label: 'Talvez', value: 'C' },
            { label: 'Sla', value: 'D' },
            { label: 'Corno', value: 'E' },
          ],
          correctAnswer: 'C',
          level: 1,
        },
      ];
      setQuestions(response);
    }

    loadQuestion();
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="answerResponse" hidden />
        <Questions>
          {answerCheckd}
          {questions.map(question => (
            <div key={question}>
              <QuestionTitle>{question.question}</QuestionTitle>
              {question.answers.map(answers => (
                <Answer
                  checked={answerCheckd}
                  key={answers.value}
                  type="button"
                  onClick={() => {
                    setAnswer(answers.value);
                    handleCheckd();
                  }}
                >
                  {answers.label}
                </Answer>
              ))}
            </div>
          ))}
        </Questions>

        <hr />

        <button type="submit">{loading ? 'Carregando...' : 'Enviar'}</button>
      </Form>

      <button type="button" onClick={handleReset}>
        Reiniciar Quiz
      </button>
    </Container>
  );
}
