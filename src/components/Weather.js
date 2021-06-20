import React from "react";

const Weather = ({city, temp, sunrise, sunset, error}) => {

    return(
             
        <div className='weather'>

            { city  &&

                <div>
                    <p> Temperature: {temp} &deg;C </p>  
                    <p> Sunrise: {sunrise} am </p>  
                    <p> Sunset: {sunset} pm </p>  
                </div>
            }
            
            {/* IF CITY IS NOT CHOSEN */}
            <p> {error} </p>
           
        </div>
    )
}

export default Weather;