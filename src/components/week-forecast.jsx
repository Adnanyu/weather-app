const WeekForecast = ({ forecast, toggle }) => {
  const weekDays = ['SUN', 'SAT', 'MON', 'TUE', 'WED', 'THU', 'FRI'];
  return (
    <div className='forecast-container'>
      <h2 className="forecast-title">7 DAYS FORECAST</h2>
      <ul>
        {forecast.forecastday.map((days) => {
          const d = new Date(days.date);
          let day = d.getDay();
          return (
            <li key={days.date}>
              <span>{weekDays[day]}</span>
              <img
                src={days.day.condition.icon}
                alt={days.day.condition.description}
              />
              <span>
                H:{ toggle ? Math.round(days.day.maxtemp_f) : Math.round(days.day.maxtemp_c)}&#176;
                L:{ toggle ? Math.round(days.day.mintemp_f) : Math.round(days.day.mintemp_c) }&#176;
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default WeekForecast;
