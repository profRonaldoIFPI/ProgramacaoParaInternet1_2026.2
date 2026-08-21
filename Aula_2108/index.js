const express = require("express"); //importando modulo express
const servidor = express();

servidor.get("/", (requisicao, resposta) => {
  const conteudo = requisicao.query.conteudo;
  console.log(conteudo);
  resposta.status(200).send(conteudo);
});

servidor.use(express.urlencoded({ extended: true })); // permiti conteudo via post

servidor.post("/", (requisicao, resposta) => {
  const conteudo = requisicao.body.conteudo;
  resposta.status(200).send(conteudo);
});

servidor.listen(8080, () => {
  console.log("servidor online.");
});
