const SESSION_NAME = 'blog-session';

describe('Blog Detail', () => {

  beforeEach(() => {
    cy.session(SESSION_NAME, () => {
      cy.visit('/blog/');
    });

    cy.visit('/blog/');
  });

  it('Choosing Natural Stone', () => {
    cy.get('#brxe-jqrvpn div:nth-child(1) > div.brxe-lhmcuy > h3.brxe-flzmkv > a').click();
    cy.get('#brxe-wucjve')
      .should('have.text', 'A Guide to Choosing Natural Stone: for Exclusive Projects');
    
    // Get Catalogue
    cy.get('#brxe-pasmsx a.uppercase').click();
    cy.get('#wpcf7-f4482-o2 [name="your-name"]').type('azhar');
    cy.get('#wpcf7-f4482-o2 [name="your-email"]').type('azharmaulana52@gmail.com');
    cy.get('[name="phone"]').type('087885682790');
    cy.get('#wpcf7-f4482-o2 > form > p:nth-child(5)').click();
    cy.get('#brxe-xrghfb').should('have.text', 'Catalogue');
    cy.go('back');
    
    // Get Newsletter
    cy.get('#wpcf7-f4489-p433-o1 [name="your-name"]').type('azhar');
    cy.get('#wpcf7-f4489-p433-o1 [name="your-email"]').type('azharmaulana52@gmail.com');
    cy.get('#wpcf7-f4489-p433-o1 input.has-spinner').click();
    cy.get('#brxe-qywidj').should('have.text', 'Thank You for Subscribing');
    
    // Guide
    cy.get('#brxe-bpwbbt a[href="https://citatah.co.id/blog/"]').click();
    cy.get('#brxe-evzzre > div:nth-child(1) > div > a').click();
    cy.location('href').should('eq', 'https://citatah.co.id/category/guide/');
    
    // Recent Article
    cy.get('#brxe-jqrvpn > div.brxe-block.gap-5xl > div.brxe-block.gap-xl.flex-row.flex-wrap > div:nth-child(1) > a').click();
    cy.get('#brxe-jzdbgi img.size-large').click();
    cy.get('#brxe-wucjve')
      .should('have.text', 'The Secret to Luxurious Design: Mix & Match Natural Stone Styles');
  });

  it('Luxurious Design', () => {
    // Get Catalogue
    cy.get('#brxe-jqrvpn div:nth-child(2) a.uppercase').click();
    cy.get('#brxe-pasmsx a.uppercase').click();
    cy.get('#wpcf7-f4482-o2 [name="your-name"]').type('azhar');
    cy.get('#wpcf7-f4482-o2 [name="your-email"]').type('azharmaulana52@gmail.com');
    cy.get('[name="phone"]').type('087885682790');
    cy.get('#wpcf7-f4482-o2 > form > p:nth-child(5)').click();
    cy.get('#brxe-xrghfb').should('have.text', 'Catalogue');
    cy.go('back');
    
    // Newsletter
    cy.get('#wpcf7-f4489-p430-o1 [name="your-name"]').type('azhar');
    cy.get('#wpcf7-f4489-p430-o1 [name="your-email"]').type('azharmaulana52@gmail.com');
    cy.get('#wpcf7-f4489-p430-o1 > form > div.form-submit > p > input').click();
    cy.get('#brxe-qywidj').should('have.text', 'Thank You for Subscribing');
    cy.go('back')
    
    // Guide
    cy.get('#brxe-jzdbgi a.brxe-djijtm').click();
    cy.location('href').should('eq', 'https://citatah.co.id/category/guide/');
    cy.go('back')
    // Recent
    cy.get('#brxe-jzdbgi h4.brxe-rlcgix').click();
    cy.get('#brxe-wucjve')
      .should('have.text', 'A Guide to Choosing Natural Stone: for Exclusive Projects');
  });

});
