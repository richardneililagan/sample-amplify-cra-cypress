import React from 'react'
import { render } from '@testing-library/react'

import FullPageHero from 'components/HomePage/FullPageHero/FullPageHero'

jest.mock('components/common/SafeVideo/SafeVideo')

// :: ---

it('renders without errors', () => {
  render(<FullPageHero />)
})
