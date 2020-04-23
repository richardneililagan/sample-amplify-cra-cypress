import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarMenu,
  NavbarItem,
  NavbarStart,
  NavbarEnd,
} from 'bloomer'

// :: ---

function MainNavbar() {
  return (
    <Navbar>
      <NavbarBrand>
        <NavbarItem>Qitaqits</NavbarItem>
      </NavbarBrand>
      <NavbarMenu>
        <NavbarStart>
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>Documentation</NavbarItem>
        </NavbarStart>
        <NavbarEnd>
          <NavbarItem>Github</NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Navbar>
  )
}

export default MainNavbar
