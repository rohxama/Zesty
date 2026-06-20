import '@testing-library/cypress'

Cypress.on('uncaught:exception', (err) => {
  // Prevent Cypress from failing on uncaught exceptions
  if (err.message.includes('ResizeObserver loop')) {
    return false
  }
})
