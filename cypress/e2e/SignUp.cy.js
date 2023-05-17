describe('Successful Signup', () => {
  beforeEach(() => {
    cy.visit('https://demo.evershop.io/');
  });

  it('go to signup page', () => {
    cy.xpath("//a[@href='/account/login']").click();
    cy.get("[href='/account/register']").click();
  });

  it('fill in Signup form with valid data', () => {
    cy.xpath("//a[@href='/account/login']").click();
    cy.get("[href='/account/register']").click();

    const username = 'Nasi Padang';
    const email = 'testing1@gmail.com';
    const password = 'Password@123';

    // cy.contains('Signup').click();
    cy.get("[name='full_name']").type(username);
    cy.get("[name='email']").type(email);
    cy.get("[name='password']").type(password);
    cy.xpath("//button[@class='button primary']").click();
  });

  it('Signup with existing email', () => {
    const existingEmail = 'testing1@gmail.com';

    // Go to the Signup page
    cy.visit('https://demo.evershop.io/account/register');

    // Fill in the Signup form with an existing email
    cy.get("[name='full_name']").type('Nasi Padang Sederhana');
    cy.get("[name='email']").type(existingEmail);
    cy.get("[name='password']").type('Password@123')
    cy.xpath("//button[@class='button primary']").click();

    // Verify error message for existing email is displayed
    cy.on('window:alert', (alertText) => {
      // cy.log(`Alert content: ${alertText}`);
    });      
    cy.get("[name='email']").clear();
    cy.generateRandomEmail().then((uniqueEmail) => {
      // Use the generated email address in your test
      cy.get("[name='email']").type(uniqueEmail);
    });
    cy.xpath("//button[@class='button primary']").click();
    cy.wait(5000);
    cy.xpath("//a[@href='/account']//*[name()='svg']").click();
  });
});
