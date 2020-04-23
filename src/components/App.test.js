import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'

import App from 'components/App'

jest.mock('components/common/SafeVideo/SafeVideo')

// :: ---

it('renders without errors', () => {
  render(<App />)
})
