import React, { Component } from 'react';
import cloneDeep from "clone-deep";
import './App.css';
import Subject from './Components/Subject';
class App extends Component {
  state = {
    subjects:
      [
        {
          view: true,
          subject: "Programacion I",
          id: 1,
          course: 1,
          teacher: "Alberto Valero",
          students: [
            {
              view: true,
              id: 1,
              name: "Marcos Alonso",
              mark: 7
            },
            {
              view:true,
              id: 2,
              name: "Luis Rodri",
              mark: 4
            },
            {
              view: true,
              id: 3,
              name: "Mariana Simbiotica",
              mark: 6
            }
          ]
        },
        {
          view: true,
          subject: "Estructura de Datos",
          id: 2,
          course: 1,
          teacher: "Jose Emilio Torres",
          students: [
            {
              view:true,
              id: 1,
              name: "Marcos Alonso",
              mark: 2
            },
            {
              view:true,
              id: 2,
              name: "Luis Rodri",
              mark: 4
            },
            {
              view:true,
              id: 3,
              name: "Mariana Simbiotica",
              mark: 6
            }
          ]
        },
        {
          view:true,
          subject: "Estructura de Datos",
          id: 2,
          course: 1,
          teacher: "Jose Emilio Torres",
          students: [
            {
              view:true,
              id: 1,
              name: "Marcos Alonso",
              mark: 2
            },
            {
              view:true,
              id: 2,
              name: "Luis Rodri",
              mark: 4
            },
            {
              view:true,
              id: 3,
              name: "Mariana Simbiotica",
              mark: 6
            }
          ]
        },
        {
          view:true,
          subject: "Java",
          id: 3,
          course: 2,
          teacher: "Jorge Comosellame",
          students: [
            {
              view:true,
              id: 4,
              name: "Agustina Agatiello",
              mark: 9
            },
            {
              view:true,
              id: 5,
              name: "Alberto Obo",
              mark: 4
            },
            {
              view:true,
              id: 6,
              name: "Simon Perico",
              mark: 6
            }
          ]
        },
        {
          view:true,
          subject: "Backend",
          id: 4,
          course: 3,
          teacher: "Alberto Otravez",
          students: [
            {
              view:true,
              id: 7,
              name: "Mateo",
              mark: 9
            },
            {
              view:true,
              id: 8,
              name: "Luis Tengounaduda",
              mark: 10
            },
            {
              view:true,
              id: 9,
              name: "Estefaniaaaa",
              mark: 6
            }
          ]
        }
      ]
  };
  subjectClickHandler = (subjectName) => {
    //busca el name de la asignatura y cambia el view
    const subjects = cloneDeep(this.state.subjects); // TO clone objects in javascript
    const find = subjects.find(subj => subj.subject === subjectName);

    if (find) {
      find.view = !find.view;
    }
    this.setState({ subjects });
  }
  studentClickHandler = (studentName, subjectName) => {
    const subjects = cloneDeep(this.state.subjects);
    const subject = subjects.find(subj => subj.subject === subjectName);

    if (subject) {
      const student = subject.students.find(stu => stu.name === studentName);
      if (student) {
        student.view = !student.view;
      }
    }
    this.setState({ subjects });
  }
  render() {
    return (
      <div className="App">
        {
          this.state.subjects.map(sub => (
            <Subject
              key={sub.id}
              subject={sub} 
              subjectOnClick={this.subjectClickHandler}
              studentOnClick={this.studentClickHandler}

            />
          ))
        }
      </div>
    );
  }
}

export default App;
