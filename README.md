# 🛒 Testes E2E com Cypress utilizando AppActions – E-commerce EBAC

Este projeto automatiza o fluxo de compra no e-commerce [lojaebac.ebaconline.art.br](http://lojaebac.ebaconline.art.br/) usando a ferramenta [Cypress](https://www.cypress.io/) e o padrão **AppActions** para organizar comandos de teste.

---

## 🎯 Objetivo

Garantir que o processo de compra, do início à finalização no checkout, funcione conforme esperado. Todas as etapas estão organizadas em funções que espelham as ações reais do usuário no site.

---

## 🗂️ Estrutura do Projeto

cypress/
appActions/ # Funções de ação agrupando fluxos do usuário
compraActions.js
e2e/ # Especificações dos testes (specs)
compra.cy.js
cypress.config.js
package.json


---

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) ^14.5.0
- Node.js (recomendado v16+)
- JavaScript

---

## ⚡ O que são AppActions?

**AppActions** são funções que agrupam interações do usuário e simulam fluxos completos dentro do sistema. Em vez de agrupar por página, cada função representa uma ação ou sequência fundamental para o negócio — como adicionar produto ao carrinho ou concluir uma compra.

### 💡 Exemplo de AppAction

```javascript
// cypress/appActions/compraActions.js

export function selecionarProdutoEAdicionarAoCarrinho() {
  cy.get('#primary-menu > .menu-item-629 > a').click();
  cy.get('.post-3374 > .product-block > .caption > .meta > .infor > .name > a').click();
  cy.get('.button-variable-item-36').click();
  cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click();
  cy.get('.single_add_to_cart_button').click();
}