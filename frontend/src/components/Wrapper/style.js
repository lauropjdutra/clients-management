import styled from "styled-components"

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ClientsContainer = styled.div`
  width: 40vw;
  height: 100%;
  min-height: 70vh;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 20px #00000099;

  @media (max-width: 720px) {
    width: 90%;
    min-height: fit-content;
  }

  & .title {
    width: 100%;
    padding: 1rem;
    background: #0055aa;
    color: #ffffff;
    text-align: center;
    font-size: 1.3rem;
    text-transform: uppercase;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  & form {
    padding: 3rem 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    & .input-card {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;

      & span {
        color: #e90011;
      }

      & .small-card {
        display: flex;
        gap: 1rem;
        align-items: flex-end;

        & input {
          width: 9rem;
        }
      }
    }
  }

  &:nth-child(2) {
    height: 100%;
    min-height: 70vh;
    justify-content: space-between;

    & .clients-list {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & .client-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 1rem;
        width: 80%;
        border-top: 1px solid #454545;

        @media (max-width: 720px) {
          width: 95%;
          border-top: none;
        }

        &:nth-child(1) {
          border-top: none;
        }

        & svg:nth-child(2) {
          cursor: pointer;

          &:hover {
            opacity: 0.8;
          }

          &:active {
            opacity: 0.6;
          }
        }

        & .client-info {
          display: flex;
          align-items: center;
          gap: 1rem;

          & .client-item {
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
            font-size: 0.9rem;
          }
        }
      }
    }

    & .empty-list {
      height: calc(70vh - 57px);
    }

    & input {
      width: 80%;
      margin-top: 2rem;
      padding-right: 2.5rem;
      background: url("https://icones.pro/wp-content/uploads/2021/06/icone-loupe-gris.png");
      background-size: 1.5rem;
      background-repeat: no-repeat;
      background-position: calc(100% - 20px) center;

      @media (max-width: 720px) {
        background-position: calc(100% - 10px) center;
      }
    }

    & button {
      padding: 0.9rem 6rem;
      margin: 1rem 0 4.3rem;
    }
  }
`
export const Label = styled.label`
  font-size: 0.9rem;
  color: #151515;
`

export const Input = styled.input`
  max-width: 20rem;
  padding: 0.8rem;
  font-size: 1rem;
  background: none;
  border: 1px solid #999999;
  border-radius: 0.5rem;
  outline-color: #0077cc;
`

export const Button = styled.button`
  margin-top: 1rem;
  padding: 0.9rem 1.6rem;
  font-weight: bold;
  font-size: 1.1rem;
  background: #0055aa;
  color: #fefefe;
  border: 2px solid #0055aa00;
  border-radius: 0.5rem;
  transition: all ease-in-out 0.3s;
  cursor: pointer;

  &:hover {
    border: 2px solid #0055aa;
    color: #0055aa;
    background: none;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000055;
  display: flex;
  align-items: center;
  justify-content: center;

  & .route-container {
    height: 70vh;
  }

  & .route-list {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;

    & .client-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      
      & span {
        display: flex;
        align-items: center;
        height: 100%;
        padding-right: 1rem;
        border-right: 2px solid #003388;
        font-weight: 600;
        color: #001155;
      }
    }
  }

  & button {
    padding: 0.9rem 5rem;
    margin-bottom: 3rem;
  }
`