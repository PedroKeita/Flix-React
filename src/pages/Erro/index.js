
import {Link} from 'react-router-dom';
import './erro.css';

function Erro(){
    return(
        <div className="not-found">
            <h1> 404</h1>
            <h2>Pagina nao encontrada!</h2>
            <Link to="/">Veja todo os filmes!</Link>
        </div>
    )
}

export default Erro;