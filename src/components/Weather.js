import React from "react";

class Weather extends React.Component {

    // constructor(props) {

    //     super(props);
    // }

    render() {

        // CAN RETUTN ONLY ONE PARRENT ELEMENT
        return(

             // ONE GENERAL/PARRENT TAG CAN BE RETURNED
             
            <div className='weather'>
               
               

                { this.props.city  &&

                    <div>

                        {/* <p>  {this.props.city} </p> */}
                        <p> Temperature: {this.props.temp} &deg;C </p>  
                        <p> Sunrise: {this.props.sunrise} am </p>  
                        <p> Sunset: {this.props.sunset} pm </p>  


                    </div>
                }
                
                {/* IF CITY IS NOT CHOSEN */}
                <p> {this.props.error} </p>
               
                
               

            </div>
        )
    }
}


export default Weather;
// import Weather from "./components/info.js"