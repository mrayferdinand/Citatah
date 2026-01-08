describe('Blog', () => {
  beforeEach(() => {
    cy.visit('/blog/') // Akses Page 
  });
  //discover 
  it('Discover', function() {
    cy.get('#wpcf7-f4489-o1 [name="your-name"]').type('azhar');
    cy.get('#wpcf7-f4489-o1 [name="your-email"]').type('azhar@gmail.com');
    cy.get('#wpcf7-f4489-o1 input.has-spinner').click();
    cy.get('#brxe-qywidj').should('have.text', 'Thank You for Subscribing');
  });
  //article
  it('Article', function() {
    cy.get('#brxe-jqrvpn div:nth-child(1) > div.brxe-lhmcuy > h3.brxe-flzmkv > a').click();
    cy.wait(3000)
    cy.get('#brxe-wucjve').should('have.text', 'A Guide to Choosing Natural Stone: for Exclusive Projects');
    cy.go("back")
    cy.get('#brxe-jqrvpn div:nth-child(2) div.brxe-lhmcuy h3.brxe-flzmkv a').click();
    cy.wait(3000)
    cy.get('#brxe-wucjve').should('have.text', 'The Secret to Luxurious Design: Mix & Match Natural Stone Styles');
    cy.go("back")
    cy.get('#brxe-evzzre a.brxe-text-link').click();
    cy.get('#brxe-evzzre a[href="https://citatah.co.id/guide-to-choosing-natural-stone/"] h4.brxe-jkkxod').click();
    cy.wait(3000)
    cy.get('#brxe-wucjve').should('have.text', 'A Guide to Choosing Natural Stone: for Exclusive Projects');
    cy.go("back")
    cy.get('#brxe-evzzre a[href="https://citatah.co.id/mix-match-natural-stone-styles/"] h4.brxe-jkkxod').click();
    cy.wait(3000)
    cy.get('#brxe-wucjve').should('have.text', 'The Secret to Luxurious Design: Mix & Match Natural Stone Styles');
  });

  
});