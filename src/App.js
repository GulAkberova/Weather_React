import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";

function App() {
  const [all, setAll] = useState({});
  const[city,setCity]=useState('London')
  const[loading,setLoading]=useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=27d0dcc40fc94464b4d101455222212&q=${city || 'London'}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => {
        setAll(data);
        setLoading(false)
      });
  }, [city]);



  return (
    <>
      <Header   />
      <Weather all={all} city={city} setCity={setCity} loading={loading} setLoading={setLoading}/>
    </>
  );
}

export default App;
