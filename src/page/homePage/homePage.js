import { useEffect, useState } from 'react';
import { CitySearch } from '../../components/CitySearch/city';
import { DescriptionOrFavorite } from '../../components/DescriptionOrFavorite/DescriptionOrFavorite';
import './homeStyle.scss';

export const HomePage = () => {

    const [city, setCity] = useState("");
    const [dataCity, setDataCity] = useState("");
    const [loading, setLoading] = useState(true);

    document.addEventListener('keydown' , (event) => {

        if(event.key === 13) {
            event.preventDefault();
        }

    })

    const setCityName = (event) => {
        
        setCity(event.target.value);

    }

    const fetcDataCity = async() => {

        let isMounted = true;

        if(loading)
            await fetch(`http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${city}&hateoasMode=false&languageCode=ru&limit=5&offset=0`)
            .then((data) => data.json())
            .then((dataJson) => {
                if(isMounted)
                    setDataCity(dataJson);
            })
            .catch(() => setDataCity({data:[{city: "Ничего не найдено"}]}));

        await setLoading(false);
        
        return () => { isMounted = false };
    }

    useEffect(() => {

        let isMounted = true;
        document.body.classList.remove('section-city__background');

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

    const LogicInput = () => {

        return    (city.length) >= 3 
                        &&
                    <div className="section-home__towhs">
                        {dataCity?.data?.length > 0 
                        ? 
                        <CitySearch {...{dataCity, city}}/> 
                        : 
                        <div className="section-home__container-city">
                            <span className="section-home__target-city">Ничего не найдено</span>
                        </div>}
                    </div>

    }
    
    return  <section className="section-home">
                <div className="section-home__input-container">
                    <input onChange={setCityName} placeholder="Укажите город" type="text" className="section-home__input"/>
                    <LogicInput/>
                </div>
                <DescriptionOrFavorite/>
            </section>

}