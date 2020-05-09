import styled from 'styled-components'

import searchIcon from '../../assets/searchicon.png'

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
  height: 240px;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;

  div {
    width: 250px;

    h1 {
      margin-bottom: 35px;
      color: #fff;
      font-size: 35px;
    }

    strong {
      color: #fff;
      font-weight: bold;
      display: block;
    }
    input {
      background-image: url(${searchIcon});
      background-position: 10px 5px;
      background-repeat: no-repeat;
      background-size: 25px;
      padding: 10px 10px 10px 45px;
      border: 0;
      border-radius: 5px;
      width: 50px;
      -webkit-transition: width 1s ease-in-out;
      transition: width 0.4s ease-in-out;

      &::placeholder {
        padding-left: 8px;
      }

      &:focus {
        width: 100%;
      }
    }
  }

  button {
    margin-top: 20px;
    background: #dc143c;
    border: 0;
    padding: 5px;
    color: #fff;
    font-weight: bold;
    width: 100%;

    display: flex;
    justify-content: center;

    > svg {
      margin-right: 5px;
      color: #fff;
    }
  }
`
export const SearchStudent = styled.div`
  position: absolute;
  width: 310px;
  height: 150px;
  background: white;
  border: 1px solid black;
`

export const Content = styled.div`
  display: ${props => (props.search ? 'none' : 'relative')};
  width: 1000px;
  height: 400px;
  margin: 0 auto;
  overflow: auto;
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

    thead {
      th {
        width: 80px;
        color: #fff;
        text-align: left;
        padding: 12px;
      }
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
            height: 40px;
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
