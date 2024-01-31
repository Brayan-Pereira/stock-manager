import { useLoaderData} from "react-router-dom"
import useItemControl from "../hooks/useItemControl"
import { useState } from "react"



export default function UpdateItem() {

    const item = useLoaderData()
    const useItem = useItemControl()
    

    const id = item.id

    const [name, setName] = useState(item.name)
    const [quant, setQuant] = useState(item.quant)
    const [price, setPrice] = useState(item.price)
    const [category, setCategory] = useState(item.category)
    const [description, setDescription] = useState(item.description)

    const handleSubmit = (ev) => {
        ev.preventDefault()
        alert(`Item com o ID: ${id}, atualizado com sucesso`)
        useItem.updateItem(id, name, quant, price, category, description)
    }

    return (
        <section>
            <h2>Atualizar Item - {item.name}</h2>
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
                                    />
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

                                    />
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
                                    />
                            </div>
                        </div>

                        <div className="question">
                            <label htmlFor="categoria">Categoria</label>
                            <div className="input_form">
                                <select name="categoria" id="categoria" onClick={(e) => setCategory(e.target.value)}>
                                    <option value={category}>{category}</option>
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
                                cols="140"
                                rows="10"
                                value={description}
                                onChange={(e) => { setDescription(e.target.value) }}
                                ></textarea>
                        </div>
                    </div>

                    <button type="submit" className="btn_newItem_salvar">Salvar</button>

                </form>
            </div>
        </section>

    )

}
