# Aula 21/08 - Node.js + Express

Este repositório contém um projeto simples em Node.js com Express para demonstrar envio de formulários via GET e POST.

## Requisitos

Antes de instalar as dependências, você precisa ter o Node.js instalado no computador.

### 1) Instalar o Node.js

Acesse o site oficial:

https://nodejs.org/

Baixe a versão LTS e instale seguindo as instruções do seu sistema operacional.

Depois de instalado, verifique se o Node e o npm estão disponíveis:

```bash
node -v
npm -v
```

Se os comandos retornarem versões, a instalação foi concluída com sucesso.

## Configurar o projeto

No diretório do projeto, execute:

```bash
npm install
```

Esse comando lê o arquivo `package.json` e instala as dependências necessárias, como o Express.

## Executar a aplicação

Dentro da pasta do projeto, rode:

```bash
node index.js
```

Se tudo estiver correto, o terminal exibirá algo como:

```bash
servidor online.
```

A aplicação estará disponível em:

```text
http://localhost:8080/
```

## Abrir o formulário

Abra o arquivo `index.html` no navegador ou use um servidor simples para acessá-lo localmente.

Se o HTML estiver na mesma pasta do projeto, você pode abrir diretamente:

```text
index.html
```

## Observações

- O projeto usa Express para receber requisições HTTP.
- O formulário pode enviar dados por GET ou por POST.
- O método GET envia os dados na URL.
- O método POST envia os dados no corpo da requisição.

## Nota para Windows 11

Se o terminal do PowerShell bloquear a execução de scripts, pode ser necessário liberar a execução localmente:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

Depois disso, confirme com:

```powershell
Y
```

Isso permite rodar scripts locais sem bloquear a execução de comandos como `node` ou `npm` no terminal do Windows.

## Estrutura básica

```text
Aula_2108/
├── index.js
├── index.html
├── package.json
├── package-lock.json
└── node_modules/
```
