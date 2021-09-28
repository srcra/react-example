import './Header.css';
import foto from './foto1.jpg';


function Header(){
    return(
        <header>
        <div className="header">
            <div className="foto">
                <img className="header-foto" src={foto} alt="" />
            </div>
            <div className="header-me">
                <h2 className="header-name">Sara Gabriela Rodriguez Cardenas </h2>
                <h3> <span>Desarrolladora web</span></h3>
                
            </div>
            
        </div>
              
        </header>

    );
}

export default Header;