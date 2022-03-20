import { useContext } from "react";
import { WeatherContext } from "../../context/weatherContext";
import { WeatherInfo } from "../CityWeatherInfo/weatherInfo";


export const Weather = () => {

    const weather = useContext(WeatherContext);

    const Load = () => {

        return  <div className="section-city__load-container">
                    <p className="section-city__load-paragraph">Загрузка...</p>
                </div>

    }

    return  <div className='section-city__weather-information'>
                {weather ? <WeatherInfo/> : <Load/>}
            </div>

}