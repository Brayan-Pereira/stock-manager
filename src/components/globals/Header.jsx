import "./style/Header.css"
import {Link} from "react-router-dom"
export default function Header(){

    return(
        <div className="header">
            <h2>Gerenciador de estoque</h2>

            <nav>
                <Link to='/'>Início</Link>
                <Link to='/itens'>Itens</Link>
            </nav>
        </div>
    )
}