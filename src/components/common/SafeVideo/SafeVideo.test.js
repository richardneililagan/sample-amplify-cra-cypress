import React from 'react'
import { render } from '@testing-library/react'
import { renderIgnoringUnstableFlushDiscreteUpdates } from 'helpers/tests/smoker'

import SafeVideo from './SafeVideo'

// :: ---

it('renders without errors', () => {
  renderIgnoringUnstableFlushDiscreteUpdates(<SafeVideo />)
})
