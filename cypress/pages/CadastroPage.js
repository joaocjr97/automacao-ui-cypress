class CadastroPage {
    visitarHome() {
        cy.visit('/');
    }

    clicarNoProfile() {
        cy.get('.icon-user-unfollow').click();
    }

    preencherEmail(email) {
        cy.get('#reg_email').type(email);
    }

    preencherSenha(senha) {
        cy.get('#reg_password').type(senha);
    }

    clicarRegister() {
        cy.get(':nth-child(4) > .button').click();
    }

    validarMinhaConta() {
        cy.get('.page-title').should('contain', 'Minha conta');
    }
}

export default new CadastroPage();