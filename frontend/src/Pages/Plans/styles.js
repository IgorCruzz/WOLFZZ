import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 20px auto;
  height: 468px;
  display: flex;
  padding: 15px;
`

export const Header = styled.header`
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #777;
  margin-right: 25px;
  padding: 20px 50px;
  width: 400px;
  height: 150px;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;

  > strong {
    font-size: 40px;
    color: #fff;
    align-self: center;
  }

  div {
    button {
      margin-top: 25px;
      width: 100%;
      background: #dc143c;
      border: 0;
      padding: 5px;
      color: #fff;
      font-weight: bold;

      > svg {
        margin-right: 5px;
        color: #fff;
      }
    }

    > svg {
      color: #777;
      font-size: 20px;
      position: absolute;
      margin-top: 5px;
      margin-left: 140px;
    }

    input {
      width: 200px;
      margin-left: 5px;
      padding: 5px;
      border-radius: 4px;
      border: 1px solid #dbdbda;

      &::placeholder {
        padding-left: 10px;
      }
    }
  }
`

export const Content = styled.div`
  display: ${props => (props.search ? 'none' : 'relative')};
  width: 1000px;
  margin: 0 auto;
  overflow: scroll;

  ::-webkit-scrollbar {
    width: 10px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(207, 0, 0, 0.83);
    border-radius: 10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    thead th {
      width: 80px;
      color: #fff;
      text-align: left;
      padding: 12px;
    }
    tbody {
      tr {
        color: #fff;
        border-bottom: 1px solid #4f4f4f;
        background: rgba(100, 100, 100, 0.5);

        &:nth-child(even) {
          background: rgba(0, 0, 0, 0.08);
        }
        td {
          padding: 12px;

          img {
            height: 35px;
            border-radius: 50%;
          }

          button {
            background: 0;
            border: 0;
          }
        }
      }
    }
  }
`
