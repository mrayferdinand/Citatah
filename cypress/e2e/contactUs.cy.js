describe('Contact Us', () => {
  beforeEach(() => {
    cy.visit('/contact/') // Akses Page 
  });
    it('Showroom/Production', function() {
      cy.get('#brxe-nhgwnr a[href="https://citatah.co.id/contact/jakarta-head-office/"]').click();
      cy.wait(3000)
      cy.get('#brxe-lmfpts h1.brxe-heading').should('have.text', 'Jakarta ');
      cy.go("back")
      cy.get('#brxe-nhgwnr a[href="https://citatah.co.id/contact/bali-showroom/"]').click();
      cy.wait(3000)
      cy.get('#brxe-urziyd h1.brxe-heading').should('have.text', 'Bali ');
      cy.go("back")
      cy.get('#brxe-nhgwnr a[href="https://citatah.co.id/contact/karawang-showroom/"]').click();
      cy.wait(3000)
      cy.get('#brxe-whnmzs h1.brxe-heading').should('have.text', 'Karawang');
      cy.go("back")
      cy.get('#brx-tab-title-zrqstu-1 div.uppercase').click();
      cy.get('#brxe-nfpiyc div:nth-child(1) > a.btn-hover.self-left').click();
      cy.wait(3000)
      cy.get('#brxe-8bad21 h1.brxe-heading').should('have.text', 'Pangkep, Sulawesi');
      cy.go("back")
      cy.get('#brx-tab-title-zrqstu-1 div.uppercase').click();
      cy.get('#brxe-nfpiyc div:nth-child(2) > a.self-left.margin-top-m.outline').click();
      cy.wait(3000)
      cy.get('#brxe-whnmzs h1.brxe-heading').should('have.text', 'Karawang');
      
    });

    it('LetsConnect', function() {
         cy.get('#wpcf7-f4492-o1 [name="your-name"]').type('azhar');
         cy.get('#wpcf7-f4492-o1 [name="your-email"]').type('azharmaulana52@gmail.com');
         cy.get('#custom-cpf').type('087885682790');
         cy.get('#wpcf7-f4492-o1 [name="company"]').type('test');
         cy.get('#wpcf7-f4492-o1 [name="message"]').type('test');
         cy.get('#wpcf7-f4492-o1 [name="message"]').type('QAtest');
         cy.get('#wpcf7-f4492-o1 input.has-spinner').click();
         cy.get('#brxe-fouyki').should('have.text', 'We Have Received Your Message');
    });


});
