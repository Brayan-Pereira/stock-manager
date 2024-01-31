import { Link } from "react-router-dom"
import "../styles/TablesHome.css"

export default function TableHome({ status, obj }) {

    if (status === "Recent Itens") {
        return (
            <table>
                <tr>
                    <th className="itens">Itens Recentes</th>
                    <th className="qtd"></th>
                    <th className="acoes">Ações</th>
                </tr>
                {obj.map((item) => (
                    <tr>
                        <td>{item.name}</td>
                        <td></td>
                        <td><Link to={`/itens/${item.id}`}>
                            <button className="btn_acoes_ver" >Ver</button>
                        </Link></td>

                    </tr>))}

            </table>
        )
    }
    if (status === "Scarce Itens") {
        return (
            <table>
                <tr>
                    <th className="itens">Itens acabando</th>
                    <th className="qtd">Qtd.</th>
                    <th className="acoes">Ações</th>
                </tr>


                {obj.map((item) => (
                    <tr>
                        <td>{item.name}</td>
                        <td></td>
                        <td><Link to={`/itens/${item.id}`}>
                            <button className="btn_acoes_ver" >Ver</button>
                        </Link></td>

                    </tr>))}

            </table>
        )
    }

}