export function navegarParaProdutos() {
  cy.get('#primary-menu > .menu-item-629 > a').click();
}

export function selecionarProduto() {
  cy.get('.post-3374 > .product-block > .caption > .meta > .infor > .name > a').click();
}

export function selecionarTamanho() {
  cy.get('.button-variable-item-36').click();
}

export function selecionarCor() {
  cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click();
}

export function adicionarAoCarrinho() {
  cy.get('.single_add_to_cart_button').click();
}

export function verCarrinho() {
  cy.get('.woocommerce-message > .button').click();
}

export function concluirCompra() {
  cy.get('.checkout-button').click();
}

export function validarCheckout() {
  cy.get('.page-title').should('have.text', 'Checkout');
}