describe('About Us', () => {
  beforeEach(() => {
    cy.visit('/about-us/') // Akses Page 
  });

  it('Hero Section', () => {
   // Validate 'Download Catalogue'
   cy.get('#brxe-lffrze > div > span')
     .click()
   cy.get('#wpcf7-f4482-o1 > form > p:nth-child(2) > span > input')
     .type('Rayhan')
   cy.get('#wpcf7-f4482-o1 > form > p:nth-child(3) > span > input')
     .type('rayhan@avonetiq.id')
   cy.get('#wpcf7-f4482-o1 > form > p:nth-child(4) > span > input')
     .type('81234567890')
   cy.get('#wpcf7-f4482-o1 > form > p:nth-child(5)').click()
   cy.wait(5000)
   cy.url().should('include', '/catalogue')
   cy.go("back")
   
   // Validate All Contanct
   cy.get('#brxe-ztbbry > a > i').click()
   cy.wait(5000)
   cy.url().should('include', '/contact/')

   
 });

  it('Dropdown', function() {
    cy.get('#accordion-zdtere-0 i.fa-minus').click();
    cy.get('#accordion-zdtere-0 i.fa-plus').click();
    cy.get('#accordion-zdtere-1 i.fa-plus').click();
    cy.get('#accordion-zdtere-2 i.fa-plus').click();
    cy.get('#accordion-zdtere-2 i.fa-minus').click();
  });
  
  
  it('Board of', function() {
    //Validate Board of Director

cy.get('#brxe-gvyokn div.brxe-text-basic').click();
cy.get('#brxe-lukvzr').should("have.text", "Taufik Johannes")
cy.get('#brxe-sgdcgk div.brxe-text-basic').click();
cy.get('#brxe-whhwfg').should("have.text", "Denise Johanes")
cy.get('#brxe-huklbp div.brxe-text-basic').click();
cy.get('#brxe-okhvie').should("have.text", "Tiffany Johanes")
cy.get('#brxe-udvjsa div.brxe-text-basic').click();
cy.get('#brxe-ikgizz').should("have.text", "Rumpoko Adi")
cy.get('#brxe-jijxit div.brxe-text-basic').click();
cy.get('#brxe-ipgiov').should("have.text", "Gregory Nanan Aswin")
cy.get('#brxe-bniquv div.brxe-text-basic').click();
cy.get('#brxe-itsyje').should("have.text", "Eugene Cho Park")

  });
  
  
  it('Read More', function() {
    //Validate Read More
    cy.get('#brxe-cvfqfm').click();
    cy.get('#brxe-mbwyxc > div:nth-child(3) > div').should('be.visible')
    
     
  });

});