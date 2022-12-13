import PropTypes from 'prop-types';
import { FeedbackBtn } from './FeedbackOption.styled';

export const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;
  return (
    <FeedbackBtn name={options} type="button" onClick={onLeaveFeedback}>
      {options}
    </FeedbackBtn>
  );
};

FeedbackOptions.propTypes = {
  props: PropTypes.shape({
    options: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  }),
};

// export default FeedbackOptions;
