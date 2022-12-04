const Main = ({ weather , toggle}) => {
  const { current, forecast, location } = weather;
  return (
    <div className='main-content'>
      <div className="content">
      <h1>{location.name}</h1>
      <h2 className="current-temp"> {toggle ? Math.round(current.temp_f) : Math.round(current.temp_c)  }&#176;</h2>
      <p>{current.condition.text}</p>
      <p>
          H:{ toggle ? Math.round(forecast.forecastday[0].day.maxtemp_f) : Math.round(forecast.forecastday[0].day.maxtemp_c)}&#176;
          L:{ toggle ? Math.round(forecast.forecastday[0].day.mintemp_f) : Math.round(forecast.forecastday[0].day.mintemp_c)}&#176;
      </p>
      </div>
    </div>
  );
};
export default Main;
