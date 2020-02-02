import React from 'react'; //we dont need the component
import "./Styles.css";


const teacher = (props) => {
    return (//props name es el procedente de subject(componente)
        <div className="Teacher">
            {props.name}
        </div>
    )
}
export default teacher;