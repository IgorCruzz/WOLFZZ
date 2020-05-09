import styled, { css } from 'styled-components'
import { lighten } from 'polished'

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
  width: 400px;
  margin: 100px auto;
  background: #fff;

  overflow: hidden;
  border-bottom-right-radius: 25px;

  box-shadow: 3px 5px rgba(7, 7, 7, 0.5);

  > button {
    border: 0;
    background: none;
  }

  form {
    margin-top: 15px;
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 15px;
      border: 0;
      border-bottom: 1px solid #777;
      height: 35px;
      padding-left: 10px;

      &::placeholder {
        padding: 5px;
        font-size: 10px;
      }
    }

    div {
      margin-top: 35px;
      display: flex;
      justify-content: space-around;
      button {
        width: 150px;
        border: 0;
        background: #dc143c;
        height: 35px;
        font-weight: bold;
        color: #fff;

        &:hover {
          background: ${lighten(0.2, '#dc143c')};
        }
      }
    }
  }
`
