import "./styles.css"
import Cafe from '../../assets/images/cafe.png';
import Maquina from '../../assets/images/maquina.png';
import Sonho from '../../assets/images/sonho.png';

import { FaCoffee } from "react-icons/fa";


export default function Services() {
    return (
        <>
            <div className="container-service">

                <h1 className="services-title">Serviços</h1>

                <div className="card-service">
                    <div className="item">
                        <img src={Cafe} alt="Menu" className="img-service" />
                        <p>Café</p>
                    </div>
                    <div className="item">
                        <img src={Maquina} alt="Menu" className="img-service" />
                        <p>Internet</p>
                    </div>
                    <div className="item">
                        <img src={Sonho} alt="Menu" className="img-service" />
                        <p>Sonhos</p>
                    </div>
                </div>


            </div>
        </>
    )
}