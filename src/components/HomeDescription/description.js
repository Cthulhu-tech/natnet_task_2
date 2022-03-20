import { Link } from "react-router-dom";

export const Description = () => {

    return  <div className="container-description">

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

}