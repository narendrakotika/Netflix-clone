import React, { useState } from 'react'
import Axios from "axios"
import { API_KEY } from './Api'
import { imageUrl } from './Api'
import "./App.css"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"

//https://api.themoviedb.org/3/discover/tv/?api_key=5d4dae0634daee0004fa94f7c36f6551&with_network=123 


function NetflixOriginals() {
    
const [oringinalData,setOringinalData] =useState([])
const [myId,setMyId]=useState('')

 React.useEffect(function(){
    //logic to make request
    Axios.get(`https://api.themoviedb.org/3/discover/tv/?api_key=${API_KEY}&with_network=123`)
    .then(function(output){
      setOringinalData(output.data.results)
    })
    .catch(function(error){
       //movie-aconsole.log(error) 
    })

},[])
/*
function handleClick(movieData){
 // console.log(movieData)
     const movieName= movieData.name
    movieTrailer(movieName)

     .then(function(oup){
     // console.log(oup)
      setMyid(new URLSearchParams(new URL(oup).search).get("v"))

     })
     .catch(function(error){
       console.log(error)
     }) 
}*/
function handleClick(movieData)
    {
        const movieName = movieData.name

        movieTrailer(movieName)
        .then(function(output)
        {
          setMyId(new URLSearchParams(new URL(output).search).get("v"))
        })
        .catch(function(error)
        {
            console.log(error)
        })
    }

  return (
    <div>
        <h1 style={{color:"white"}}>NETFLIX ORIGINALS</h1>
    <div className='allimages'>{
    oringinalData.map(function(info){
        //console.log(info)
    return <img width="250px" height="250px"  src={imageUrl+info.poster_path} onClick={()=>handleClick(info)}/>
    })
    }
    </div>
   {myId ? <Youtube videoId={myId} />:null }
    </div>
  )
}

export default NetflixOriginals


///aOPhyvHDauWFuc3rthpHArCNyrm.jpg
//https://www.youtube.com/watch?v=0n7AWxYCj9I