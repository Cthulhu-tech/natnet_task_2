import { TemperatureConverter } from "../../utils/temperatureConverter";
import { WeatherContext } from "../../context/weatherContext";
import { ImageReturn } from "../../utils/ImageReturn";
import { useContext } from "react";

export  const WeatherInfo = () => {

    const weather = useContext(WeatherContext);

    const DateConverter = (date) => {

        const dataConvert = new Date(date * 1000);
        const hour = dataConvert.getHours();
        const min = dataConvert.getMinutes();

        return hour + ':' + min;

    }

    return  <>
                <p className='section-city__weather-information_name'>{weather && weather?.name}</p>
                <p className='section-city__weather-information_description'>{weather && weather?.weather[0]?.description}</p>
                <div className="section-city__weather-ico">
                    <p className='section-city__weather-ico_temperature'>{weather && TemperatureConverter(weather?.main?.temp)}</p>
                    {weather && <object data={ImageReturn(weather?.weather[0]?.icon)} className="section-city__weather-ico_svg"/>}
                </div>
                <div className="section-city__weather-ico">
                    <object data="img/barometer.svg" className="section-city__weather-ico_barometer"/>
                    <p className="section-city__weather-information_description" >{weather && weather?.main?.pressure} мм рт.ст.</p>
                </div>
                    <p className="section-city__weather-information_description-time">Закат в {weather && DateConverter(weather?.sys?.sunset)}</p>
            </>
}