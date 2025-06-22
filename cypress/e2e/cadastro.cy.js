import CadastroPage from '../pages/CadastroPage';

describe('Cadastro de novo usuário', () => {
    it('Deve criar um cadastro com sucesso', () => {
        // Geração de email único para evitar duplicidade
        const email = `usuario_${Date.now()}@teste.com`;
        const senha = 'SenhaTeste123!';

        CadastroPage.visitarHome();
        CadastroPage.clicarNoProfile();
        CadastroPage.preencherEmail(email);
        CadastroPage.preencherSenha(senha);
        CadastroPage.clicarRegister();
        CadastroPage.validarMinhaConta();
    });
});