import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 20px auto;
  max-width: 1500px;
  height: 468px;
`

export const Header = styled.header`
  margin-top: 100px;
  padding: 20px 50px;
  display: flex;
  height: 150px;
  width: 800px;
  margin: 0 auto;

  div {
    display: flex;
    align-items: center;

    strong {
      font-size: 40px;
      color: #fff;
      margin-right: 20px;
      margin-left: 5px;
    }
  }
`

export const Content = styled.div`
  ul {
    width: 800px;
    margin: 0 auto;
  }
`

export const Li = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
  border-left: ${props =>
    props.hasUnread ? '7px solid #dc143c' : '7px solid #00FF00'};
  div {
    width: 600px;
    display: flex;
    align-items: center;

    img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }

    strong {
      font-weight: bold;
      color: #777;
    }

    p {
      margin-top: 10px;
    }
  }

  button {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    border: 0;
    background: 0;
    margin: 0 15px;

    small {
      color: #777;
    }

    svg {
      color: #777;
    }
  }
`
