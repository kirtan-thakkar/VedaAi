import { useState, useCallback } from 'react';
import { nanoid } from 'nanoid';

export interface QuestionType {
  id: string;
  name: string;
  questions: number;
  marks: number;
}

const initialQuestionTypes: QuestionType[] = [
  { id: nanoid(), name: 'Multiple Choice Questions', questions: 4, marks: 1 },
  { id: nanoid(), name: 'Short Questions', questions: 3, marks: 2 },
];

export const useQuestionTypes = () => {
  const [questionTypes, setQuestionTypes] = useState<QuestionType[]>(initialQuestionTypes);

  const addQuestionType = useCallback(() => {
    setQuestionTypes(prev => [
      ...prev,
      { id: nanoid(), name: 'New Question Type', questions: 1, marks: 1 },
    ]);
  }, []);

  const removeQuestionType = useCallback((id: string) => {
    setQuestionTypes(prev => prev.filter(qt => qt.id !== id));
  }, []);

  const updateQuestionType = useCallback((id: string, field: keyof QuestionType, value: string | number) => {
    setQuestionTypes(prev =>
      prev.map(qt => (qt.id === id ? { ...qt, [field]: value } : qt))
    );
  }, []);

  const increment = useCallback((id: string, field: 'questions' | 'marks') => {
    setQuestionTypes(prev =>
      prev.map(qt =>
        qt.id === id ? { ...qt, [field]: qt[field] + 1 } : qt
      )
    );
  }, []);

  const decrement = useCallback((id: string, field: 'questions' | 'marks') => {
    setQuestionTypes(prev =>
      prev.map(qt =>
        qt.id === id && qt[field] > 0 ? { ...qt, [field]: qt[field] - 1 } : qt
      )
    );
  }, []);

  const totalQuestions = questionTypes.reduce((acc, curr) => acc + curr.questions, 0);
  const totalMarks = questionTypes.reduce((acc, curr) => acc + (curr.questions * curr.marks), 0);


  return {
    questionTypes,
    addQuestionType,
    removeQuestionType,
    updateQuestionType,
    increment,
    decrement,
    totalQuestions,
    totalMarks,
  };
};
