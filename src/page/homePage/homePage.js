import { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { Link } from "react-router-dom";
import './homeStyle.scss';

export const HomePage = () => {

    const [city, setCity] = useState("");

    const handleSelect = async value => {};

    const Suggestions = (suggestions) => {

        return suggestions.map((city) => {
            
            console.log(city)
            return <div>{city.terms[0].value}</div>
            
        })

    }

    return  <section className="section-home">

                <PlacesAutocomplete 
                    value={city} 
                    onChange={setCity} 
                    onSelect={handleSelect}>

                    {({getInputProps, suggestions, getSuggestionItemProps, loading}) => 
                    (<>
                    <input {...getInputProps({placeholder:"Укажите город", type:"text", className:"section-home__input"})}/>
                    {Suggestions(suggestions)}
                    </>)}

                </PlacesAutocomplete>

                <div className="container-description">

                    <div className="sub-container-description">
                        <img className="container-description__pointer"  src="img/Stroke.svg"/>  
                        <p className="container-description__paragraph"> 
                        Начните вводить город, например, 
                        <Link to="ijevsk" className="container-description__link">Ижевск</Link>
                        </p>
                    </div>

                    <p className="container-description__paragraph-description">
                    Используйте значок «закладки»,
                    чтобы закрепить город на главной
                    </p>
                    <img className="container-description__image"  src="img/Vector.svg"/>
                </div>
            </section>

}