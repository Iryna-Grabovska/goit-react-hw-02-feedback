import PropTypes from 'prop-types';
import Notification from '../Notification';
import s from './Statistics.module.css';
export default function Statistics({ good, neutral, bad, total }) {
  return (
    <>
      {total ? (
        <ul>
          <li className={s.statisticsItem}>
            Good:
            <span className={s.statisticsItem__s}> {good}</span>
          </li>
          <li>
            Neutral:
            <span className={s.statisticsItem__s}> {neutral}</span>
          </li>
          <li>
            Bad:
            <span className={s.statisticsItem__s}> {bad}</span>
          </li>
          <p className={s.statisticsTotal}>Total: {total}</p>
        </ul>
      ) : (
        <Notification message='No feedback given'></Notification>
      )}
    </>
  );
}
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
};
