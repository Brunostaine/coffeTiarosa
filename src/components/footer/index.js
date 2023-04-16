import "./styles.css"
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import ImgFooter from '../../assets/images/footer.png'


export default function Footer() {
    return (
        <div className="container-footer">

            <div className="descriptions-footer">
                <img className="img-footer" src={ImgFooter} alt="Footer" />
                <div>
                    <p>Contato: 61 99999-8698</p>
                    <p>email: coffee@email.com</p>
                </div>
                <div>
                    <a item-media href="https://github.com/Brunostaine" target="_blank">
                        <FaGithub className="item-media" />
                    </a>
                    <a item-media href="https://www.instagram.com/" target="_blank">
                        <FaInstagram className="item-media" />
                    </a>
                    <a item-media href="https://www.linkedin.com/in/brunostaine" target="_blank">
                        <FaLinkedin className="item-media" />
                    </a>




                </div>


            </div>

            <p>Todos os direitos reservados a Coffe Tia Rosa</p>

        </div>
    )
}