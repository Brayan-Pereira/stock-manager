
export default function loadItem({ params }) {

    const storedItens = localStorage.getItem("lc-stck-mng")
    const itens = JSON.parse(storedItens)

    
    const item = itens.find(item => item.id === +params.itemId)

    console.log(item)
    if (!item) {
        throw new Response("404 Not found", { status: 404 })
    }
    return item
}