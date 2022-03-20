import { TemperatureConverter } from "../../utils/temperatureConverter";
import { ImageReturn } from "../../utils/ImageReturn";
import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from "react";

export const HomeFavorite = () => {

    const [load, setLoading] = useState(false);
    const [dataCity, setDataCity] = useState("");
    const favorite = JSON.parse(localStorage.getItem("favoriteCity"));

    const favoriteLoad = async () => {
        
        const data = await Promise.all(favorite?.city?.map((city) => {
            return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&limit=1&appid=9b8876e49464e6307cd5b1983df27f40`)
            .then((data) => data.json())
            .catch(() => 'false');
        }));

        await setDataCity(data);
        await setLoading(true);


    }

    useEffect(() => {
        
    if(!load)
        favoriteLoad();


    }, [load, dataCity]);

    const Favorite = useCallback(() => {

    return  <div className="container-favorite">
                {dataCity?.map((info) => {
                
                    return  <Link to={info?.name} key={info?.id} className="container-favorite__link">
                                <div className="container-favorite__temperature">
                                    <p className="container-favorite__paragraph-name">{info?.name}</p>
                                    <p className="container-favorite__paragraph-temperature">{TemperatureConverter(info?.main?.temp)}</p>
                                    <div className="container-favorite__temperature-image">
                                        <object data={ImageReturn(info?.weather[0]?.icon)} className="container-favorite__temperature-image" />
                                    </div>
                                </div>
                            </Link>
                })}
            </div>

    },[dataCity])

    return load ? <Favorite/> : <p className="container-favorite__paragraph-temperature">Загрузка...</p>

}