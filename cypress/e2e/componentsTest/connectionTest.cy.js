describe('Form', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
      cy.visit('http://127.0.0.1:5173/connexion')
      cy.get('#register').click()
    })
    
      it('Clique sur ok du Cookie', () => {
        cy.get('#cookie-btn').then(($el) => {
          if ($el.length) {
            cy.get('#cookie-btn').click()
          }
          });

      })   
      
      it('Selectionne une date', () => {
        cy.get('#birthdate').type('2001-12-12')
        });
      
      it('Inscription Test Ok', () => {
        // cy.contains('Cadeau').then(($el) => {
        //   if ($el.length) {
        //     cy.get('div').contains('Cadeau').click()
        //   } else {
        //     cy.get('title').contains('Menu').click()
        //     cy.get('a').contains('Cadeau').click()
        //   }
        //   });

        cy.get('div').contains('M').click()
        cy.get('#lastname').type('MegaNom')
        cy.get('#firstename').type('MegaPrenom')
        cy.get('#email').type('john@example.com')
        cy.get('#birthdate').type('2001-12-12')
        cy.get('#password').type('Meg1.dingos12')
        cy.get('input[name=passwordConfirm]').type('Meg1.dingos12')
        cy.get('button').contains('S\'inscrire').click()
      })
    })