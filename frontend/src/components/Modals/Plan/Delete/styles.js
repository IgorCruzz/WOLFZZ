import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(7, 7, 7, 0.35);
  position: absolute;
  z-index: 2;
  display: ${props => (props.active ? 'block' : 'none')};

  ${props =>
    props.close &&
    css`
      display: none;
    `}
`
export const Content = styled.div`
  padding: 30px;
  width: 350px;

  background: #fff;
  margin: 200px auto;

  border-bottom-right-radius: 25px;

  box-shadow: 3px 5px rgba(7, 7, 7, 0.5);

  display: flex;
  align-items: center;
  flex-direction: column;

  strong {
    font-size: 25px;
    margin-bottom: 15px;
  }

  button {
    border: 0;
    background: none;
    margin: 0 15px;
  }

  button#button_delete {
    border: 0;
    background: #dc143c;
    color: #fff;
    padding: 10px;

    &:hover {
      background: ${darken(0.04, '#dc143c')};
    }
  }
`
