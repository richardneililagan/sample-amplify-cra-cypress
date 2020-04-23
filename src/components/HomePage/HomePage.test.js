import React from 'react'
import { render } from '@testing-library/react'

import HomePage from 'components/HomePage/HomePage'

jest.mock('components/common/SafeVideo/SafeVideo')

// :: ---

it('renders without errors', () => {
  render(<HomePage />)
})
