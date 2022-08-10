import PropTypes from 'prop-types';
export default function ElementStats({ id, label, percentage }) {
  return (
    <li className="item" key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
}
ElementStats.protoTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
