import { Link, Outlet, useParams } from "react-router-dom"

export const LayoutComponents = () => {

    const params = useParams();
    const IsMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && params?.city !== undefined;

    const Header = () => {

        return <header className="header">
                    <div className="header-image__container">
                        <Link to="/" className="header-image__link">
                            <object className="header-image__logo"  data="./img/Лого.svg"/>
                            <p className="header-text">WeatherCheck</p>
                        </Link>
                    </div>
                </header>


    }
    
    return  <>
            {IsMobile ? null : <Header/>}
            <main className="main">
                <Outlet/>
            </main>
            <footer className={IsMobile ? "footer-mobile" : "footer"}/></>
            
}