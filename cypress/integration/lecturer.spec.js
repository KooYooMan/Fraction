describe('My First Test', () => {
    it ('Visit the website', () => {
        cy.visit('/',
        {
            onBeforeLoad: (win) => {
                win.onerror = null
              }
        })

        cy.contains('Tiếp Tục').click()

        cy.contains('Thêm Câu Hỏi')
        cy.contains('Menu').click()

        cy.contains('Tối giản mọi thứ').click()
        cy.contains('Thêm Câu Hỏi').should('not.exist')

        cy.contains('Chỉnh sửa').click()
        cy.contains('Cập Nhật Lại Câu Hỏi')
    })
})