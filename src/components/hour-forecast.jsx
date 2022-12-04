const HourForecast = ({ forecast , toggle}) => (
  <div className='hours-container'>
    <h2 className="hours-title">HOURS FORECAST</h2>
    <ul>
      {forecast.forecastday[0].hour.map((fore) => {
        const event = new Date(fore.time);
        let time = event.toLocaleString('en-US',{
          hour: 'numeric',
          hour12: true,
        });
        return (
          <li key={fore.time}>
            <span>{time}</span>
            <img src={fore.condition.icon} alt={fore.condition.text} />
            {toggle ? Math.round(fore.temp_f) : Math.round(fore.temp_c)}&#176;
          </li>
        );
      })}
    </ul>
  </div>
);
export default HourForecast;
