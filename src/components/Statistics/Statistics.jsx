import PropTypes from 'prop-types';

export const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;
  
  if (good + neutral + bad === 0)
    return <p>"There is no feedback"</p>;
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>
        Positive feedback:
        {positivePercentage}
      </p>
    </>
  );
};


Statistics.propTypes = {
  props: PropTypes.shape({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  }),
};