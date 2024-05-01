import css from "./FeedBack.module.css";

function Feedback({
  totalFeedback,
  positiveFeedback,
  feedback: { good, neutral, bad },
}) {
  return (
    <ul className={css.indent}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Positive: {positiveFeedback}%</li>
      <li>Total: {totalFeedback}</li>
    </ul>
  );
}

export default Feedback;