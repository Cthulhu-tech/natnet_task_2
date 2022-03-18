import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { CitySearch } from '../../components/CitySearch/city';
import './homeStyle.scss';

export const HomePage = () => {

    const [city, setCity] = useState("");
    const [dataCity, setDataCity] = useState("");
    const [loading, setLoading] = useState(true);

    const setCityName = (event) => {
        
        setCity(event.target.value);

    }

    const fetcDataCity = () => {

        let isMounted = true;

        if(loading)
             fetch(`http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${city}&hateoasMode=false&languageCode=ru&limit=5&offset=0`)
            .then((data) => data.json())
            .then((dataJson) => {
                if(isMounted)
                    setDataCity(dataJson);
            })
            .catch(() => setDataCity({data:[{city: "Ничего не найдено"}]}));

        setLoading(false);
        
        return () => { isMounted = false };
    }

    useEffect(() => { 

        let isMounted = true;
        
        if(city.length < 3 && isMounted){
            
            setDataCity("");

        }

        if(city.length % 3 === 0 && city !== "" && isMounted){

            fetcDataCity(isMounted);

        }else{
            if(isMounted)
                setLoading(true);

        }

        return () => { isMounted = false };

    }, [city, dataCity, loading]);
    
    return  <section className="section-home">

                <div className="section-home__input-container">
                    <input onChange={setCityName} placeholder="Укажите город" type="text" className="section-home__input" />
                    {city.length >= 3 
                        &&
                    <div className="section-home__towhs">
                        {dataCity?.data?.length > 0 
                        ? 
                        <CitySearch {...{dataCity, city}}/> 
                        : 
                        <div className="section-home__container-city">
                            <span className="section-home__target-city">Ничего не найдено</span>
                        </div>}
                    </div>}
                </div>

                <div className="container-description">

                    <div className="sub-container-description">
                        <object className="container-description__pointer"  data="img/Stroke.svg"/>  
                        <p className="container-description__paragraph"> 
                        Начните вводить город, например, 
                        <Link to="Ижевск" className="container-description__link">Ижевск</Link>
                        </p>
                    </div>

                    <p className="container-description__paragraph-description">
                    Используйте значок «закладки»,
                    чтобы закрепить город на главной
                    </p>
                    <object className="container-description__image"  data="img/Vector.svg"/>
                </div>
            </section>

}