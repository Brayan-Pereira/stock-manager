import { Link, useLoaderData } from "react-router-dom"
import "../components/styles/Item.css"
import useItemControl from "../hooks/useItemControl"
import { useNavigate } from "react-router-dom"

export default function Item() {

    const item = useLoaderData()
    const useItem = useItemControl()
    const id = item.id
    const date = item.dt
    const navigate = useNavigate()

    const remove = () => {
        alert(`Item com o ID: ${id}, excluido com sucesso`)
        useItem.removeItem(id)
        navigate(-1)

    }

    return (
        <section className="section_item">
            <div className="name_and_acoes">
                <h2>{item.name}</h2>
                <Link to={`/itens/update/${item.id}`}>
                    <button className="btn_acoes_atualizar">Atualizar</button>
                </Link>
                <button className="btn_acoes_excluir" onClick={remove}>Excluir</button>

            </div>

            <div className="characteristics">
                <button>Categoria: {item.category}</button>
                <button>Quantidade: {item.quant}</button>
                <button>Preço: {item.price}</button>
            </div>


            <h3>{item.description}</h3>

            <h3>Cadastrado em: {date.dayWeek} {date.month} {date.day} {date.year}</h3>

        </section >

    )
}