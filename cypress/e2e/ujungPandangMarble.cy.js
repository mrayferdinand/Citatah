describe('Ujung Pandang', () => {
    beforeEach(() => {
        cy.visit('/product-category/natural-stone/ujung-pandang-marble/') // Akses Page 
    })

    it('Hero', () => {
        cy.get('#brxe-jncetn > span').click()
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

        cy.get('#brxe-agwntp').click()
        cy.wait(3000)
        cy.url().should('include', '/contact')
    })

    it('Collection', () => {
        cy.get('#brx-content > section:nth-child(3) > div > div > div:nth-child(1) > div > a').click()
        cy.wait(1000)
        const productCard = [
            { selector: '[aria-controls="Ujung Pandang Marble-0"]', textField: '#Ujung\\ Pandang\\ Marble-0 > h3', text: 'Azul Classico' },
            { selector: '[aria-controls="Ujung Pandang Marble-1"]', textField: '#Ujung\\ Pandang\\ Marble-1 > h3', text: 'Azul Linea' },
            { selector: '[aria-controls="Ujung Pandang Marble-2"]', textField: '#Ujung\\ Pandang\\ Marble-2 > h3', text: 'Concrete Classico' }
        ]

        productCard.forEach(({ selector, textField, text }) => {
            cy.get(selector).click()
            cy.wait(1000)
            cy.get(textField).invoke('text').should('include', text)
        })

        cy.get('#Ujung\\ Pandang\\ Marble-2 > div.brxe-oegeqc.brxe-block > a:nth-child(1)').click()
        const productCard1 = [
            { selector: '#brx-tab-title-def227-0', image: '#brx-tab-pane-def227-0 > img' },
            { selector: '#brx-tab-title-def227-1', image: '#brx-tab-pane-def227-1 > img' },
            { selector: '#brx-tab-title-def227-2', image: '#brx-tab-pane-def227-2 > img' }
        ]

        cy.wrap(productCard1).each(({ selector, image }) => {
            cy.get(selector).click()
            cy.wait(1000)
            cy.get(image).should('be.visible')
        })

        cy.get('#brxe-9a4100').click()
        cy.get('#brxe-1c7c6c').click()
    })

    it('Applications', () => {
        const productCard = [
            { selector: '#brxe-febzra > ul > li:nth-child(1) > button', image: '#brxe-euhlpa > img' },
            { selector: '#brxe-febzra > ul > li:nth-child(2) > button', image: '#brxe-ibjppm > img' },
            { selector: '#brxe-febzra > ul > li:nth-child(3) > button', image: '#brxe-gddzoq > img' }
        ]

        productCard.forEach(({ selector, image }) => {
            cy.get(selector).click()
            cy.wait(1000)
            cy.get(image).should('be.visible')
        })
    })

    it('Last Section', () => {
        cy.get('#brxe-zifkdf > div.brxe-block.button-wrap-h').click()
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

        cy.get('#brxe-fwgvab').click()
        cy.url().should('include', '/contact')
    })
});