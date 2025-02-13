import React, { useEffect, useState } from 'react';
import '../../Style/custom.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { endPointBaseUrl, apiKey }  from '../../utils/utils'; 
import Bewölkt_Dunkel from '../../assets/Bewölkt_Dunkel.png'; 
import axios from 'axios'; 

interface Location {
  id: number ,
  name: string,
  weatherDetails: string,
  weatherMood: string,
  day: string
}


function Locations() {
  const [inputvalue, setInputval] = useState<string>('berlin');
  const dispatch = useDispatch();
  const [locations,setLocations] = useState<any>([]); 
  const [data, setData] = useState({});
  
  const weatherImages = {
    bewölktDunkel: Bewölkt_Dunkel,
    sunny:"",
    heavyRainnig:"",
    rainAndSun:"",
    cloudy:"",
    rainAndThunder:"",
    sunAndCloudy:"",
    double:""
  }

  const saveLocationIntodataBase = (location :Location) => {
    const data = location
    axios.post(`${endPointBaseUrl}/saveLocation`,{params:{locataion:data}} )
     .then(function (response) {
        console.log(response);
        setData(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  const getLocationsFromWeatherApi = () => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=${apiKey}`)
    .then(function (response) {
      // handle success
      let locationData= response.data ; 
      let location = {
        id:locations.length + 1 ,
        name : response.data.name,
        weatherDetails:response.data.main.temp,
        weatherMood : response.data.weather[0].main,
        day:'Monday'
      }
      saveLocationIntodataBase(location)
      setLocations([...locations,location])
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  };

  return (
    <div className="wrapper">
       <h1 className='dashboard'>Dashboard</h1>
       <div className='locations'>   
        {locations.map((locationItem: Location, index: number) => (
          <div className="locations__card" key={`locations__${index}`}>
            <Link to={`/details/${locationItem.id}`}>
              <div>
                <h2 className='header'>{locationItem.name}</h2>
                <div className='locations__card-detail'>
                    <span className='locations__card-image'><img src={weatherImages.bewölktDunkel} alt="dark image" /></span>
                    <span className='locations__card-content'>
                     <span>{locationItem.day}</span>
                     <span>{locationItem.weatherDetails}</span>
                     <span>0% Regen</span>
                     <span>{locationItem.weatherMood}</span>
                    </span>
                </div>
              </div>
            </Link>
         </div>
        ))}
       <div onClick={()=>{ showModal()}} className="locations__card">
       <div className='locations__card-detail'>
          <span className='locations__card-content'>
            Ort hinzufügen
          </span>
       </div>
       </div>
      </div>
    </div>
  );
}

export default Locations;
