import "./styles.css"
import Cardapio from '../../assets/images/cardapio.png';

export default function CardapioApp() {
    return (
        <>
            <div className="container-cardapio">
                <div>
                    <p className="text-price"> R$ 35.00 <span className="text-description">Chocolate</span></p>
                    <p className="text-price"> R$ 25.00 <span className="text-description">Expresso</span></p>
                    <p className="text-price"> R$ 30.00 <span className="text-description">Caramelo</span></p>

                </div>
                <div>
                    <img src={Cardapio} alt="Menu" className="img-cardapio" />
                </div>
                <div>
                    <p className="text-price"> R$ 40.00 <span className="text-description">Cappucino</span></p>
                    <p className="text-price"> R$ 45.00 <span className="text-description">Cappucino com canela</span></p>
                    <p className="text-price"> R$ 45.00 <span className="text-description">Chocolate com canela</span></p>
                </div>
            </div>
        </>
    )
}