import closeImg from "../../assets/close.svg"
import { Container, Content } from "./styles"
import axiosApi from "../../services/axiosApi"
import React, { useState } from "react"

interface IModal {
  onClose: () => void
}

export function Modal({ onClose }: IModal) {
  const [evento, setEvento] = useState("")
  const [local, setLocal] = useState("")
  const [data, setData] = useState("")
  const [hora, setHora] = useState("")

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    const dados = {
      nomeevento: evento,
      local,
      diasemana: data,
      horario: hora,
    }

    await axiosApi.post("/events", dados)
    onClose()
  }

  return (
    <Container className="react-modal-overlay">
      <Content className="react-modal-content">
        <form action="" onSubmit={handleSubmit}>
          <div className="form-control">
            <h2>Cadastro de Eventos</h2>
            <label htmlFor="">Nome do Evento</label>
            <input type="text" placeholder="Digite o nome do evento" value={evento} onChange={(e) => setEvento(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="">Local do Evento</label>
            <input type="text" placeholder="Digite o local do evento" value={local} onChange={(e) => setLocal(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="semana">Escolha um dia da semana</label>
            <input type="date" id= "semana" name= "semana"
              //travando para somente disponibilizar a semana atual
              min="2021-11-29" max="2021-12-06" required
              placeholder="Digite o dia do evento ou selecione no calendário"
              value={data} onChange={(e) => setData(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="">Horário</label>
            <input type="time" placeholder="Horário do Evento" value={hora} onChange={(e) => setHora(e.target.value)}
            />
          </div>

          <button type="submit">Enviar</button>
          <button type="button" className="react-modal-close" onClick={onClose}>
            <img src={closeImg} alt="Close"/>
          </button>
        </form>
      </Content>
    </Container>
  )
}