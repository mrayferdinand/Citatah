describe('Sub Product', () => {
    
    it('Natural Stone', () => {
    cy.visit('/product-category/natural-stone/')
    cy.get('#brxe-xkekfz > div > div > div > div > span').click()
    const form1 = [
        { selector: '#wpcf7-f4482-o1 > form > p:nth-child(2) > span > input', value: 'Rayhan' },
        { selector: '#wpcf7-f4482-o1 > form > p:nth-child(3) > span > input', value: 'rayhan@avonetiq.id' },
        { selector: '#wpcf7-f4482-o1 > form > p:nth-child(4) > span > input', value: '81234567890' }
    ]

    form1.forEach(({ selector, value }) => {
        cy.get(selector).type(value)
    })
    cy.get('#wpcf7-f4482-o1 > form > p:nth-child(5)').click()
    cy.wait(1000)
    cy.url().should('include', '/catalogue')
    cy.go('back')

    cy.get('#brxe-avaqdh').click()
    cy.wait(1000)
    cy.url().should('include', '/contact')
    cy.go('back')
    
    const ujungPandang = [
        { button: '#splide01 > ul > li:nth-child(1) > button', text: '#brxe-iyieyi > div.brxe-div.slider-product-content > h4', value: 'Azul Classico' },
        { button: '#splide01 > ul > li:nth-child(2) > button', text: '#brxe-vmvnmg > div.brxe-div.slider-product-content > h4', value: 'Galilee' },
        { button: '#splide01 > ul > li:nth-child(3) > button', text: '#brxe-fafwzk > div.brxe-div.slider-product-content > h4', value: 'Rikho Beige' }
    ]

    ujungPandang.forEach(({ button, text, value}) => {
        cy.get(button).click()
        cy.get(text).invoke('text').should('include', value)
    }) 

    cy.get('#brxe-lizjec > a').click()
    cy.url().should('include', '/ujung-pandang-marble/')
    cy.go('back')
    
    const worldwide = [
        { button: '#splide02 > ul > li:nth-child(1) > button', text: '#brxe-zjuplf > div.brxe-div.slider-product-content > h4', value: 'Arabescato' },
        { button: '#splide02 > ul > li:nth-child(2) > button', text: '#brxe-coygbz > div.brxe-div.slider-product-content > h4', value: 'Jay White' },
        { button: '#splide02 > ul > li:nth-child(3) > button', text: '#brxe-gejmbo > div.brxe-div.slider-product-content > h4', value: 'Golden Fusion' }
    ]

    worldwide.forEach(({ button, text, value}) => {
        cy.get(button).click()
        cy.get(text).invoke('text').should('include', value)
    }) 

    cy.get('#brxe-xohodn > a').click()
    cy.url().should('include', '/worldwide-collection-imported-stones/')
    cy.go('back')
    
    cy.get('#brxe-sdxjvg > div.brxe-block.button-wrap-h > span').click()
    const form2 = [
        { selector: '#wpcf7-f4482-o1 > form > p:nth-child(2) > span > input', value: 'Rayhan' },
        { selector: '#wpcf7-f4482-o1 > form > p:nth-child(3) > span > input', value: 'rayhan@avonetiq.id' },
        { selector: '#wpcf7-f4482-o1 > form > p:nth-child(4) > span > input', value: '81234567890' }
    ]

    form2.forEach(({ selector, value }) => {
        cy.get(selector).type(value)
    })
    cy.get('#wpcf7-f4482-o1 > form > p:nth-child(5)').click()
    cy.wait(1000)
    cy.url().should('include', '/catalogue')
    cy.go('back')

    cy.get('#brxe-lyuxmp').click()
    cy.wait(1000)
    cy.get('a[href*="api.whatsapp.com/send"]')
      .should('have.attr', 'href')
      .and('include', 'phone=%2B6287765833437')
    }) 

    it('Engineered Stone', () => {
    cy.visit('/product-category/engineered-stone/')
    cy.get('#brxe-6a43ee > div > div > div > div > span').click()
    const form3 = [
        { selector: '#wpcf7-f4482-o1 > form > p:nth-child(2) > span > input', value: 'Rayhan' },
        { selector: '#wpcf7-f4482-o1 > form > p:nth-child(3) > span > input', value: 'rayhan@avonetiq.id' },
        { selector: '#wpcf7-f4482-o1 > form > p:nth-child(4) > span > input', value: '81234567890' }
    ]

    form3.forEach(({ selector, value }) => {
        cy.get(selector).type(value)
    })
    cy.get('#wpcf7-f4482-o1 > form > p:nth-child(5)').click()
    cy.wait(1000)
    cy.url().should('include', '/catalogue')
    cy.go('back')

    cy.get('#brxe-avaqdh').click()
    cy.wait(1000)
    cy.url().should('include', '/contact')
    cy.go('back')
    
    const Caesarstone  = [
        { button: '#splide01 > ul > li:nth-child(1) > button', text: '#brxe-7446a8 > div.brxe-div.slider-product-content > h4', value: 'Statuario Maximus' },
        { button: '#splide01 > ul > li:nth-child(2) > button', text: '#brxe-ttzoxf > div.brxe-div.slider-product-content > h4', value: 'Vanilla Noir' },
        { button: '#splide01 > ul > li:nth-child(3) > button', text: '#brxe-ohucll > div.brxe-div.slider-product-content > h4', value: 'Rugged Concrete' }
    ]

    Caesarstone.forEach(({ button, text, value}) => {
        cy.get(button).click()
        cy.get(text).invoke('text').should('include', value)
    }) 

    cy.get('#brxe-595972 > a').click()
    cy.url().should('include', '/caesarstone-quartz-surface/')
    cy.go('back')
    
    const nexstone = [
        { button: '#splide02 > ul > li:nth-child(1) > button', text: '#brxe-caeeeb > div.brxe-div.slider-product-content > h4', value: 'Nero Marquina' },
        { button: '#splide02 > ul > li:nth-child(2) > button', text: '#brxe-qhfxcw > div.brxe-div.slider-product-content > h4', value: 'Volakas' },
        { button: '#splide02 > ul > li:nth-child(3) > button', text: '#brxe-agkbkg > div.brxe-div.slider-product-content > h4', value: 'Royal Fantasy' }
    ]

    nexstone.forEach(({ button, text, value}) => {
        cy.get(button).click()
        cy.get(text).invoke('text').should('include', value)
    }) 

    cy.get('#brxe-443f70 > a').click()
    cy.url().should('include', '/nextone-technological-marble/')
    cy.go('back')

    const coverlam = [
        { button: '#splide03 > ul > li:nth-child(1) > button', text: '#brxe-gyrcqv > div.brxe-div.slider-product-content > h4', value: 'Annapurna' },
        { button: '#splide03 > ul > li:nth-child(2) > button', text: '#brxe-rydqyx > div.brxe-div.slider-product-content > h4', value: 'Encina' },
        { button: '#splide03 > ul > li:nth-child(3) > button', text: '#brxe-qkkeor > div.brxe-div.slider-product-content > h4', value: 'Calacata' }
    ]

    coverlam.forEach(({ button, text, value}) => {
        cy.get(button).click()
        cy.get(text).invoke('text').should('include', value)
    }) 

    cy.get('#brxe-pyomug > a').click()
    cy.url().should('include', '/coverlam-technical-stone/')
    cy.go('back')
    
    const neoscape = [
        { button: '#splide04 > ul > li:nth-child(1) > button', text: '#brxe-gpvsnj > div.brxe-div.slider-product-content > h4', value: 'Antique Grey' },
        { button: '#splide04 > ul > li:nth-child(2) > button', text: '#brxe-cvyeti > div.brxe-div.slider-product-content > h4', value: 'Antique Grey' },
        { button: '#splide04 > ul > li:nth-child(3) > button', text: '#brxe-hpkowf > div.brxe-div.slider-product-content > h4', value: 'Antique Grey' }
    ]

    neoscape.forEach(({ button, text, value}) => {
        cy.get(button).click()
        cy.get(text).invoke('text').should('include', value)
    }) 

    cy.get('#brxe-pdozlf > a').click()
    cy.url().should('include', '/neoscape-ecological-paving-stone/')
    cy.go('back')
    
    cy.get('#brxe-sdxjvg > div.brxe-block.button-wrap-h > span').click()
    const form = [
        { selector: '#wpcf7-f4482-o1 > form > p:nth-child(2) > span > input', value: 'Rayhan' },
        { selector: '#wpcf7-f4482-o1 > form > p:nth-child(3) > span > input', value: 'rayhan@avonetiq.id' },
        { selector: '#wpcf7-f4482-o1 > form > p:nth-child(4) > span > input', value: '81234567890' }
    ]

    form.forEach(({ selector, value }) => {
        cy.get(selector).type(value)
    })
    cy.get('#wpcf7-f4482-o1 > form > p:nth-child(5)').click()
    cy.wait(1000)
    cy.url().should('include', '/catalogue')
    cy.go('back')

    cy.get('#brxe-lyuxmp').click()
    cy.wait(1000)
    cy.get('a[href*="api.whatsapp.com/send"]')
      .should('have.attr', 'href')
      .and('include', 'phone=%2B6287765833437')
    })

    it('Engineered Stone', () => {
    cy.visit('/product-category/mosaic/')
    cy.get('#brxe-686b32 > div > div > div > div > span').click()
    const form3 = [
        { selector: '#wpcf7-f4482-o1 > form > p:nth-child(2) > span > input', value: 'Rayhan' },
        { selector: '#wpcf7-f4482-o1 > form > p:nth-child(3) > span > input', value: 'rayhan@avonetiq.id' },
        { selector: '#wpcf7-f4482-o1 > form > p:nth-child(4) > span > input', value: '81234567890' }
    ]

    form3.forEach(({ selector, value }) => {
        cy.get(selector).type(value)
    })
    cy.get('#wpcf7-f4482-o1 > form > p:nth-child(5)').click()
    cy.wait(1000)
    cy.url().should('include', '/catalogue')
    cy.go('back')

    cy.get('#brxe-avaqdh').click()
    cy.wait(1000)
    cy.url().should('include', '/contact')
    cy.go('back')
    
    const bisazza  = [
        { button: '#splide01 > ul > li:nth-child(1) > button', text: '#brxe-7ae860 > div.brxe-div.slider-product-content > h4', value: 'Bianco' },
        { button: '#splide01 > ul > li:nth-child(2) > button', text: '#brxe-b35741 > div.brxe-div.slider-product-content > h4', value: 'Elena' },
        { button: '#splide01 > ul > li:nth-child(3) > button', text: '#brxe-b0d744 > div.brxe-div.slider-product-content > h4', value: '20.59' }
    ]

    bisazza.forEach(({ button, text, value}) => {
        cy.get(button).click()
        cy.get(text).invoke('text').should('include', value)
    }) 

    cy.get('#brxe-4d5055 > a').click()
    cy.url().should('include', '/catalogue/')
    cy.go('back')
    
    cy.get('#brxe-sdxjvg > div.brxe-block.button-wrap-h > span').click()
    const form = [
        { selector: '#wpcf7-f4482-o1 > form > p:nth-child(2) > span > input', value: 'Rayhan' },
        { selector: '#wpcf7-f4482-o1 > form > p:nth-child(3) > span > input', value: 'rayhan@avonetiq.id' },
        { selector: '#wpcf7-f4482-o1 > form > p:nth-child(4) > span > input', value: '81234567890' }
    ]

    form.forEach(({ selector, value }) => {
        cy.get(selector).type(value)
    })
    cy.get('#wpcf7-f4482-o1 > form > p:nth-child(5)').click()
    cy.wait(1000)
    cy.url().should('include', '/catalogue')
    cy.go('back')

    cy.get('#brxe-lyuxmp').click()
    cy.wait(1000)
    cy.get('a[href*="api.whatsapp.com/send"]')
      .should('have.attr', 'href')
      .and('include', 'phone=%2B6287765833437')
    })
});