describe('Corporate', () => {
    beforeEach(() => {
        cy.visit('/corporate') // Akses Page 
    })

    it('Main Section', () => {
    cy.get('#company-profile').click()
    const part1 = [
        { selector: '#brx-tab-title-wwbfob-0 > div', doc: '#brx-tab-pane-wwbfob-0' },
        { selector: '#brxe-fiufjt > div', doc: '#brx-tab-pane-wwbfob-1' },
        { selector: '#brxe-cintma > div', doc: '#brx-tab-pane-wwbfob-2' }
    ]
    part1.forEach(({ selector, doc }) => {
        cy.get(selector).click()
        cy.get(doc).should('be.visible')
    })
    
    cy.get('#code-of-conduct').click()
    const part2 = [
        { selector: '#brx-tab-title-ewrqbx-0 > div', doc: '#brx-tab-pane-ewrqbx-0' },
        { selector: '#brx-tab-title-ewrqbx-1 > div', doc: '#brx-tab-pane-ewrqbx-1' },
        { selector: '#brx-tab-title-ewrqbx-2 > div', doc: '#brx-tab-pane-ewrqbx-2' },
        { selector: '#brx-tab-title-ewrqbx-3 > div', doc: '#brx-tab-pane-ewrqbx-3' },
        { selector: '#brx-tab-title-ewrqbx-4 > div', doc: '#brx-tab-pane-ewrqbx-4' },
        { selector: '#brx-tab-title-ewrqbx-5 > div', doc: '#brx-tab-pane-ewrqbx-5' },
        { selector: '#brx-tab-title-ewrqbx-6 > div', doc: '#brx-tab-pane-ewrqbx-6' },
        { selector: '#brx-tab-title-ewrqbx-7 > div', doc: '#brx-tab-pane-ewrqbx-7' },
        { selector: '#brx-tab-title-ewrqbx-8 > div', doc: '#brx-tab-pane-ewrqbx-8' },
        { selector: '#brx-tab-title-ewrqbx-9 > div', doc: '#brx-tab-pane-ewrqbx-9' },
        { selector: '#brx-tab-title-ewrqbx-10 > div', doc: '#brx-tab-pane-ewrqbx-10' },
        { selector: '#brx-tab-title-ewrqbx-11 > div', doc: '#brx-tab-pane-ewrqbx-11' },
        { selector: '#brx-tab-title-ewrqbx-12 > div', doc: '#brx-tab-pane-ewrqbx-12' }
    ]
    part2.forEach(({ selector, doc }) => {
        cy.get(selector).click()
        cy.get(doc).should('be.visible')
    })

    cy.get('#information-for-shareholders').click()
    const part3 = [
        { selector: '#brx-tab-title-ghedzf-0 > div', doc: '#brx-tab-pane-ghedzf-0' },
        { selector: '#brx-tab-title-ghedzf-1 > div', doc: '#brx-tab-pane-ghedzf-1' },
        { selector: '#brx-tab-title-ghedzf-2 > div', doc: '#brx-tab-pane-ghedzf-2' },
        { selector: '#brx-tab-title-ghedzf-3 > div', doc: '#brx-tab-pane-ghedzf-3' },
        { selector: '#brx-tab-title-ghedzf-4 > div', doc: '#brx-tab-pane-ghedzf-4' },
        { selector: '#brx-tab-title-ghedzf-5 > div', doc: '#brx-tab-pane-ghedzf-5' }
    ]
    part3.forEach(({ selector, doc }) => {
        cy.get(selector).click()
        cy.get(doc).should('be.visible')
    })

    // cy.get('#annual-report').click()

    // const part4 = [
    // {
    //     selector: '#brxe-afiluo',
    //     url: 'https://citatah.salite.site/wp-content/uploads/2025/09/CTTH-AR-SR-2024-FINAL.pdf',
    //     validate: 'CTTH-AR-SR-2024-FINAL.pdf'
    // },
    // {
    //     selector: '#brxe-gpnuwy',
    //     url: 'https://citatah.salite.site/wp-content/uploads/2025/09/CTTH-AR-SR-2023-FINAL.pdf',
    //     validate: 'CTTH-AR-SR-2023-FINAL.pdf'
    // },
    // {
    //     selector: '#brxe-kmrmbl',
    //     url: 'https://citatah.salite.site/wp-content/uploads/2025/09/20230503-AR-CITATAH-2022.pdf',
    //     validate: '20230503-AR-CITATAH-2022.pdf'
    // }
    // ]

    // for (const { selector, url, validate } of part4) {
    // cy.get(selector)
    //     .should('have.attr', 'href', url)
    //     .and('have.attr', 'target', '_blank')
    //     .invoke('removeAttr', 'target') // supaya buka di tab yang sama
    //     .click()

    // cy.url().should('include', validate.trim())

    // cy.wait(2000)
    // cy.go('back')
    // cy.get('#annual-report').should('be.visible')
    // }

    cy.get('#financial-report').click()
    const part5 = [
        { selector: '#brx-tab-title-dtxvmv-0 > div', doc: '#brx-tab-pane-dtxvmv-0' },
        { selector: '#brx-tab-title-dtxvmv-1 > div', doc: '#brx-tab-pane-dtxvmv-1' },
        { selector: '#brx-tab-title-dtxvmv-2 > div', doc: '#brx-tab-pane-dtxvmv-2' },
        { selector: '#brx-tab-title-dtxvmv-3 > div', doc: '#brx-tab-pane-dtxvmv-3' },
        { selector: '#brx-tab-title-dtxvmv-4 > div', doc: '#brx-tab-pane-dtxvmv-4' },
        { selector: '#brx-tab-title-dtxvmv-5 > div', doc: '#brx-tab-pane-dtxvmv-5' }
    ]
    part5.forEach(({ selector, doc }) => {
        cy.get(selector).click()
        cy.get(doc).should('be.visible')
    })

    cy.get('#investment-relation-contact').click()
    cy.get('#brx-tab-title-evmwck-0 > div').click()
    cy.get('#brx-tab-pane-evmwck-0').should('be.visible')
    
    })
});