import "./styles.css"
import ReserveCafe from '../../assets/images/reserve.png'
import { useState } from "react"


export default function ReservaApp() {

    const [name, setName] = useState('')
    const [telefone, setTelefone] = useState('')
    const [date, setDate] = useState('')

    function handleReservar() {
        if (name == '' || telefone == '' || date == '') {
            alert('Todos os campos de estar preenchidos ')
        } else {
            setName('')
            setTelefone('')
            setDate('')
            alert('Reserva realizada com sucesso!')
        }
    }

    return (
        <div className="container-reserve">
            <h1 className="title-reserva">Reserve sua mesa</h1>
            <div className="tabela">
                <img src={ReserveCafe} className="img-reserva" />

                <form className="form">
                    <div className="input-item">
                        <label className="label">nome</label>
                        <input className="inputText" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome" />
                    </div>
                    <div className="input-item">
                        <label className="label">Telefone</label>
                        <input className="inputText" value={telefone} onChange={(e) => setTelefone(e.target.value)} type="text" placeholder="Digite seu telefone"/>
                    </div>
                    <div className="input-item">
                        <label className="label">Data e Horário</label>
                        <input className="inputText" value={date} onChange={(e) => setDate(e.target.value)} type="datetime-local" />
                    </div>
                    <div className="input-item">

                        <button className="inputText" type="button" value="Reservar" onClick={handleReservar}>Reservar</button>
                    </div>

                </form>

            </div>
        </div>
    )
}
