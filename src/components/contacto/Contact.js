import './Contact.css';
import {Link} from "react-router-dom";


function Contact(){
    return(
        
       <div className="contacto">
           <h3 className="titulo"><i class="fas fa-id-badge"></i> Contacto </h3>
           <div className="info">
            <p > <i class="fas fa-city"></i> Ciudad: Bogotá D.C <br/>
            <i class="fas fa-envelope"></i> Email: sararodriguezzms@gmail.com  	<br/>
            <i class="fas fa-phone"></i> Número de teléfono: 5363994<br/>
            <i class="fas fa-mobile-alt"></i> Número de celular: 3112018460<br/>
            
            
           <a className="button"><Link to="/ubicacion">Ver más...</Link></a>
            </p>
           </div>
           <h3 className="titulo">Referencias</h3>
           <div className="info">
            <p><i class="fas fa-user"></i> Patricia Cardenas Santamaria<br/>
            <i class="fas fa-briefcase"></i> Cargo: Ama de casa<br/>
            <i class="fas fa-envelope"></i> Email: paca2627@gmail.com<br/>
            <i class="fas fa-phone"></i> Número de teléfono: 5363994<br/>
            <i class="fas fa-mobile-alt"></i> Número de celular: 3213533990<br/>
            </p>
            <p><i class="fas fa-user"></i> Jhonatan Moreno <br/>
            <i class="fas fa-briefcase"></i> Cargo: Desarrollador de software<br/>
            <i class="fas fa-envelope"></i> Email: JhonMor@gmail.com<br/>
            <i class="fas fa-phone"></i> Número de teléfono: 5484607<br/>
            <i class="fas fa-mobile-alt"></i> Número de celular: 313 268 1878<br/>
            </p>
           </div>
       </div>

    );
}

export default Contact;