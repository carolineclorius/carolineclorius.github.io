import "./QuestionList.css";

function QuestionList({ questions }) {
  return (
    <section className="question-list">
      <h2>HMW questions</h2>

      <ul className="question-list__list">
        {questions.map((question) => (
          <li key={question} className="question-list__item">
            <p>{question}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
