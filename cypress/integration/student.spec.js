describe('My First Test', () => {
    it ('Visit the website', () => {
        cy.visit('/',
        {
            onBeforeLoad: (win) => {
                win.onerror = null
              }
        })

        cy.get('img').eq(1).click()

        cy.contains('Khi nào thì tối giản').click()

        cy.get('button').click()
        
        cy.contains('Đúng').click()

        cy.contains('Sai').click()

        cy.contains('Quay về màn hình chính').click()
    })
})