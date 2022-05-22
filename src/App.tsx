import './App.css';
import axios from 'axios';
import CardMovie from './components/CardMovie'
import React from 'react';

interface Movie {
  title?: string
  backdrop_path?: string | null | undefined
}

type MoviesCollection = {
    title: string | undefined
    poster_path: string
}
function App() {
  // const [MoviesRandom, setMoviesRandom] = React.useState<[]>([]);
  const [Movie, setMovie] = React.useState<Movie[]>();
  const [number, setnumber] = React.useState<Array<Number>>([]);

  

    
    const MoviesPopular = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/popular?api_key=97af6b14d032bae005259a1fc50fe605&language=pt-BR&external_source=imdb_id&page=2`,
   
    }
    
    const MoviesPopular2 = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/popular?api_key=97af6b14d032bae005259a1fc50fe605&language=pt-BR&external_source=imdb_id&page=1`,
    }
    
    
    var mvs: MoviesCollection[] = []
    

    const getOthers = ()=>{
      
    axios.request(MoviesPopular).then(function (response) {
        
        const filmes: MoviesCollection[] = response.data.results
        
 


        for(let i=0; i<20; i++){
          mvs.push(filmes[i])
        }

        
        axios.request(MoviesPopular2).then(function (response) {
          
          for(let i=0; i<20; i++){
            mvs.push(filmes[i])
          }

          // busca um numero aleatorio até 20 
          var nRan = Math.random() * (39 - 1) + 1;
          var nums = number
          nRan = Math.floor(nRan)
    
          console.log('num sorteado ' + nRan);
          
          console.log('numeros ja sorteados ' + number.length);
          
          if(number.length === 37){
            alert('sem filmes mais')
            
          }else{
            

            if(nums.includes(nRan)){
              console.log('repetiu')
              nRan++
              console.log(nRan);
              
            }


            nums.push(nRan)
            setnumber(nums)
 
            try {
  
              const dataSet = [{
                title: mvs[nRan].title,
                backdrop_path: mvs[nRan].poster_path
              }]
  
              setMovie(dataSet)
            
            } catch (error) {
              console.log('filme sem titulo');
              nRan++
  
              try {
                const dataSet = [{
                  title: mvs[nRan].title,
                  backdrop_path: mvs[nRan].poster_path
                }]
  
                setMovie(dataSet)
              } catch (error) {
                console.log(error);
                
              }          
            }
          }


          
          


          


          
        })
      })
      
      mvs = []
    }

  // const getMoviePopular = () =>{
      
  //   mvs = []

  //   axios.request(MoviesPopular).then(function (response) {
  //     var data: never[] = response.data.results
  //     // console.log(data);
      
  //     for(let i = 0; i < 20; i++){
  //       mvs.push(data[i])
  //     }
  //   })
    
  //   getOthers()
  // }

  

  return (
    <div className=" flex justify-center bg-gray-900 h-screen text-white p-15">

      <div className='flex flex-col justify-center p-10'>
      
      <h1 className='mb-10 font-bold uppercase text-[30px] text-center'>Movies GiveAway</h1>
      
      {Movie && (
        <div className='mb-20'>
          
          <CardMovie
          imgUrl={`https://image.tmdb.org/t/p/w500/${Movie[0].backdrop_path}`}
          title={Movie[0].title}
          />

        </div>

        
      )}

      

        <button type="button" className="mt-5 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={getOthers}>Go !</button>


      </div>

      

    </div>
  );
}

export default App;
