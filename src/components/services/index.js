import "./styles.css"
import ImageCoffee from '../../assets/images/Cup1.png';


export default function Services() {
    return (
        <>
            <div className="container-service">

                <h1 className="services-title">Serviços</h1>

                <div className="card-service">
                    <div className="item">
                        <img src={ImageCoffee} alt="Menu" className="img-service" />
                        <p>Café</p>
                    </div>
                    <div className="item">
                        <img src={ImageCoffee} alt="Menu" className="img-service" />
                        <p>Internet</p>
                    </div>
                    <div className="item">
                        <img src={ImageCoffee} alt="Menu" className="img-service" />
                        <p>Sonhos</p>
                    </div>
                </div>


            </div>
        </>
    )
}