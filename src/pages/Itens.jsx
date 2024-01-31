
import { Link, Outlet } from "react-router-dom"

export default function Itens() {

    const item = 0
    return (
        

            <div>
                <h1>Itens</h1>

                <nav className="nav_itens">
                    <Link to='/itens'>Todos os itens</Link>
                    <Link to='/itens/novoItem' >Novo item</Link>
                </nav>

                <hr />

                <Outlet />



            </div>
        

    )


}