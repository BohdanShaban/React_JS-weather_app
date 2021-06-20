import React from "react";

const Form = ( {getWeather} ) => {    

    
    return(

        <div className="input__form">
            <form onSubmit= {getWeather} >

                <input type= "text" name= "city" placeholder= "Type the city ..."/>
                <button> Get Wether </button>

            </form>
        </div>
    )
}

export default Form;