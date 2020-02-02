import React from 'react'; //we dont need the component
import Teacher from './Teacher';
import Student from './Student';
import "./Styles.css";


const subject = (props) => {
    const {subject,teacher,students,view} = props.subject;
    const {subjectOnClick, studentOnClick} = props;
    if (view){
        return (
            <div className="Subject">
                <h1 onClick = {() => subjectOnClick(subject)}>{subject}</h1>
                <Teacher name = {teacher}/>
                <Student>
                    students = {students}
                    subject = {subject}
                    studentOnClick = {studentOnClick}
                </Student>
            </div>
        )
    }else{
        return(
            <div className = "Subject">
                <h1 onClick = {() => subjectOnClick(subject)}>{subject}</h1>
            </div>
        )
    }
    
}
export default subject;
