import QuantityCard from "../components/local/QuantityCard"
import Table from "../components/local/TablesHome"
import "../components/styles/Home.css"

export default function Home() {

    const storage = localStorage.getItem("lc-stck-mng")

    const diversityItens = () => {
        const itens = JSON.parse(storage)
        let count = 0
        let categories = ""

        if (itens) {
            itens.map((item) => {
                if (item.category !== categories) {
                    count++
                    categories = item.category
                }
            })
        }
        return count
    }

    const totalInventory = () => {
        const itens = JSON.parse(storage)
        let quant = 0
        if (itens) {
            itens.map(item => quant += parseInt(item.quant))
        }
        return quant
    }

    const scarce = () => {
        const itens = JSON.parse(storage)
        let quant = 0

        let arrayScarce = []
        if (itens) {
            itens.map((item) => {
                if (item.quant <= 10) {
                    quant++

                    let scarceItem = {
                        name: item.name,
                        id: item.id,
                        qtd: item.quant
                    }

                    arrayScarce.push(scarceItem)

                }
                else { quant = quant }
            })
        }
        return { quant, arrayScarce }
    }
    const scarceItems = scarce()


    const recent = () => {
        const itens = JSON.parse(storage)
        let quant = 0
        const dt = new Date()
        const currentDate = {
            day: dt.getDate(),
            month: dt.getMonth(),
            year: dt.getFullYear()
        }

        let arrayRecent = []

        if (itens) {
            itens.map((item) => {

                if ((+currentDate.year - +item.dt.year) <= 1) {
                    if (+currentDate.month - +item.dt.monthIndice <= 1 || +currentDate.month - +item.dt.monthIndice === -11) {
                        if (+currentDate.day - item.dt.day <= 5 || +currentDate.day - item.dt.day <= -25) {
                            let recentItem = {
                                name: item.name,
                                id: item.id
                            }
                            arrayRecent.push(recentItem)
                            quant++

                        }
                    }
                }
            })
        }

        return { quant, arrayRecent }
    }

    const recentItens = recent()

    return (
        <div>
            <h1>Dashbord</h1>

            <section className="cards">
                <QuantityCard description="Diversidade de itens" quant={diversityItens ? diversityItens() : 0} />
                <QuantityCard description="Inventário total" quant={totalInventory ? totalInventory() : 0} />
                <QuantityCard description="Itens recentes" quant={recentItens ? recentItens.quant : 0} />
                <QuantityCard description="Itens acabando" quant={scarceItems ? scarceItems.quant : 0} />
            </section>

            <section className="Tables">
                <Table status="Recent Itens" obj={recentItens.arrayRecent} />
                <Table status="Scarce Itens" obj={scarceItems.arrayScarce} />
            </section>
        </div>
    )
}