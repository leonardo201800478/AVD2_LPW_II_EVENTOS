//O Dashboard retorna na tela os dados do Cadastro de Eventos, 
//é nele que será dados os likes, dislikes e a exclusão do evento

//import da API e do Conteiner
import { Container } from "./styles"
import axiosApi from "../../services/axiosApi"
import { useEffect, useState } from "react"
//import das imagens no assets
import likeImg from "../../assets/like.png"
import dislikeImg from "../../assets/dislike.png"
import deleteImg from "../../assets/delete.png"

//Campos do banco Sqlite
interface IEvento {
  id: string;
  nomeevento: string;
  local: string;
  diasemana: string;
  horario: string;
  like: number | string;
  dislike: number | string;
}

//exportando a função para uso dos métodos GET, POST e DELETE
export function Dashboard() {
  const [events, setEvents] = useState<IEvento[]>([])
  useEffect(() => {
    axiosApi.get("/events").then((response) => setEvents(response.data))
  }, [])

  async function handleLike(id: string) {
    await axiosApi.post("/events/like/" + id)
    axiosApi.get("/events").then((response) => setEvents(response.data))
  }

  async function handleDislike(id: string) {
    await axiosApi.post("/events/dislike/" + id)
    axiosApi.get("/events").then((response) => setEvents(response.data))
  }

  async function deleteEvent(id: string) {
    await axiosApi.delete(`/events/${id}`)
    axiosApi.get("/events").then((response) => setEvents(response.data))
  }

//Retornando a Tabela com os dados do cadastro
  return (
    <Container>
      {events.map((event) => (
        <div key={event.id} className="event">
          <p> Nome do evento: {event.nomeevento} </p>
          <p> Local do evento: {event.local} </p>
          <p> Dia da semana: {event.diasemana} </p>
          <p> Hora: {event.horario} </p>
        <div className="like">
          <p> Like/s: {event.like || 0} </p>
          <p> Dislike/s: {event.dislike || 0} </p>
        </div>

        <div className="button-container">
          <button type="button">
            <img src={likeImg} alt="Like" onClick={() => { handleLike(event.id) }}
            />
          </button>
          <button type="button">
            <img src={dislikeImg} alt="Dislike" onClick={() => { handleDislike(event.id) }}
            />
          </button>
          <button type="reset">
            <img src={deleteImg} alt="Deletar" onClick={() => { deleteEvent(event.id) }}
            />
          </button>
        </div>
      </div>
    ))}
    </Container>
  )
}