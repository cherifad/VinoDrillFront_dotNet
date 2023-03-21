describe('Form', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.visit('http://127.0.0.1:5173/coffretCadeau')

    
  })
    it('Erreur cheque cadeau si non connecté', () => {
      // cy.contains('Cadeau').then(($el) => {
      //   if ($el.length) {
      //     cy.get('div').contains('Cadeau').click()
      //   } else {
      //     cy.get('title').contains('Menu').click()
      //     cy.get('a').contains('Cadeau').click()
      //   }
      //   });

      cy.get('div').contains('500').click()
      cy.get('#button3CadeauPasser').contains('Passer à l\'étape suivante').click()
      cy.contains('Vous devez être connecté pour offrir un chèque cadeau') // replace with the success message displayed on your form page
    })
  })