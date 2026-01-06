describe('Product', () => {
    beforeEach(() => {
        cy.visit('/product') // Akses Page 
    })

    it('Hero', () => {
    cy.get('#brxe-iebksx > div.brxe-block.button-wrap-h.auto-width > span').click()
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

    cy.get('#brxe-uwssgx').click()
    cy.wait(3000)
    cy.url().should('include', '/contact')
    })

    it('Products', () => {
    const productCard = [
        { selector: '#brxe-lkomsi > div:nth-child(1) > a', url: 'https://citatah.co.id/product-category/natural-stone/' },
        { selector: '#brxe-lkomsi > div:nth-child(2) > a', url: 'https://citatah.co.id/product-category/engineered-stone/' },
        { selector: '#brxe-lkomsi > div:nth-child(3) > a', url: 'https://citatah.co.id/product-category/mosaic/' }
    ]

    productCard.forEach(({ selector, url }) => {
        cy.get(selector).click()
        cy.wait(1000)
        cy.url().should('eq',url)
        cy.go('back')
    })
    })

    it('Last Section', () => {
        cy.get('#brxe-jwnuer > div.brxe-block.button-wrap-h > span').click()
        const form1 = [
            { selector: '#wpcf7-f4482-o1 > form > p:nth-child(2) > span > input', value: 'Rayhan' },
            { selector: '#wpcf7-f4482-o1 > form > p:nth-child(3) > span > input', value: 'rayhan@avonetiq.id' },
            { selector: '#wpcf7-f4482-o1 > form > p:nth-child(4) > span > input', value: '81234567890' }
        ]

        form1.forEach(({ selector, value }) => {
            cy.get(selector).type(value)
        })

        cy.get('#wpcf7-f4482-o1 > form > p:nth-child(5)').click()
        cy.url().should('include', '/catalogue')
        cy.go('back')

        cy.get('#brxe-tlsncy').click()
        cy.url().should('include', '/contact')
    })
});