import React, { useState } from 'react'
import Axios from "axios"
import { API_KEY } from './Api'
import { imageUrl } from './Api'
import "./App.css"
//https://api.themoviedb.org/3/discover/tv/?api_key=5d4dae0634daee0004fa94f7c36f6551&with_network=123 


function Comedy() {
    
const [oringinalData,setOringinalData] =useState([])

 React.useEffect(function(){
    //logic to make request
    Axios.get(`https://api.themoviedb.org/3/discover/tv/?api_key=${API_KEY}&with_network=35`)
    .then(function(output){
      setOringinalData(output.data.results)
    })
    .catch(function(error){
      // console.log(error) 
    })

},[])

  return (
    <div>
        <h1 style={{color:"white"}}>COMEDY MOVIES</h1>
    <div className='allimages'>{
    oringinalData.map(function(info){
        //console.log(info)
    return <img width="250px" height="250px"  src={imageUrl+info.poster_path}/>
    })
    }
    </div>
    </div>
  )
}

export default Comedy
