import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(7, 7, 7, 0.35);
  border-bottom: 1px solid #777;
  width: 100%;
  height: 48px;
`
export const Content = styled.div`
  width: 100%;
  max-width: 1500px;
  display: flex;
  justify-content: space-around;

  > div {
    display: flex;
    align-items: center;
    img {
      height: 40px;
    }
  }

  nav {
    display: flex;

    align-items: center;

    a {
      color: #fff;
      padding: 0 5px;
      font-weight: bold;
      margin: 0 10px;
      position: relative;
      padding: 14px 15px;
      text-align: center;

      &:hover {
        background: linear-gradient(
          to bottom,
          rgba(255, 0, 0, 0),
          rgba(214, 106, 106, 1)
        );
        color: #fff;
        border-bottom: 3px solid #e44a68;
      }

      div {
        display: flex;
        flex-direction: row;

        small {
          text-align: center;
        }
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
    justify-content: center;

    strong {
      color: #fff;
      border-right: 1px solid #777;
      padding-right: 10px;
    }

    a {
      margin-left: 10px;
      color: #e44a68;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      svg {
        height: 20px;
        width: 20px;
      }
    }
  }
`
export const Notification = styled.div`
  width: 17px;
  height: 17px;
  background: #e44a68;
  border-radius: 50%;
  margin-left: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;

  ${props =>
    !props.hasUnread &&
    css`
      visibility: hidden;
    `}
`
