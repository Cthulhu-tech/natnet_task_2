import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './cityStyle.scss';

export const CityPage = () => {

    const params = useParams();
    const [find, setFind] = useState(false);
    const [loading, setLoading] = useState(false)
    const [dataCity, setDataCity] = useState("");


    const findElementToLocalStorage = () => {

        const favorite = JSON.parse(localStorage.getItem("favoriteCity"));

            for(let i = 0; i < favorite?.city?.length; i++){
                if(favorite?.city[i] === params.city){
                    return setFind(true);
                }
            }

            setFind(false);
            
    }

    const dataLoad = useCallback(() => {

        setLoading(true);

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.city}&limit=1&appid=9b8876e49464e6307cd5b1983df27f40`)
        .then((data) => data.json())
        .then((data) => setDataCity(data))
        .catch(() => setDataCity(""));

    },[params]);

    const localStorageAdd = async () => {

        let findUndefined = false;

        const favorite = await JSON.parse(localStorage.getItem("favoriteCity"));

        const city = await params?.city;

        if(!favorite || favorite?.city?.length === 0){
            setFind(true);
            return localStorage.setItem( "favoriteCity" , 
                JSON.stringify(
                    {city: 
                        [city]
                    })
                );
        }

        favorite.city = favorite?.city.filter((data) => {
            if(data === city){
                findUndefined = true;
            }
            if(data !== city){
                return data;
            }
        })

        if(findUndefined){
            setFind(false);
            return  localStorage.setItem( "favoriteCity" , JSON.stringify({city:[ ...new Set([...favorite.city])] }))
        }
        
        if(favorite?.city?.length > 0){
            setFind(true);
            return localStorage.setItem( "favoriteCity" , JSON.stringify({ 
                city:[ ...new Set([...favorite.city, city])] 
            }));
        }

    }

    useEffect(() => {

        findElementToLocalStorage();
        console.log('f')

        let isMounted = true;

        if(isMounted && !loading)
            dataLoad();

        return () => { isMounted = false };

    }, [dataCity, find, loading]);

    return  <section className="section-city">
                <nav className="section-city__navigation">
                    <Link to="/" className="section-city__link" >
                        <div className="section-city__container-navigation">
                        <div className="section-city__arrow"/>
                        Назад
                    </div>
                    </Link>
                    <div className={find ? "section-city__favorites favorite" : "section-city__favorites"} onClick={localStorageAdd}/>
                </nav>
            </section>

}