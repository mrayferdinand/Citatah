describe('Footer', () => {
  beforeEach(() => {
    cy.visit('/') // Akses Page 
  });

  it('Footer - Social Media (exclude YouTube)', () => {
  cy.on('uncaught:exception', () => false);
  cy.get('#brx-footer').scrollIntoView()
  
  const socialMediaNonYT = [
    { selector: '#brxe-ewmame > li:nth-child(1) > a', url: 'instagram.com/citatah.official' },
    { selector: '#brxe-ewmame > li:nth-child(2) > a', url: 'wa.me' },
    { selector: '#brxe-ewmame > li:nth-child(4) > a', url: 'pinterest.com' },
    { selector: '#brxe-ewmame > li:nth-child(5) > a', url: 'facebook.com' }
  ]

  socialMediaNonYT.forEach(({ selector, url }) => {
    cy.get(selector)
      .invoke('removeAttr', 'target')
      .click()
    cy.url().should('include', url)
    cy.go('back')
    })
  })

  it('Footer - YouTube Link', () => {
    cy.get('#brx-footer').scrollIntoView()
    
    // Hanya validasi href untuk YouTube
    cy.get('#brxe-ewmame > li:nth-child(3) > a')
      .should('have.attr', 'href')
      .and('include', 'youtube.com/channel/UCHYJUK')
  })

  it('Lokasi', () => {
  cy.get('#brx-footer').scrollIntoView()
  
  const locations = [
    { selector: '#brxe-ckrpkl', url: 'https://www.google.com/maps/place/Jl.+Prof.+DR.+Satrio+Blok+C4+No.10,+RT.14%2FRW.4,+Kuningan,+Karet+Kuningan,+Kecamatan+Setiabudi,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12950/@-6.2244976,106.8291822,18.56z/data=!4m6!3m5!1s0x2e69f3f07fecfc45:0xf1589181826b7a8d!8m2!3d-6.2248432!4d106.8296958!16s%2Fg%2F11pvcvqy70?entry=tts&g_ep=EgoyMDI1MDkxNC4wIPu8ASoASAFQAw%3D%3D&skid=10182133-ead3-4d39-ab01-8430c758a127' },
    { selector: '#brxe-wraciu', url: 'https://www.google.com/maps/place/PT+CITATAH+TBK/@-8.6285255,115.1932851,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd240b5714c3d0d:0xf7fb8710d2ceff99!8m2!3d-8.6285308!4d115.19586!16s%2Fg%2F11df66hnh5?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D' },
    { selector: '#brxe-blglri', url: 'https://www.google.com/maps/place/PT+Citatah+Tbk/data=!4m2!3m1!1s0x0:0xb8a23203465fc042?sa=X&ved=1t:2428&ictx=111' }
  ]

  locations.forEach(({ selector, url }) => {
    cy.get(selector)
      .invoke('removeAttr', 'target')
      .click()
    cy.url().should('include', url)
    cy.go('back')
    })
  })

  it('Collections', () => {
  cy.get('#brx-footer').scrollIntoView()
  
  const locations = [
    { selector: '#brxe-aaygrp > li:nth-child(1) > a:nth-child(1)', url: 'https://citatah.co.id/product-category/natural-stone/ujung-pandang-marble/' },
    { selector: '#brxe-aaygrp > li:nth-child(1) > a:nth-child(2)', url: 'https://citatah.co.id/product-category/natural-stone/worldwide-collection-imported-stones/marble/' },
    { selector: '#brxe-aaygrp > li:nth-child(2) > a:nth-child(1)', url: 'https://citatah.co.id/product-category/natural-stone/worldwide-collection-imported-stones/granite/' },
    { selector: '#brxe-aaygrp > li:nth-child(2) > a:nth-child(2)', url: 'https://citatah.co.id/product-category/natural-stone/worldwide-collection-imported-stones/onyx/' },
    { selector: '#brxe-aaygrp > li:nth-child(2) > a:nth-child(3)', url: 'https://citatah.co.id/product-category/natural-stone/worldwide-collection-imported-stones/limestone/' },
    { selector: '#brxe-aaygrp > li:nth-child(2) > a:nth-child(4)', url: 'https://citatah.co.id/product-category/natural-stone/worldwide-collection-imported-stones/travertine/' },
    { selector: '#brxe-aaygrp > li:nth-child(2) > a:nth-child(5)', url: 'https://citatah.co.id/product-category/natural-stone/worldwide-collection-imported-stones/sandstone/' },
    { selector: '#brxe-aaygrp > li:nth-child(3) > a:nth-child(1)', url: 'https://citatah.co.id/product-category/natural-stone/worldwide-collection-imported-stones/quartzite/' },
    { selector: '#brxe-aaygrp > li:nth-child(3) > a:nth-child(2)', url: 'https://citatah.co.id/product-category/engineered-stone/caesarstone-quartz-surface/' },
    { selector: '#brxe-aaygrp > li:nth-child(3) > a:nth-child(3)', url: 'https://citatah.co.id/product-category/engineered-stone/nextone-technological-marble/' },
    { selector: '#brxe-aaygrp > li:nth-child(4) > a:nth-child(1)', url: 'https://citatah.co.id/product-category/engineered-stone/coverlam-technical-stone/' },
    { selector: '#brxe-aaygrp > li:nth-child(4) > a:nth-child(2)', url: 'https://citatah.co.id/product-category/engineered-stone/neoscape-ecological-paving-stone/' },
    { selector: '#brxe-aaygrp > li:nth-child(4) > a:nth-child(3)', url: 'https://citatah.co.id/catalogue/' }
  ]

  locations.forEach(({ selector, url }) => {
    cy.get(selector)
      .invoke('removeAttr', 'target')
      .click()
    cy.wait(1000)
    cy.url().should('include', url)
    cy.go('back')
    })
  })

  it('Menu', () => {
  cy.get('#brx-footer').scrollIntoView()
  
  const locations = [
    { selector: '#brxe-aevdvv > ul > li:nth-child(1) > a', url: 'https://citatah.co.id/' },
    { selector: '#brxe-aevdvv > ul > li:nth-child(2) > a', url: 'https://citatah.co.id/client/' },
    { selector: '#brxe-aevdvv > ul > li:nth-child(3) > a', url: 'https://citatah.co.id/project/' },
    { selector: '#brxe-aevdvv > ul > li:nth-child(4) > a', url: 'https://citatah.co.id/about-us/' },
    { selector: '#brxe-aevdvv > ul > li:nth-child(5) > a', url: 'https://citatah.co.id/corporate/' },
    { selector: '#brxe-aevdvv > ul > li:nth-child(6) > a', url: 'https://citatah.co.id/blog/' }
  ]

  locations.forEach(({ selector, url }) => {
    cy.get(selector)
      .invoke('removeAttr', 'target')
      .click()
    cy.wait(1000)
    cy.url().should('include', url)
    cy.go('back')
    })
  })

  it('Support', () => {
  cy.get('#brx-footer').scrollIntoView()
  
  const locations = [
    { selector: '#brxe-iphodd > ul > li:nth-child(1) > a', url: 'https://citatah.co.id/care-maintenance/' },
    { selector: '#brxe-iphodd > ul > li:nth-child(2) > a', url: 'https://citatah.co.id/contact/' },
    { selector: '#brxe-iphodd > ul > li:nth-child(3) > a', url: 'https://citatah.co.id/faq/' },
    { selector: '#brxe-iphodd > ul > li:nth-child(4) > a', url: 'https://citatah.co.id/career/' }
  ]

  locations.forEach(({ selector, url }) => {
    cy.get(selector)
      .invoke('removeAttr', 'target')
      .click()
    cy.wait(1000)
    cy.url().should('include', url)
    cy.go('back')
    })
  })

  it('Product', () => {
  cy.get('#brx-footer').scrollIntoView()
  
  const locations = [
    { selector: '#brxe-xhushy > ul > li:nth-child(1) > a', url: 'https://citatah.co.id/product-category/natural-stone/' },
    { selector: '#brxe-xhushy > ul > li:nth-child(2) > a', url: 'https://citatah.co.id/product-category/engineered-stone/' },
    { selector: '#brxe-xhushy > ul > li:nth-child(3) > a', url: 'https://citatah.co.id/product-category/mosaic/' }
  ]

  locations.forEach(({ selector, url }) => {
    cy.get(selector)
      .invoke('removeAttr', 'target')
      .click()
    cy.wait(1000)
    cy.url().should('include', url)
    cy.go('back')
    })
  })
});