import styled from 'styled-components'
import { darken } from 'polished'

import bgauth from '../../../assets/bgauth.jpg'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${bgauth}) no-repeat;
  background-size: cover;
`

export const Content = styled.div`
  width: 100%;
  max-width: 350px;

  text-align: center;
  padding: 20px;
  border-radius: 15px;

  form {
    display: flex;
    flex-direction: column;
    text-align: left;
    font-weight: bold;

    div {
      display: flex;
      align-items: center;

      svg {
        margin-right: 5px;
        color: #fff;
      }

      input {
        width: 100%;
        border: 0;
        border-bottom: 3px solid #777;
        padding: 8px;
        margin: 10px 0;
      }
    }

    button {
      margin-top: 10px;
      background: #e44a68;
      border: 0;
      border-radius: 4px;
      color: #fff;
      padding: 10px;

      &:hover {
        background: ${darken(0.1, '#e44a68')};
      }
    }
  }

  img {
    height: 150px;
    margin-bottom: 25px;
  }
`
