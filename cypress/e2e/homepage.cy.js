describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('Hero Section', () => {
    // Validate 'Download Catalogue'
    cy.get('#brxe-uppujw > div > span').click()
    
    const fields = [
      { selector: '#wpcf7-f4482-o2 > form > p:nth-child(2) > span > input', value: 'Rayhan' },
      { selector: '#wpcf7-f4482-o2 > form > p:nth-child(3) > span > input', value: 'rayhan@avonetiq.id' },
      { selector: '#wpcf7-f4482-o2 > form > p:nth-child(4) > span > input', value: '81234567890' }
    ]
    
    fields.forEach(({ selector, value }) => {
      cy.get(selector).type(value)
    })
    
    cy.get('#wpcf7-f4482-o2 > form > p:nth-child(5)')
      .click()
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

    const fields = [
      { selector: '#wpcf7-f4482-o2 > form > p:nth-child(2) > span > input', value: 'Rayhan' },
      { selector: '#wpcf7-f4482-o2 > form > p:nth-child(3) > span > input', value: 'rayhan@avonetiq.id' },
      { selector: '#wpcf7-f4482-o2 > form > p:nth-child(4) > span > input', value: '81234567890' }
    ]
    
    fields.forEach(({ selector, value }) => {
      cy.get(selector)
        .type(value)
    })
      
    cy.get('#wpcf7-f4482-o2 > form > p:nth-child(5)').click()
    cy.wait(5000)
    cy.url().should('include', '/catalogue')
    cy.go("back")

    // Validate 'Contact Us'
    cy.get('#brxe-wqtkwx')
      .scrollIntoView()
    cy.get('#brxe-uykyda').click()

    const fields1 = [
      { selector: '#wpcf7-f4486-o1 > form > p:nth-child(2) > span > input', value: 'Rayhan' },
      { selector: '#wpcf7-f4486-o1 > form > p:nth-child(3) > span > input', value: 'rayhan@avonetiq.id' },
      { selector: '#custom-cpf', value: '81234567890' }
    ]
    
    fields1.forEach(({ selector, value }) => {
      cy.get(selector)
        .type(value)
    })

    cy.get('#wpcf7-f4486-o1 > form > p:nth-child(6)').click()
    cy.wait(5000)
    cy.url().should('include', '/catalogue')
    cy.go("back")
  })

  it('Product Section', function() {
    cy.get('#brxe-hbsofi > a').click();
    cy.url().should('contain', '/product')
  });

  it('Stone Section', function() {
    cy.visit('https://citatah.co.id/')
    cy.get('#brx-content > section:nth-child(6)').scrollIntoView()
    const stones = [
      { selector: '#brx-content > section:nth-child(6) > div > div.brxe-block.col-span-2.columns-2.gap-2xl > div:nth-child(1) > a', url: '/natural-stone' },
      { selector: '#brx-content > section:nth-child(6) > div > div.brxe-block.col-span-2.columns-2.gap-2xl > div:nth-child(2) > a', url: '/engineered-stone' },
      { selector: '#brx-content > section:nth-child(6) > div > div.brxe-block.col-span-2.columns-2.gap-2xl > div:nth-child(3) > a', url: '/mosaic' }
    ]

    stones.forEach(({ selector, url }) => {
      cy.get(selector)
        .click()
      cy.url().should('contain', url)
      cy.go("back")
    })

    cy.url().should('eq', 'https://citatah.co.id/')
  });

  it('Carousel', function() {
    cy.get('#brxe-oucxjg').scrollIntoView()
    const carousels = [
      { selector: '#brxe-komecd > ul > li:nth-child(1) > button' },
      { selector: '#brxe-komecd > ul > li:nth-child(2) > button' },
      { selector: '#brxe-komecd > ul > li:nth-child(3) > button' },
      { selector: '#brxe-komecd > ul > li:nth-child(4) > button' },
      { selector: '#brxe-komecd > ul > li:nth-child(5) > button' },
      { selector: '#brxe-komecd > ul > li:nth-child(6) > button' },
      { selector: '#brxe-komecd > ul > li:nth-child(7) > button' }
    ]

    carousels.forEach(({ selector }) => {
      cy.get(selector)
        .click()
    })
  });

  it('Finishing', function() {
    cy.get('#brx-content > section:nth-child(9) > div > div:nth-child(2)').scrollIntoView()
    const carousels = [
      { selector: '#brxe-anihpr > ul > li:nth-child(1) > button' },
      { selector: '#brxe-anihpr > ul > li:nth-child(2) > button' },
      { selector: '#brxe-anihpr > ul > li:nth-child(3) > button' }
    ]

    carousels.forEach(({ selector }) => {
      cy.get(selector)
        .click()
    })

    cy.get('#brx-content > section:nth-child(9) > div > div:nth-child(2) > div.brxe-block.gap-2xl > a')
      .click()
    cy.url().should('eq','https://citatah.co.id/finishing/')
  });

  it('Edge Profiled', function() {
    cy.get('#brx-content > section:nth-child(9) > div > div:nth-child(3)').scrollIntoView()
    const carousels = [
      { selector: '#brxe-imbhid > ul > li:nth-child(1) > button' },
      { selector: '#brxe-imbhid > ul > li:nth-child(2) > button' },
      { selector: '#brxe-imbhid > ul > li:nth-child(3) > button' }
    ]

    carousels.forEach(({ selector }) => {
      cy.get(selector)
        .click()
    })

    cy.get('#brxe-gxmbqs > a')
      .click()
    cy.url().should('eq','https://citatah.co.id/edges/')
  });

  it('Domestic', function() {
    const seeMore = [
      { section: '#brxe-awvwco', button: '#brxe-awvwco > div.brxe-container > a' },
      { section: '#brxe-rtptbc', button: '#brxe-rtptbc > div.brxe-container > a' },
      { section: '#brxe-wrifcj', button: '#brxe-wrifcj > div.brxe-container > a' }
    ]

    seeMore.forEach(({ section, button }) => {
      cy.get(section)
        .scrollIntoView()
      cy.get(button)
        .click()
      cy.wait(5000)
      cy.url().should('eq', 'https://citatah.co.id/project/')
      cy.go("back")
    })

    cy.url().should('eq', 'https://citatah.co.id/')
  });

  it('Testimoni', function() {
    cy.get('#brxe-f22644').scrollIntoView()
    const seeMore = [
      { section: '#brxe-65aa23', button: '#brxe-7ecc19 > ul > li:nth-child(1) > button' },
      { section: '#brxe-81cba3', button: '#brxe-7ecc19 > ul > li:nth-child(2) > button' }
    ]

    seeMore.forEach(({ section, button }) => {
      cy.get(button)
        .click()
      cy.get(section)
        .should('be.visible')
    })

    cy.url().should('eq', 'https://citatah.co.id/')
  });

  it('Last Section', function() {
    cy.get('#brxe-bqwovl').scrollIntoView()
    cy.get('#brxe-qcsdwt > div.brxe-block.button-wrap-h > span').click()
    
    const fields = [
      { selector: '#wpcf7-f4482-o2 > form > p:nth-child(2) > span > input', value: 'Rayhan' },
      { selector: '#wpcf7-f4482-o2 > form > p:nth-child(3) > span > input', value: 'rayhan@avonetiq.id' },
      { selector: '#wpcf7-f4482-o2 > form > p:nth-child(4) > span > input', value: '81234567890' }
    ]
    
    fields.forEach(({ selector, value }) => {
      cy.get(selector).type(value)
    })

    cy.get('#wpcf7-f4482-o2 > form > p:nth-child(5)').click()
    cy.wait(5000)
    cy.url().should('include', '/catalogue')
    cy.go('back')

    cy.get('#brxe-pursqe').click()
    cy.wait(5000)
    cy.get('a[href*="api.whatsapp.com/send"]')
      .should('have.attr', 'href')
      .and('include', 'phone=%2B6287765833437')
  });
});