import React from "react";
import QuestionItem from "./QuestionItem";


function QuestionList({questions, handleDelete, handleUpdate }) {
 
  const questionList = questions.map((question) => {
    return <QuestionItem key={question.id} question={question} handleDelete={() => handleDelete(question.id)} HandleUpdate={(newCorrectIndex) => handleUpdate(question.id, newCorrectIndex)}/> 
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList}</ul>
    </section>
  );
}

export default QuestionList;

