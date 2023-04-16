
import { useState } from "react"
import "./styles.css"

export default function NewsLetter() {
    const [email, setEmail] = useState('')

    function handleSubmit() {

        if (email == '') {
            alert('digite um email')
        } else {
            setEmail('')
            alert(`${email} foi cadastrado com sucesso`)
        }



    }
    return (
        <div className="container-newsletter">
            <p className="newsletter-p">Inscreva-se na nossa newsletter, para ganhar descontos e promoções.</p>

            <input className="newsletter-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email"/>

            <button className="newsletter-submit" type="button" onClick={handleSubmit}>Cadastrar</button>
        </div>
    )
}