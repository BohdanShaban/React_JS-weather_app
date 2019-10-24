import React from "react";

// import COMPONENTS
import Info from "./components/Info.js"
import Form from "./components/Form.js"
import Weather from "./components/Weather.js"
// import { async } from "q";

// API KEY
const API_KEY = "fec3d813e8930919b9f55a93b65ad231"; //https://openweathermap.org
// https://openweathermap.org/current -> DOCUMENTATION


class App extends React.Component {

  // state = {

  //   city: undefined,
  //   temp: undefined,
  //   sunrise: undefined,
  //   sunset: undefined,

  //   error: undefined
  // }

  constructor(props) {

    super(props);
    // STATE
    this.state = {

      city: undefined,
      temp: undefined,
      sunrise: undefined,
      sunset: undefined,
  
      error: undefined
    }

  }

  // NEED FOR ASYNCRON CALLING / ON BACKGROUND / WITHOUT PAGE RELOADING
   gettingWeather = async (event) => {

    event.preventDefault();

    const city = event.target.elements.city.value ;

    if( city ) {

      const api_url = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

      const jsonData = await api_url.json();

      //// TIME SPAN    
      let  sunrise = jsonData.sys.sunrise;
      let  date_1    = new Date();
      date_1.setTime(sunrise);
      let  sunrise_date = date_1.getHours() + ":" + date_1.getMinutes() + ":" + date_1.getSeconds();
     
      //// TIME SPAN
      var sunset = jsonData.sys.sunset;
      var date_2    = new Date();
      date_2.setTime(sunset);
      var sunset_date = date_2.getHours() + ":" + date_2.getMinutes() + ":" + date_2.getSeconds();
      
      console.log( jsonData );

      //// SET_STATE
      this.setState( {

        city: jsonData.name,
        temp: jsonData.main.temp,
        sunrise: sunrise_date,
        sunset: sunset_date,

        error: ""
      } );
      
    }
    else {

      this.setState( {

        city: undefined,
        temp: undefined,
        sunrise: undefined,
        sunset: undefined,

        error: "Choose the city"
    } );
    
    }
  }

    render() {

      // CAN RETUTN ONLY ONE PARRENT ELEMENT
      return( 

        // ONE GENERAL/PARRENT TAG CAN BE RETURNED
        <div className="wrapper"> 
          <div className="main">


            <div className="container">
                <div className="row">
                    <div className="col-sm-5 info ">
                    < Info />

                    </div>

                    <div className="col-sm-7 form " >
                      < Form weatherMethod= {this.gettingWeather} />
                      < Weather   
                                  city = {this.state.city}
                                  temp = {this.state.temp}
                                  sunrise = {this.state.sunrise}
                                  sunset = {this.state.sunset}

                                  error = {this.state.error}
                          />
                    </div>
                </div>
            </div>
          
          
          </div>
          
        </div>
        
      )
  }
}

export default App;

// weatherMethod= {this.gettingWeather}