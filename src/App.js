import React, { Component } from 'react';
import cloneDeep from "clone-deep";
import './App.css';
import Subject from './Components/Subject';
class App extends Component {
  state = {
    subjects: [
      {
        view: true,
        subject: 'Programacion1',
        teacher: 'Alberto',
        students: [
          {name: 'Mateo', mark: "5", view:true},
          {name: 'Adrian', mark: "7", view:true},
          {name: 'Bonmati', mark: "10", view:true}
        ]   
      },
      {
        view: true,
        subject: 'Programacion2',
        teacher: 'Jorge',
        students: [
          {name: 'Jaime', mark: "5",view: true},
          {name: 'Toci', mark: "7",view: true},
          {name: 'Saaa', mark: "10",view:true}
        ]   
      }
    ]
  };
  subjectClickHandler = (subjectName) =>{
    //busca el nombre de la asignatura y cambia el view
    const subjects = cloneDeep(this.state.subjects); // TO clone objects in javascript
    const find = subjects.find(subj => subj.subject === subjectName);

    if(find){
      find.view = !find.view;
    }
    this.setState({subjects});
  }
  studentClickHandler = (studentName,subjectName) =>{
    const subjects = cloneDeep(this.state.subjects);
    const subject = subjects.find(subj => subj.subject === subjectName);

    if(subject){
      const student = subject.students.find(stu => stu.name === studentName);
      if(student){
        student.view = !student.view;
      }
    }
    this.setState({subjects});
  }
  render() {
    return (
      <div className="App">
        <Subject
          subject = {this.state.subjects[0]}
          subjectOnClick = {this.subjectClickHandler}
          studendOnClick = {this.studentClickHandler}
        />
        <Subject
          subject = {this.state.subjects[1]}
          subjectOnClick = {this.subjectClickHandler}
          studendOnClick = {this.studentClickHandler}
        />
    </div>
    );
  }
}

export default App;
