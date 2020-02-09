import React from 'react';
import "./Styles.css";
import Course from "./Course";
import Grade from "./Grade";

const header = (props) => {
    const { courseOnClick, gradeOnClick } = props;
    return (
        <div className="Header">
            <Course
                courseOnclick = {courseOnClick}
            />
            <Grade
                gradeOnClick = {gradeOnClick}
            />
        </div>
    )
}
export default header;
//solo tiene header y content
//la cabecera tiene a su vez dos contenios, el filtro de cursos y el filtro de notas
//haer dos componentes
//filtro de curso hay un gran div y luego hay cuatro divs pequeños que se llaman todas las classname filter
//recomendable hacer en vez de boton, un div

//EN LUGAR DE MAP HACER FILTER EN EL CONTENTS
//HAY QUE HACER CONDICIONAL PERO SE PUEDE HACER DENTRO O COMO EN LOS VIDEOS HACER ARRIBA
//UNA VARIABLE Y LUEGO LLAMARLA SIMPLEMENTE ABAJO

//CUANDO IMPRIMA LOS ALUMNOS, EN FUNCIÓN DE TAL, ME MOSTRARA UNA COSA U OTRA, EN EL ALUMNOS ES OTRO MAP

//HACER SETSTATE CURSOHANDLER A 1 O ALGO ASÍ O IR CAMBIANDOLO

//ESTA EN GITHUB, ECHARLE UN OJO