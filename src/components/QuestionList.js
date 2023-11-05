import React from "react";
import QuestionItem from "./QuestionItem";


function QuestionList({questions, handleDelete, handleUpdate }) {
  // const [questions, setQuestions] = useState([]);
  // // Fetch questions when component mounts
  // useEffect(() => {
  //   fetch("http://localhost:4000/questions")
  //   .then((res) => res.json())
  //   .then((questions) => setQuestions(questions))
  // })
  const questionList = questions.map((question) => {
    return <QuestionItem key={question.id} question={question} onHandleDelete={() => onHandleDelete(question.id)} onHandleUpdate={(newCorrectIndex) => onHandleUpdate(question.id, newCorrectIndex)}/> 
  })
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{}</ul>
    </section>
  );
}

export default QuestionList;

