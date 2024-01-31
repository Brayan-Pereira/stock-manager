import { useState } from "react"

export default function useItemControl() {

    const storedItens = localStorage.getItem("lc-stck-mng")
    const [item, setItem] = useState(() => {

        if (!storedItens) {
            return []
        } else {

            const itemArray = JSON.parse(storedItens)
            return itemArray
        }
    })

    const date = () => {
        const dt = new Date()

        const dayWeekIndice =  dt.getDay()
        const dayWeekCaracter = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab" ]
        const dayWeek = dayWeekCaracter[dayWeekIndice]
        const monthIndice = dt.getMonth()
        const monthCaracter = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
        const day = dt.getDate()
        const year = dt.getFullYear()
        const month = monthCaracter[monthIndice]
        const data = { dayWeek, month, day, year, monthIndice }
        console.log(data)
        return data
    }



    const gerarID = () => {
        const valorAleatorio = Math.floor(Math.random() * 9999999999)
        return valorAleatorio
    }

    const addItem = ({ name, quant, price, category, description }) => {
        const id = gerarID()
        const dt = date()

        console.log(id)

        const cdItem = { id, name, quant, price, category, description, dt }

        setItem(state => {
            const newState = [...state, cdItem]
            localStorage.setItem("lc-stck-mng", JSON.stringify(newState))

            return newState
        })

        console.log(item)
    }






    const removeItem = (id) => {

        setItem(state => {
            const newState = state.filter(item => item.id !== id)
            localStorage.setItem("lc-stck-mng", JSON.stringify(newState))

            return newState
        })

    }

    const updateItem = (id, name, quant, price, category, description) => {

        console.log(`Item: ${id}, atualizado`)
        const itens = JSON.parse(storedItens)


        const upItem = itens.find(item => item.id === id)

        console.log(upItem)

        removeItem(id)


        setItem(state => {
            upItem.id = id
            upItem.name = name
            upItem.quant = quant
            upItem.price = price
            upItem.category = category
            upItem.description = description

            const newState = [...state, upItem]
            localStorage.setItem("lc-stck-mng", JSON.stringify(newState))
            return newState
        })

        console.log(`Item após atualização`)
        console.log(upItem)



    }

    return { item, addItem, removeItem, updateItem }

}