import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h2>{title}</h2>
      {total ? (
        <>
          {' '}
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback:{positivePercentage}%</p>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
