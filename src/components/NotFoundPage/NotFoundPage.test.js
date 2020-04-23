import React from 'react'
import { render } from '@testing-library/react'

import NotFoundPage from 'components/NotFoundPage/NotFoundPage'

// :: ---

it('renders without errors', () => {
  render(<NotFoundPage />)
})
