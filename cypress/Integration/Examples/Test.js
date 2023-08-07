// UI Automation of goodreads website

describe("Testing the UI part of goodreads.com", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  it("Scenario 1", () => {
    cy.visit("https://www.goodreads.com/");
    cy.xpath("(//a[normalize-space()='Sign In'])[1]").click();
    cy.xpath("(//button[normalize-space()='Sign in with email'])[1]").click();
    cy.get("#ap_email").type("hrithik2712k@gmail.com");
    cy.get("#ap_password").type("hrithik@123");
    cy.get("#signInSubmit").click();
    cy.xpath(
      "(//input[@class='searchBox__input searchBox__input--navbar'])[1]"
    ).type("harry potter");
    cy.xpath(
      "(//button[@class='searchBox__icon--magnifyingGlass gr-iconButton searchBox__icon searchBox__icon--navbar'])[1]"
    ).click();
    cy.xpath(
      "(//span[@class='progressTrigger'][normalize-space()='Want to Read'])[1]"
    ).click();
    cy.xpath("(//a[contains(@href, 'mybooks')])[1]").click();
    cy.get("#cover_review_5749583867").click();
    cy.xpath(
      '(//button[@aria-label="Shelved as "Want to read". Tap to edit shelf for this book"])[1]'
    ).click();
    cy.xpath(
      "(//button[@aria-label='Tap to remove from my shelf'])[1]"
    ).click();
    cy.xpath("(//span[normalize-space()='Remove'])[1]").click();
    cy.xpath(
      "(//button[@aria-label='User settings and information'])[1]"
    ).click();
    cy.xpath("(//a[normalize-space()='Sign out'])[1]").click();
  });
});
