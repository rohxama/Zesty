describe('Home Page', () => {
  it('loads successfully', () => {
    cy.visit('/')
    cy.contains('Welcome to Zesty')
  })
})
