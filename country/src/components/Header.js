import React from 'react'
import { StyledHeader } from './styles/Header.styled'
import Button from './Button'
function Header() {
  return (
    <StyledHeader>
        <h2>Where in the world</h2>
      <Button>Dark mode</Button>
    </StyledHeader>
  )
}

export default Header