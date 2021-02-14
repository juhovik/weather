import {useState, useEffect} from 'react'
import Weather from './Weather.js'

export default function Position() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude)
        setIsLoading(false)
      }, (error) => {
        alert(error);
        setIsLoading(false)
      })
    }
    else {
      alert('Your browser does not support geolocation!')
    }
  }, [])

  if(isLoading) {
    return <p>Loading...</p>
  }
  else {
  return (
    <div className="content">
      <h3>Your position is</h3>
    <p>
      Position:&nbsp;
      {lat.toFixed(3)},&nbsp;
      {lng.toFixed(3)}
    </p>
    <Weather lat={lat} lng={lng} />
    </div>
  );
  }
}