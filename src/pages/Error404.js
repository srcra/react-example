import { Link } from "react-router-dom";
function Error404(){
    return(
        <>
        <center>
        <h1>Página no existente</h1>
        <a className="bottom"><Link to="/">Volver</Link></a>
        </center>
        </>
    );
}

export default Error404;