import PropTypes from 'prop-types';
export default function ElementStats({ id, label, percentage }) {
  return (
    <li class="item" key={id}>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
  );
}
ElementStats.protoTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
