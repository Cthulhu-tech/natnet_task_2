import { Link, Outlet } from "react-router-dom"

export const LayoutComponents = () => {

    return  <>
            <header className="header">
                <div className="header-image__container">
                    <Link to="/" className="header-image__link">
                        <img className="header-image__logo"  src="./img/Лого.svg"/>
                        <p className="header-text">WeatherCheck</p>
                    </Link>
                </div>
            </header>
            <main className="main">
                <Outlet/>
            </main>
            <footer className="footer"/>
            </>
}