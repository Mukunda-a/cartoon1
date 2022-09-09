import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import Animelist from "./Animelist";



const Wishlist = () => {

    let { data: animes, pending } = useFetch("https://api.jikan.moe/v4/anime")

    // let [wishlistAnimes, setwishlistAnimes] = useState(null)

    const [wish, setWish]=useState(null);

    useEffect(() => {

        let wish = localStorage.getItem("wish");
        wish = JSON.parse("wish")
        setWish(wish)

    }, [])
    return (
        <div className="home">

            {pending && <h1>Loading....................</h1>}

            {animes && <Animelist animes={animes.filter((anime)=>{return wish.includes(anime.mal_id)})} />}


        </div>
    );





}

export default Wishlist;