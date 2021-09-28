import './Formacion.css';

function Formacion(){
    return(
        <div className="Formacion">
            <div className="formacion">
            <h3 className="title">Formación académica</h3>
                <p>
                Fecha de terminación: 2020 <br/>
                Institución formadora: Fe y Alegría José María Velaz I.E.D  <br/>
                Titulación: Bachillerato Académico<br/><br/>

                <h3 className="title">Formación Profesional</h3> 

                Fecha de terminación: 2020<br/>
                Institución formadora: SENA<br/>
                Titulación: Técnico en programación de software <br/><br/>
               
                Fecha de terminación: En proceso<br/>
                Institución formadora: SENA<br/>
                Titulación: Tecnólogo en Análisis y Desarrollo de Sistemas de Información – ADSI <br/><br/>

                </p>
            </div>
        </div>
    );
}

export default Formacion;