import { Description } from "../HomeDescription/description";
import { HomeFavorite } from "../HomeFavorite/homeFavorite";

export const DescriptionOrFavorite = () => {

    const favorite = JSON.parse(localStorage.getItem("favoriteCity"));

    return  favorite?.city?.length === 0 || !favorite 
            ? <Description/> 
            : <HomeFavorite/>

}