import { useState } from "react"
import "../components/styles/NewItem.css"
import useItemControl from "../hooks/useItemControl.jsx"
import { useNavigate } from "react-router-dom"


export default function NewItem() {

    const navigate = useNavigate()

    const useItem = useItemControl()

    const [name, setName] = useState("")
    const [quant, setQuant] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")


    const setVariables = () => {
        setName('')
        setQuant('')
        setPrice('')
        setCategory('')
        setDescription('')
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        useItem.addItem({ name, quant, price, category, description })

        setVariables

        alert('Item foi salvo com sucesso!')
        navigate(-1)
    }

    
    return (
        <div className="newItem">

            <form onSubmit={handleSubmit}>
                <div className="top_form">

                    <div className="question">
                        <label htmlFor="name">Nome</label>
                        <div className="input_form">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)
                                }
                                required />
                        </div>
                    </div>

                    <div className="question">
                        <label htmlFor="quant">Quantidade</label>
                        <div className="input_form">
                            <input
                                type="number"
                                value={quant}
                                onChange={(e) => setQuant(e.target.value)
                                }

                                required />
                        </div>
                    </div>

                    <div className="question">
                        <label htmlFor="preco">Preço</label>
                        <div className="input_form">
                            <input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)
                                }
                                required />
                        </div>
                    </div>

                    <div className="question">
                        <label htmlFor="categoria">Categoria</label>
                        <div className="input_form">
                            <select name="categoria" id="categoria" onClick={(e) => setCategory(e.target.value)}>
                                <option value="">Selecione um item</option>
                                <option
                                    value="Roupas"
                                >
                                    Roupas
                                </option>
                                <option
                                    value="Calçados"
                                >
                                    Calçados
                                </option>
                                <option
                                    value="Eletroeletrônicos"
                                >
                                    Eletroeletrônicos
                                </option>
                                <option
                                    value="Livros"
                                >
                                    Livros
                                </option>
                                <option
                                    value="Filmes"
                                >
                                    Filmes
                                </option>
                                <option
                                    value="Músicas"
                                >
                                    Músicas
                                </option>
                                <option
                                    value="Jogos"
                                >
                                    Jogos
                                </option>
                                <option
                                    value="Perfumaria e cosméticos"
                                >
                                    Perfumaria e cosméticos
                                </option>
                                <option
                                    value="Alimentos e bebidas"
                                >
                                    Alimentos e bebidas
                                </option>
                                <option
                                    value="Outros"
                                >
                                    Outros
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="question">
                    <label htmlFor="description">Descrição</label>
                    <div className="description">
                        <textarea
                            name="description"
                            id="description"
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                            required></textarea>
                    </div>
                </div>

                <button type="submit" className="btn_newItem_salvar">Salvar</button>

            </form>
        </div>
    )
}