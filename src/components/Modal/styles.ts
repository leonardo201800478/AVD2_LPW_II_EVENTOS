import styled from "styled-components"
export const Content = styled.div``
export const Container = styled.div`

  form {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }

  //Cabeçalho
  h2 {
    color: var(--text-title);
    font-size: 2rem;
    margin-bottom: 1rem;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  //Descrição dos campos
  label {
    color: var(--text-title);
    font-size: 1.3rem;
    margin-bottom: 1rem;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  //Local de inserção de dados
  input {
    width: 100%;
    padding: 1rem 1rem;
    margin: 0.25rem;
    border-radius: 0.25rem;
    border: 1px solid --green;
    background: #F0F8FF;
    font-weight: 400;
    font-size: 1.2rem;
   
  }

  //Botao enviar
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    margin-top: 1rem;
    background: var(--red);
    border-radius: 0.25rem;
    color: #00FF00;
    font-size: 2rem;
    font-weight: 600;
    }
`