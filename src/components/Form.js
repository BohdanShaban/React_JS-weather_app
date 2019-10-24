import React from "react";  


class Form extends React.Component {    

    

    render() {

        // CAN RETUTN ONLY ONE PARRENT ELEMENT
        return(
            
            
            <form onSubmit= {this.props.weatherMethod} >

                <input type= "text" name= "city" placeholder= "city" />
                <button> Get Wether </button>

            </form>
        )
    }
}


export default Form;
// import Form from "./components/info.js"