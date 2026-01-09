describe('Contact Us', () => {
  beforeEach(() => {
    cy.visit('/contact/') // Akses Page 
  });
    // it('Showroom/Production', function() {
    //   cy.get('#brxe-nhgwnr a[href="https://citatah.co.id/contact/jakarta-head-office/"]').click();
    //   cy.wait(3000)
    //   cy.get('#brxe-lmfpts h1.brxe-heading').should('have.text', 'Jakarta ');
    //   cy.go("back")
    //   cy.get('#brxe-nhgwnr a[href="https://citatah.co.id/contact/bali-showroom/"]').click();
    //   cy.wait(3000)
    //   cy.get('#brxe-urziyd h1.brxe-heading').should('have.text', 'Bali ');
    //   cy.go("back")
    //   cy.get('#brxe-nhgwnr a[href="https://citatah.co.id/contact/karawang-showroom/"]').click();
    //   cy.wait(3000)
    //   cy.get('#brxe-whnmzs h1.brxe-heading').should('have.text', 'Karawang');
    //   cy.go("back")
    //   cy.get('#brx-tab-title-zrqstu-1 div.uppercase').click();
    //   cy.get('#brxe-nfpiyc div:nth-child(1) > a.btn-hover.self-left').click();
    //   cy.wait(3000)
    //   cy.get('#brxe-8bad21 h1.brxe-heading').should('have.text', 'Pangkep, Sulawesi');
    //   cy.go("back")
    //   cy.get('#brx-tab-title-zrqstu-1 div.uppercase').click();
    //   cy.get('#brxe-nfpiyc div:nth-child(2) > a.self-left.margin-top-m.outline').click();
    //   cy.wait(3000)
    //   cy.get('#brxe-whnmzs h1.brxe-heading').should('have.text', 'Karawang');
      
    // });

    
    it('Office Details', function() {
      cy.get('#brxe-nhgwnr a[href="https://citatah.co.id/contact/jakarta-head-office/"]').click();
      cy.wait(3000)
      cy.get('#brxe-lmfpts h1.brxe-heading').should('have.text', 'Jakarta ');
      cy.get('#brxe-gelljr button.is-active').click();
      cy.get('#brxe-qrlkko').should('have.class', 'is-visible');
      cy.get('#brxe-gelljr button[aria-controls="brxe-zrxywq"]').click();
      cy.get('#brxe-zrxywq').should('have.class', 'is-visible');
      cy.get('#brxe-gelljr button[aria-controls="brxe-cyntfu"]').click();
      cy.get('#brxe-cyntfu').should('have.class', 'is-visible');
      cy.get('#brx-content span.link-line-dark').click();
      cy.get('#brx-content div.open p').should('be.visible');
      cy.go("back")
      
      cy.get('#brxe-nhgwnr a[href="https://citatah.co.id/contact/bali-showroom/"]').click();
      cy.wait(3000)
      cy.get('#brxe-urziyd h1.brxe-heading').should('have.text', 'Bali ');
      cy.get('#brxe-odhbpq button.is-active').click();
      cy.get('#brxe-dauiqn').should('have.class', 'is-visible');
      cy.get('#brxe-odhbpq button[aria-controls="brxe-obuubw"]').click();
      cy.get('#brxe-obuubw').should('have.class', 'is-visible');
      cy.get('#brxe-odhbpq button[aria-controls="brxe-dikjog"]').click();
      cy.get('#brxe-dikjog').should('have.class', 'is-visible');
      cy.get('#brx-content span.link-line-dark').click();
      cy.get('#brx-content div.open p').should('be.visible');
      cy.go("back")
      
      cy.get('#brxe-nhgwnr a[href="https://citatah.co.id/contact/karawang-showroom/"]').click();
      cy.wait(3000)
      cy.get('#brxe-whnmzs h1.brxe-heading').should('have.text', 'Karawang');
      cy.get('#brxe-utppqf button[aria-controls="brxe-txibhu"]').click();
      cy.get('#brxe-txibhu').should('have.class', 'is-visible');
      cy.get('#brxe-utppqf button[aria-controls="brxe-vazyvj"]').click();
      cy.get('#brxe-txibhu').should('have.class', 'is-visible');
      cy.get('#brxe-utppqf button[aria-controls="brxe-mxwjty"]').click();
      cy.get('#brxe-txibhu').should('have.class', 'is-visible');
      cy.get('#brx-content span.link-line-dark').click();
      cy.get('#brx-content div.open p').should('be.visible');
      cy.go("back")
      
      
    });

    it('Workshop Details', function() {
      
      cy.get('#brx-tab-title-zrqstu-1 div.uppercase').click();
      cy.get('#brxe-nfpiyc div:nth-child(1) > a.btn-hover.self-left').click();
      cy.wait(3000)
      cy.get('#brxe-8bad21 h1.brxe-heading').should('have.text', 'Pangkep, Sulawesi');
      cy.get('#brxe-93ad31 button.is-active').click();
      cy.get('#brxe-2d0823').should('have.class', 'is-visible');
      cy.get('#brxe-93ad31 button[aria-controls="brxe-f91ab1"]').click();
      cy.get('#brxe-f91ab1').should('have.class', 'is-visible');
      cy.get('#brxe-93ad31 button[aria-controls="brxe-57265f"]').click();
      cy.get('#brxe-57265f').should('have.class', 'is-visible');
      cy.get('#brx-content span.link-line-dark').click();
      cy.get('#brx-content div.open p').should('be.visible');
      cy.go("back")
      
      cy.get('#brx-tab-title-zrqstu-1 div.uppercase').click();
      cy.get('#brxe-nfpiyc div:nth-child(2) > a.self-left.margin-top-m.outline').click();
      cy.wait(3000)
      cy.get('#brxe-whnmzs h1.brxe-heading').should('have.text', 'Karawang');
      cy.get('#brxe-utppqf button.is-active').click();
      cy.get('#brxe-txibhu').should('have.class', 'is-visible');
      cy.get('#brxe-utppqf button[aria-controls="brxe-vazyvj"]').click();
      cy.get('#brxe-vazyvj').should('have.class', 'is-visible');
      cy.get('#brxe-utppqf button[aria-controls="brxe-mxwjty"]').click();
      cy.get('#brxe-mxwjty').should('have.class', 'is-visible');
      cy.get('#brx-content span.link-line-dark').click();
      cy.get('#brx-content div.open p').should('be.visible');
      
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
