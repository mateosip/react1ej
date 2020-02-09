import React from 'react';
import Subject from './Subject';
const content = (props) => {
    const { subjects, subjectOnClick, studentOnClick,courseFilter,studentFilter } = props;
    const subjectsFiltered = courseFilter === 0 ?
        subjects:
        subjects.filter(sub => {
            if(courseFilter === 1) return sub.course===1;
            if(courseFilter === 2) return sub.course===2;
        })
    return (
        <div className="Content">
            {
                subjects.map(sub => (
                    <Subject
                        key={sub.id}
                        subject={sub}
                        subjectOnClick={subjectOnClick}
                        studentOnClick={studentOnClick}
                        courseFilter={courseFilter}
                        studentFilter={studentFilter}
                    />
                ))
            }
        </div>

    )
}
export default content;
