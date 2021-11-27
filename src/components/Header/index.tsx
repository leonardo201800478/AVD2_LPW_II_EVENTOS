//imports
import { Container, Content } from "./styles"
import { useState } from "react"
import { Modal } from "../Modal"
//import de imagens e icones
import icoEvent from "../../assets/icone-eventos.png"
import addEvent from "../../assets/add_evento.png"


export function Header() {
  const [modalIsOpen, setIsOpen] = useState(false)

  function handleOpenModal() {
    setIsOpen(true)
  }

  function handleCloseModal() {
    setIsOpen(false)
  }
  return (
    <>
      <Container>
        <Content>
          <img src={icoEvent} alt="ICONE" 
          />
          <button type="button" className="react-modal-include" onClick={handleOpenModal}
          >
          <img src={addEvent} alt="Inserir Informações">
          </img>
          </button>
        </Content>
      </Container>
      {modalIsOpen && <Modal onClose={handleCloseModal} />}
    </>
  )
}