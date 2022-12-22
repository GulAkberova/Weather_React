import React from "react";

function Weather({all,city,setCity,loading,setLoading}) {
    const handleClick=(city)=>{
        setCity(city)
        console.log(city)
    } 
  return (
    <>
      <section className="weather_div">
       <div className="weather">
          <div className="weather_header">
            <input placeholder="Spain" type={"text"} value={city} onChange={(e)=>setCity(e.target.value)}/>
            <button onClick={()=>handleClick(city)}>Get Forecast</button>
          </div>
          <div className="weather_body">
          {loading?<div class="loader">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>: all && 
            
            <div className="weather_menu">
                
               <h1> {all?.location?.name}</h1>
               <img src={all?.current?.condition?.icon}/>
               <span>{all?.current?.condition?.text}</span>
                <h1>{all?.location?.lon}</h1>
                <h2>{all?.current?.is_day}</h2>
                <p>{all?.current?.wind_degree}&nbsp;{all?.current?.vis_km}&nbsp;{all?.current?.gust_kph}</p>
                
                
                </div>}
          </div>
        </div> 
      
      </section>
    </>
  );
}

export default Weather;
