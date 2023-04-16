import imagemMenu from '../../assets/images/logo.png';
import "./styles.css"

export default function MenuApp() {
    return (
        <>
            <div className='container'>
                <img src={imagemMenu} alt="Menu" style={{ width: '100px', height: '100px' }} />

                <ul className='container-menu'>
                    <li><a className='menu-item'>Home</a></li>
                    <li><a className='menu-item'>Cardápio</a></li>
                    <li><a className='menu-item'>Serviços</a></li>
                    <li><a className='menu-item'>Contato</a></li>
                </ul>

            </div>
        </>
    )
}