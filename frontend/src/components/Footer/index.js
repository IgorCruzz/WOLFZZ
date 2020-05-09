import React from 'react'
import { Container } from './styles'

import logo from '../../assets/logo.png'

export default function Footer() {
  return (
    <Container>
      <div>
        <img src={logo} alt="logo" />
      </div>
    </Container>
  )
}
