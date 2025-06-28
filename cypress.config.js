const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    reporter: "@reportportal/agent-js-cypress",
    reporterOptions: {
      endpoint: "https://demo.reportportal.io/api/v1",
      token: "default_q103X867R566qXRvt1P6w-r3moII7oSZ9UavD47SHS_wGz115tkxfrC8BWkX4lMu",
      launch: "Cadastro de novo usuário sem gerar duplicidade",
      project: "joaocjr97_personal",
      description: "testes cypress"
    }
  }
});