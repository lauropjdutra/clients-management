import styled from "styled-components"

export const Container = styled.header `
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`

export const Logo = styled.img `
  width: 10rem;
  cursor: pointer;
  transition: all ease-in-out .2s;

  &:hover {
    opacity: .8;
  }

  &:active {
    scale: .95;
  }
`