import { render } from '@testing-library/react'
/**
 *  A custom render function for testing that ignores the
 *  `unstable_flushDiscreteUpdates` errors that is plaguing <video [muted] />
 *
 *  @param {React.ReactElement} component
 *  @see https://github.com/testing-library/react-testing-library/issues/470
 */
export function renderIgnoringUnstableFlushDiscreteUpdates(component) {
  const originalError = console.error
  const error = jest.fn()
  console.error = error

  const result = render(component)
  expect(error).toHaveBeenCalledTimes(1)
  expect(error).toHaveBeenCalledWith(
    'Warning: unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.%s',
    expect.any(String)
  )

  // :: revert
  console.error = originalError
  return result
}
