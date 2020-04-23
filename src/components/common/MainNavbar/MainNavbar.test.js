import React from 'react'
import { render } from '@testing-library/react'

import MainNavbar from 'components/common/MainNavbar/MainNavbar'

// :: ---

it('renders without errors', () => {
  render(<MainNavbar />)
})
