describe("app", () => {
  beforeEach(() => {
    cy.visit("");
  })

  it("should test header 1", () => {
    cy.get("h1").should("be.visible").contains("Name: cype");
  })
  it("should test header 2", () => {
    cy.get("h2").should("be.visible").contains("xccxcxFramework: react");
  })
  it("should test header 3", () => {
    cy.get("h3").should("be.visible").contains("Language: TypeScript");
  })
  it("should test header 4", () => {
    cy.get("h4").should("be.visible").contains("CSS: Tailwind");
  })
})