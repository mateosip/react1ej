import React from 'react'; //we dont need the component
import "./Styles.css";

const Student = (props) => {

    const studentFilter = props.studentFilter;
    const students = props.students;
    const subject = props.subject;
    const studentOnClick = props.studentOnClick;

    const studentsFiltered = studentFilter === 0 ?
        students :
        students.filter(stu => {
            if (studentFilter === 1){
                if(stu.nota>=5){
                    return stu;
                }
            }
            if (studentFilter === 2){
                if(stu.nota<5){
                    return stu;
                }
            } 
        });
        console.log(studentsFiltered);
    return (
        <div className="Student">
           
            {studentsFiltered.map(stud => (
                <p
                    key={stud.name}
                    onClick={() => studentOnClick(stud.name, subject)}
                >
                    {stud.name} - {stud.view ? stud.mark : null}
                </p>
            ))}
        </div>
    )
}
export default Student;
