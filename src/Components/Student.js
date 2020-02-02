import React from 'react'; //we dont need the component
import "./Styles.css";

const Student = (props) => {
    const name1 = props.students[0].name;
    const name2 = props.students[1].name;
    const name3 = props.students[2].name;
    const mark1 = props.students[0].mark;
    const mark2 = props.students[1].mark;
    const mark3 = props.students[2].mark;
    const mark1enabled = props.students[0].view;
    const mark2enabled = props.students[1].view;
    const mark3enabled = props.students[2].view;

    const subject = props.subject;
    const studentOnClick = props.studentOnClick;    
    return (//props name es el procedente de subject(componente)
        <div className="Student">
           <p onClick = {() => studentOnClick(name1,subject)}>
               {name1} - {mark1enabled ? mark1 : ""}
           </p>
           <p onClick = {() => studentOnClick(name2,subject)}>
               {name2} - {mark2enabled ? mark2 : ""}
           </p>
           <p onClick = {() => studentOnClick(name3,subject)}>
               {name3} = {mark3enabled ? mark3 : ""}
           </p>
        </div>
    )
}//en casa vez que se cargue
export default Student;
