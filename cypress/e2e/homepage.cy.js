describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/') // Akses Page 
  });

  // it('Sosmed Navbar', () => {
  //   // Validate 'Button Socmed Navbar'
  //   const socmed = [
  //     { selector: '#brxe-purnzq > li:nth-child(1) > a', url: 'https://www.instagram.com/citatah.official/' },
  //     { selector: '#brxe-purnzq > li:nth-child(2) > a', url: 'https://wa.me/+6287765833437' },
  //     // { selector: '#brxe-purnzq > li:nth-child(3) > a', url: 'https://www.youtube.com/channel/UCHYJUKwe2K6tEn2uazqsozQ' },
  //     { selector: '#brxe-purnzq > li:nth-child(4) > a', url: 'https://id.pinterest.com/citatah_official/' },
  //     { selector: '#brxe-purnzq > li:nth-child(5) > a', url: 'https://www.facebook.com/citatah.official/' }
  //   ]

  //   socmed.forEach(({ selector, url }) => {
  //     cy.get(selector)
  //       .invoke('removeAttr', 'target')
  //       .click()
  //     cy.url().should('eq', url)
  //     cy.go("back")
  //   })
  // })

  it('Hero Section', () => {
    // Validate 'Download Catalogue'
    cy.get('#brxe-uppujw > div > span')
      .click()
    cy.get('#wpcf7-f4482-o2 > form > p:nth-child(2) > span > input')
      .type('Rayhan')
    cy.get('#wpcf7-f4482-o2 > form > p:nth-child(3) > span > input')
      .type('rayhan@avonetiq.id')
    cy.get('#wpcf7-f4482-o2 > form > p:nth-child(4) > span > input')
      .type('81234567890')
    cy.get('#wpcf7-f4482-o2 > form > p:nth-child(5)').click()
    cy.wait(5000)
    cy.url().should('include', '/catalogue')
    cy.go("back")
    
    // Validate 'WhatsApp'
    cy.get('#brxe-ncscmv').click()
    cy.wait(5000)
    cy.get('a[href*="api.whatsapp.com/send"]')
      .should('have.attr', 'href')
      .and('include', 'phone=%2B6287765833437')
  })

  it('2nd Section', () => {
    // Validate 'Download Catalogue'
    cy.get('#brxe-wqtkwx')
      .scrollIntoView()
    cy.get('#brxe-gcxmml > a').click()
    cy.get('#wpcf7-f4482-o2 > form > p:nth-child(2) > span > input')
      .type('Rayhan')
    cy.get('#wpcf7-f4482-o2 > form > p:nth-child(3) > span > input')
      .type('rayhan@avonetiq.id')
    cy.get('#wpcf7-f4482-o2 > form > p:nth-child(4) > span > input')
      .type('81234567890')
    cy.get('#wpcf7-f4482-o2 > form > p:nth-child(5)').click()
    cy.wait(5000)
    cy.url().should('include', '/catalogue')
    cy.go("back")

    // Validate 'Contact Us'
    cy.get('#brxe-wqtkwx')
      .scrollIntoView()
    cy.get('#brxe-uykyda').click()
    cy.get('#wpcf7-f4486-o1 > form > p:nth-child(2) > span > input')
      .type('Rayhan')
    cy.get('#wpcf7-f4486-o1 > form > p:nth-child(3) > span > input')
      .type('rayhan@avonetiq.id')
    cy.get('#custom-cpf')
      .type('81234567890')
    cy.get('#wpcf7-f4486-o1 > form > p:nth-child(6)').click()
    cy.wait(5000)
    cy.url().should('include', '/catalogue')
    cy.go("back")
  })

  it('Product Section', function() {
    cy.get('#brxe-hbsofi a.btn-hover').click();
  });
});

it('Coba Record', function() {
  cy.visit('https://wordpress-1569850-6109906.cloudwaysapps.com/')
  
  cy.get('#brxe-hbsofi a.btn-hover').click();
  
  
});








