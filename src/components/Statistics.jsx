import data from '../data.json';

export default function Statistics() {
  return (
    <div className="statistics">
      <h3>Upload Stats</h3>
      <ul className="statistics__list">
        {data.map(stat => (
          <Element stat={stat} key={stat.id} />
        ))}
      </ul>
    </div>
  );
}

function Element({ stat }) {
  const getBackgroundColor = percentage => {
    if (percentage < 10) return '#7603FF';
    if (percentage < 20) return '#FF0303';
    if (percentage < 40) return '#4FC4F7';
    return '#20B8C5';
  };

  return (
    <li
      className="statistics__item"
      style={{ backgroundColor: getBackgroundColor(stat.percentage) }}
    >
      <p>{stat.label}</p>
      <p>{stat.percentage}</p>
    </li>
  );
}
