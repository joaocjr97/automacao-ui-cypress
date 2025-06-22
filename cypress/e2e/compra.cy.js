import {
  navegarParaProdutos,
  selecionarProduto,
  selecionarTamanho,
  selecionarCor,
  adicionarAoCarrinho,
  verCarrinho,
  concluirCompra,
  validarCheckout
} from '../appActions/compraActions';

describe('Fluxo de compra até o checkout', () => {
  it('Deve realizar uma compra até chegar à página de checkout', () => {
    cy.visit('/');

    navegarParaProdutos();
    selecionarProduto();
    selecionarTamanho();
    selecionarCor();
    adicionarAoCarrinho();
    verCarrinho();
    concluirCompra();
    validarCheckout();
  });
});