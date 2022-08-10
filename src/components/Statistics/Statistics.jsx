import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export default function StatsData({ title, stats }) {
  const colors = function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const list = stats.map(item => (
    <li
      className={style.item}
      key={item.id}
      style={{ backgroundColor: colors() }}
    >
      <span className={style.label}>{item.label}</span>
      <span className={style.percentage}>{item.percentage}</span>
    </li>
  ));
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.stat__list}>{list}</ul>
    </section>
  );
}
StatsData.ropTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
