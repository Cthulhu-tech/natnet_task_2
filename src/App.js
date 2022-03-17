import {BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./page/homePage/homePage";
import { CityPage } from "./page/CityPage/cityPage";
import { LayoutComponents } from "./components/layout";

export const App = () => {

  return  <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutComponents />}>
                  <Route index element={<HomePage />}/>
                  <Route path=":city" element={<CityPage/>}/>
                </Route>
            </Routes>
          </BrowserRouter>
}