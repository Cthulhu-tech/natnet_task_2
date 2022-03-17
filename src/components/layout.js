import { Outlet } from "react-router-dom"

export const LayoutComponents = () => {

    return  <>
            <header>
                <div className="header_image_container">
                    <img className="header_image_logo"  src="./img/Лого.svg"/>
                    <p className="header_text">WeatherCheck</p>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer/>
            </>

}