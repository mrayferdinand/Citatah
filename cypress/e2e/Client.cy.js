describe('Client', () => {
    beforeEach(() => {
        cy.visit('/client') // Akses Page 
    })

    it('Hero', () => {
        cy.get('#brxe-xqqapu > span').click()
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

        cy.get('#brxe-xqqapu > a').click()
        cy.wait(3000)
        cy.url().should('include', '/contact')
    })

    it('Collections', () => {
        const productCard = [
            { selector: '#brxe-jrgmsu > a', url: 'https://citatah.co.id/product/' },
            { selector: '#brxe-evtmhz > a', url: 'https://citatah.co.id/project/' }
        ]

        productCard.forEach(({ selector, url }) => {
            cy.get(selector).click()
            cy.wait(1000)
            cy.url().should('eq',url)
            cy.visit('/client')
        })
    })

    it('Last Section', () => {
        cy.get('#brxe-mgfqep > span').click()
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

        cy.get('#brxe-mgfqep > a').click()
        cy.url().should('include', '/contact')
    })
});