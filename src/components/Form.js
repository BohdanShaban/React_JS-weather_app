import React from "react";  
class Form extends React.Component {    

    
    render() {

        // CAN RETUTN ONLY ONE PARRENT ELEMENT
        return(

            <div class="input__form">
                <form onSubmit= {this.props.weatherMethod} >

                    <input type= "text" name= "city" placeholder= "city" />
                    <button> Get Wether </button>

                </form>
            </div>
        )
    }
}

export default Form;