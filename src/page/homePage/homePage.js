import { Link } from "react-router-dom";
import './homeStyle.scss';

export const HomePage = () => {

    return  <section className="section_home">
                <input className="section_home-input" type="text" placeholder="Укажите город"/>
                <div className="section_home-container_description">
                    <p className="section_home-container_description-pre">
                    Начните вводить город, например, <Link to="ijevsk">Ижевск</Link>
                    </p>
                </div>
            </section>

}