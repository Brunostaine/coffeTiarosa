import imagemMenu from '../../assets/images/logo.png';
import "./styles.css"

export default function MenuApp() {
    return (
        <>
            <div className='container'>
                <img src={imagemMenu} alt="Menu" style={{ width: '100px', height: '100px' }} />

                <ul className='container-menu'>
                    <li><a>Home</a></li>
                    <li><a>Cardápio</a></li>
                    <li><a>Serviços</a></li>
                    <li><a>Contato</a></li>
                </ul>

            </div>
        </>
    )
}