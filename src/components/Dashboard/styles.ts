import styled from "styled-components"

export const Container = styled.div`
  width: 30%;
  box-sizing: border-box;
  grid-gap: 28px;
  padding-top: 2rem;
  display: grid;
  margin: auto;
  align-items: center;

  .event {
    width: 110%;
    border: 2px solid;
    border-radius: 5px;
    padding: 15px;

    .like {
      margin-top: 20px;
    }
    button + button {
      margin-left: 30px;
    }

    .button-container {
      margin-top: 20px;
    }
    button {
      padding: 2px;
      img {
        width: 40px;
      }
    }
  }
`