describe('Form', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
      cy.visit('http://127.0.0.1:5173/contact')
  
      
    })
      it('Erreur champs non remplis', () => {
        cy.get('button').contains('Envoyer').click()
        cy.contains('Veuillez remplir les champs obligatoires et/ou cocher la case d\'acceptation de notre politique.')
      })

      it('Erreur Nom -> non remplis', () => {
        cy.get('select#object').select('Contacter le DPO')
        cy.get('#firstname').type('Mega')
        cy.get('#mail').type('Mega@gmail.com')
        cy.get('#message').type('Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg')
        cy.get('[type="checkbox"]').check()
        cy.get('button').contains('Envoyer').click()
        cy.contains('Veuillez remplir les champs obligatoires et/ou cocher la case d\'acceptation de notre politique.')
      })

      it('Erreur Prenom -> non remplis', () => {
        cy.get('select#object').select('Contacter le DPO')
        cy.get('#lastname').type('BG')
        cy.get('#mail').type('Mega@gmail.com')
        cy.get('#message').type('Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg')
        cy.get('[type="checkbox"]').check()
        cy.get('button').contains('Envoyer').click()
        cy.contains('Veuillez remplir les champs obligatoires et/ou cocher la case d\'acceptation de notre politique.')
      })

      it('Erreur Mail -> non remplis', () => {
        cy.get('select#object').select('Contacter le DPO')
        cy.get('#firstname').type('Mega')
        cy.get('#lastname').type('BG')
        cy.get('#message').type('Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg')
        cy.get('[type="checkbox"]').check()
        cy.get('button').contains('Envoyer').click()
        cy.contains('Veuillez remplir les champs obligatoires et/ou cocher la case d\'acceptation de notre politique.')
      })

      it('Erreur Message -> non remplis', () => {
        cy.get('select#object').select('Contacter le DPO')
        cy.get('#firstname').type('Mega')
        cy.get('#lastname').type('BG')
        cy.get('#mail').type('Mega@gmail.com')
        cy.get('[type="checkbox"]').check()
        cy.get('button').contains('Envoyer').click()
        cy.contains('Veuillez remplir les champs obligatoires et/ou cocher la case d\'acceptation de notre politique.')
      })

      it('Erreur Politique de confidentialité -> non coché', () => {
        cy.get('select#object').select('Contacter le DPO')
        cy.get('#firstname').type('Mega')
        cy.get('#lastname').type('BG')
        cy.get('#mail').type('Mega@gmail.com')
        cy.get('#message').type('Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg')
        cy.get('button').contains('Envoyer').click()
        cy.contains('Veuillez remplir les champs obligatoires et/ou cocher la case d\'acceptation de notre politique.')
      })

      it('Reussite champs remplis', () => {
        cy.get('select#object').select('Contacter le DPO')
        cy.get('#firstname').type('Mega')
        cy.get('#lastname').type('BG')
        cy.get('#mail').type('Mega@gmail.com')
        cy.get('#message').type('Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg Ceci est un test du Mega Bg')
        cy.get('[type="checkbox"]').check()
        cy.get('button').contains('Envoyer').click()
        cy.contains('Votre message a été envoyé avec succès ! ')
      })

    })