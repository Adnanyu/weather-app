import './App.css';
import { useEffect, useRef, useState } from 'react';
import WeekForecast from './components/week-forecast';
import Main from './components/main';
import HourForecast from './components/hour-forecast';
import SearchBox from './components/search-box';
import './assets/SFUIText-Regular.otf';
function App() {
  const inputRef = useRef('');
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('helsinki');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    try {
      fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=f824236bc26a48d88a9140418220412&q=${city}&days=7&aqi=no&alerts=no`
      )
        .then((response) => response.json())
        .then((condition) => setWeather(condition));
    } catch (error) {
      console.log('hi', error.code);
    }
  }, [city, toggle]);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputRef.current.value !== '') {
      const location = inputRef.current.value
        .toLowerCase()
        .trim()
        .replace(' ', '_');
      setCity(location);
      inputRef.current.value = '';
    }
  };
  const toggleHandler = () => {
    setToggle(!toggle)
  }
  console.log(toggle)
  console.log(weather);
  console.log(city);
  const { forecast, current } = weather;
  
  return (
    <>
      {Object.keys(weather).length !== 0 && (
        <div className={`App ${current.is_day ? 'day' : 'night'}`} >
          <SearchBox onSubmitHandeler={ handleSubmit } inputRef={ inputRef } toggleHandler={ toggleHandler } />
          <main>
              <Main weather={weather} toggle={toggle} />
              <HourForecast forecast={forecast} toggle={toggle} />
              <WeekForecast forecast={forecast} toggle={toggle} />
          </main>
        </div>
        )}
    </>
  );
}

export default App;
