describe('Product Selection and Purchase', () => {
    beforeEach(() => {
      cy.visit('https://demo.evershop.io');
    });
  
    it('Select a product from list and checkout', () => {
      cy.get('.mt-3.mb-3.text-center.uppercase.h5.tracking-widest').scrollIntoView();
      cy.get('#body > div:nth-child(1) > div:nth-child(1) > main:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').click();
      cy.xpath("//a[normalize-space()='M']").click();
      cy.xpath("//a[normalize-space()='Blue']").click();
      cy.wait(5000);
      cy.xpath("//button[@type='button']").click();
      cy.xpath("//a[normalize-space()='Continue Shopping']").click();
      cy.xpath("//a[@class='mini-cart-icon']//*[name()='svg']").click();
      cy.xpath("//a[@class='button primary']").click();
      cy.xpath("//input[@placeholder='Email']").type("testing@gmail.com");
      cy.xpath("//button[@type='button']").click();
      cy.xpath("//input[@placeholder='Full name']").type("Nasi Padang");
      cy.xpath("//input[@placeholder='Telephone']").type("0892092022");
      cy.xpath("//input[@placeholder='Address']").type("Kampung nan jauh");
      cy.xpath("//select[@id='address[country]']").should('be.visible').select(2);
      cy.xpath("//select[@id='address[province]']").should('be.visible').select(2);
      cy.xpath("//input[@name='address[postcode]']").type("989898");
      cy.xpath("//span[normalize-space()='Express Delivery - $15.00']").click();
      cy.wait(2000);
      cy.xpath("//button[@class='button primary']").click();
      cy.wait(5000);
      cy.xpath("(//*[name()='svg'])[10]").click();
      cy.xpath("//button[@class='button primary']").click();
      cy.wait(5000);
    });
    
    it('adding multiple items, update, and remove', () => {
        cy.xpath("//a[normalize-space()='Women']").click();
        cy.xpath("//body/div[@id='app']/div[@class='wrapper']/main[@class='content']/div[@class='page-width grid grid-cols-1 md:grid-cols-4 gap-2']/div[@class='md:col-span-3']/div/div[@class='grid grid-cols-2 md:grid-cols-3 gap-2']/div[1]").click();
        cy.xpath("//a[normalize-space()='M']").click();
        cy.xpath("//a[normalize-space()='Black']").click();
        cy.wait(5000);
        cy.xpath("//button[@type='button']").click();
        cy.xpath("//a[normalize-space()='XL']").click();
        cy.xpath("//input[@placeholder='Qty']").clear();
        cy.xpath("//input[@placeholder='Qty']").type("2");
        cy.wait(5000);
        cy.xpath("//button[@type='button']").click();
        cy.xpath("//a[normalize-space()='Continue Shopping']").click();
        cy.xpath("//a[@class='mini-cart-icon']//*[name()='svg']").click();
        cy.xpath("//tbody/tr[1]/td[1]/div[1]/div[2]/div[2]/a[1]/span[1]").click();
      });

  });
  