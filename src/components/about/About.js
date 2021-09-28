import './About.css';

function About(){
    return(
        <div className="about">
            <div className="about-me">
                <h3 className="title">Quién soy</h3>
                <p>
                    Soy una estudiante de análisis y desarrollo de sistemas de 
                    información. Me considero una persona responsable, dinámica y creativa, con facilidad de adaptación y capacidad de trabajar en equipo, en condiciones de alta presión, con iniciativa para resolver problemas eficientemente y lograr las metas y objetivos trazados por la empresa.
                </p>
            </div>
            <div className="experiencia">
            <h3 className="title">Experiencia laboral</h3>
                <p>
                Fecha: En proceso<br/>
                Empresa: FINCOMERCIO LTDA <br/>
                Cargo/Actividad desarrollada:Gestión técnica 
-Soporte de requerimientos de la empresa
  <br/>	
                <br/>
                Fecha: 2020<br/>
                Empresa: shopdress<br/>
                Cargo/Actividad desarrollada: Vendedora. 

                </p>
            </div>
        </div>
    );
}

export default About;