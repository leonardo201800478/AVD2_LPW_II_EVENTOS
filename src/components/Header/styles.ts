import styled from "styled-components"

export const Container = styled.header`
  background: var(--red);
  justify-content: space-around;
  align-items: center;
  min-height: 5rem;

  h2 {
    align-items: left;
  }
`;

export const Content = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 1rem 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: auto;
    height: 300px;
  }

  button {
        padding: .5rem;
        font-size: 1rem;
        font-weight: 700;
        background-color: #CD5C5C;

    }

  .react-modal-include {
    background: transparent;
    border: 2;
  }
`