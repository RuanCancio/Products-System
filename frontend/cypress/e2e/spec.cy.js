describe('products page', () => {
  it('should load products list', () => {
    cy.visit('http://localhost:5173/products')

    cy.contains("Products")
    
    cy.request("http://localhost:3000/products")
      .its("status")
      .should("eq", 200)
  })
  
})