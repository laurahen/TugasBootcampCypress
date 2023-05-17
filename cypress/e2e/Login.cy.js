describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('https://demo.evershop.io/account/login');
  });

  it('Login with valid credential', () => {
    cy.fixture('credential.json').then((credential) => {
      const validemail = credential[0].email;
      const validpassword = credential[0].password;
    cy.xpath("//input[@placeholder='Email']").type(validemail);
    cy.xpath("//input[@placeholder='Password']").type(validpassword);
    cy.xpath("//button[@type='submit']").click();
    });
  });

  it('Login with invalid credential', () => {
    cy.fixture('credential.json').then((credential) => {
      const invalidemail = credential[1].email;
      const invalidpassword = credential[1].password;
    cy.xpath("//input[@placeholder='Email']").type(invalidemail);
    cy.xpath("//input[@placeholder='Password']").type(invalidpassword);
    cy.xpath("//button[@type='submit']").click();
    });
  });
});
