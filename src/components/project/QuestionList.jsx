function QuestionList({ questions }) {
  return (
    <div className="question-list">
      {questions.map((question) => (
        <p className="question-list__item" key={question}>
          {question}
        </p>
      ))}
    </div>
  );
}

export default QuestionList;
