import '../card/card.css'

export default function Card(props) {
    return(
        <section className={props.className}>
            <h1>{props.tittle}</h1>
        </section>
    )
}