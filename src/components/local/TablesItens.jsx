
import useItemControl from "../../hooks/useItemControl"
import "../styles/TablesItens.css"

import { Link } from "react-router-dom"

export default function TableItens() {


    function Remove(id) {
        useItem.removeItem(id)
        alert(`Item com o ID: ${id}, excluido com sucesso`)
    }

    const useItem = useItemControl()


    const storedItens = localStorage.getItem("lc-stck-mng")
    const itens = JSON.parse(storedItens)

    if (itens.length === 0) {
        return (<h2>Não itens no estoque</h2>)
    } else {
        return (
            <div>
                <br />
                <table>
                    <tr>
                        <th className="id">ID</th>
                        <th className="nome">Nome</th>
                        <th className="estoque">Em estoque</th>
                        <th className="categoria">Categoria</th>
                        <th className="acoes">Ações</th>
                    </tr>
                    {

                        itens.map((item) =>
                        (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.quant} unid.</td>
                                <td>{item.category}</td>
                                <td>
                                    <Link to={`/itens/${item.id}`}>
                                        <button className="btn_acoes_ver" >Ver</button>
                                    </Link>

                                    <Link to={`/itens/update/${item.id}`}>
                                        <button className="btn_acoes_atualizar">Atualizar</button>
                                    </Link>
                                    <button className="btn_acoes_excluir" onClick={() => Remove(item.id)}>Excluir</button></td>
                            </tr>
                        )

                        )}
                </table>
            </div >


        )
    }

}









