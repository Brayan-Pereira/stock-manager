import "../styles/QuantCard.css"

export default function QuantityCard({ description, quant }) {

    return (
        <div className="card">
            <div className="description">
                <p>{description}</p>
            </div>

            <div className="quant">
                <h1>{quant}</h1>
            </div>

        </div>
    )
}