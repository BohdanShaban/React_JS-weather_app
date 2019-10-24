import React from "react";

class Info extends React.Component {

    render() {

        // CAN RETUTN ONLY ONE PARRENT ELEMENT
        return(

             // ONE GENERAL/PARRENT TAG CAN BE RETURNED
            <div>
               
               <h1> Weather App </h1>
               <p> Find weather in yor location ! </p>
            </div>
        )
    }
}


export default Info;