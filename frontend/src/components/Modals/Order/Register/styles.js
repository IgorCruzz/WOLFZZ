import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(7, 7, 7, 0.5);
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

  p {
    margin-top: 15px;
    padding: 10px;
    font-weight: bold;
    color: #fff;
    border-radius: 10px;
    margin-bottom: 15px;
    background: #dc143c;
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;

    textarea {
      border: 0;
      padding: 10px;
      background: #eee;
      height: 100px;
      width: 100%;
      margin-bottom: 15px;
    }

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;

      button {
        border: 0;
        background: #dc143c;
        height: 40px;
        width: 150px;
        font-weight: bold;
        color: #fff;

        &:hover {
          background: ${lighten(0.2, '#dc143c')};
        }
      }
    }
  }
`
