import React from 'react';
import "./Styles.css";

const course = (props) => {
    const { courseOnClick } = props;
    return (
        <div className="Course">
            <div className="child" onClick={() => courseOnClick(1)}>
                1
            </div>
            <div className="child" onClick={() => courseOnClick(2)}>
                2
            </div>
            <div className="child" onClick={() => courseOnClick(3)}>
                3
            </div>
            <div className="child" onClick={() => courseOnClick(0)}>
                All
            </div>
        </div>
    )
}
export default course;
// const subjects = cloneDeep(this.state.subjects);
//     const find = cloneDeep(this.state.subjects.filter(el => {
//       el.course === course
//     }))