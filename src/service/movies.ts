import axios from "axios";
import React from "react";

var num = 0
const getRandomNum = () =>{
    
    num = Math.random() * 90000
    
}

getRandomNum()


const getMovie = axios.create({
    
    url: `https://api.themoviedb.org/3/movie/${num}?api_key=97af6b14d032bae005259a1fc50fe605&language=pt-BR&external_source=imdb_id`,

})

export default getMovie
