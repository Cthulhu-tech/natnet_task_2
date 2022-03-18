import { NavLink } from "react-router-dom";

export  const CitySearch = ({dataCity, city}) => {

    const cityState = city.split('');
    
    return (dataCity?.data?.length > 0)
    
    ?

    dataCity?.data?.map((cityInfo) => {

        return  <NavLink to={`${cityInfo.city}`} key={cityInfo.id} className="section-home__navlink-city">
                    <div className="section-home__container-city">
                    {

                    cityInfo.city.split('').map((char, i) => {

                        if(cityState[i] === char || cityState[i] === char.toUpperCase()){
                            
                            return <span key={i} className="section-home__target-city">{char}</span>

                        }else{

                            return <span key={i} className="section-home__untarget-city">{char}</span>

                        }

                    })
                    }</div>
                </NavLink>
    })

    :

    <div className="section-home__container-city">
        <span className="section-home__target-city">Загрузка ...</span>
    </div>

}