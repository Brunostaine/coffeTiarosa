import "./styles.css"
import coffeMain from '../../assets/images/coffee-main.png';

export default function Home() {
    return (
        <>
            <div className="container-home">

                <div className="container-info">
                    <h2>Tia Rosa Coffee</h2>
                    <p>O café transforma uma simples conversa em um momento inesquecível entre amigos.</p>

                </div>

                <div>
                    <img src={coffeMain} alt="Menu" className="img-home" />
                </div>
            </div>
        </>
    )
}