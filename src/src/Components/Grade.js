import React from 'react';
import "./Styles.css";
const grade = (props) => {
    const {gradeOnClick } = props;
    return(
        <div className = "Grade">
            <div className="child2" onClick = {()=>gradeOnClick(1)}>
                Failed
            </div>
            <div className="child2" onClick = {()=>gradeOnClick(2)}>
                Passed
            </div>
            <div className="child2" onClick = {()=>gradeOnClick(0)}>
                All
            </div>
        </div>
    )
}
export default grade;