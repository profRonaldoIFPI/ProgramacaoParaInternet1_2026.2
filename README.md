# Programação para Internet I (2026.2)

Repositório oficial de materiais, slides, referências e códigos desenvolvidos durante as aulas da disciplina **Programação para Internet I**, ofertada no curso de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) do **Instituto Federal do Piauí (IFPI) — Campus Floriano**.

A disciplina aborda a arquitetura da Web e o desenvolvimento da camada de apresentação (front-end), com foco em semântica, responsividade, boas práticas, dinamismo e integração com serviços web.

---

## 📚 Conteúdo Programático

1. **Fundamentos da Web & Arquitetura Cliente-Servidor**
   - História e funcionamento da Web, DNS, arquitetura cliente-servidor.
   - Protocolo HTTP/HTTPS (métodos, cabeçalhos, códigos de status).
2. **HTML5 Semântico**
   - Estruturação semântica de documentos, acessibilidade e SEO.
   - Formulários modernos e validações nativas.
   - Multimídia (áudio, vídeo, imagens responsivas).
3. **CSS3 & Design Responsivo**
   - Seletores, cascata, especificidade e Box Model.
   - Layouts modernos com Flexbox e CSS Grid.
   - Responsividade com Media Queries e animações CSS.
4. **JavaScript no Cliente**
   - Sintaxe moderna, manipulação do DOM e tratamento de eventos.
   - Requisições assíncronas com Fetch API e manipulação de dados JSON.
5. **Introdução ao Back-end & MVP**
   - Noções de ambiente de servidor e criação de rotas/serviço básico (Node.js/Express ou Flask).
   - Integração front-end/back-end e desenvolvimento orientado a projetos.

---

## 📂 Estrutura do Repositório

```text
.
├── Aula_0708/                  # Aula de 07/08 - Estrutura básica e HTML semântico
│   └── index.html
├── Aula_1908/                  # Aula de 19/08 - Formulários em HTML5
│   └── form.html
├── Aula_1109_CSS/              # Aula de 11/09 - Introdução ao CSS, Seletores e Box Model
│   ├── index.html              # HTML base para acompanhamento em sala
│   ├── style.css               # CSS inicial com seções comentadas para a turma
│   ├── conteúdo.md             # Tópicos e ementa da aula
│   ├── Aula 5.1: CSS e Seletores.pdf # Slides da aula
│   └── gabarito/               # Gabarito completo da aula
│       ├── index.html
│       ├── style.css
│       └── ROTEIRO_AULA.md
├── Aula_0710_layout_responsivo/# Aula de 07/10 - CSS Layouts, Flexbox e Responsividade (@media)
│   ├── index.html              # Hub completo interativo (Flexbox, @media, alinhamentos)
│   ├── style.css               # Estilos da aula e Mobile-First com cores dos slides
│   ├── exemplo1_caixas_flexbox.html # Exemplo isolado 1: Flexbox e as caixas coloridas
│   ├── exemplo1_caixas_flexbox.css  # CSS isolado do exemplo 1
│   ├── exemplo2_media_queries.html  # Exemplo isolado 2: @media progressivo (Mobile-First)
│   ├── exemplo2_media_queries.css   # CSS isolado do exemplo 2
│   └── ROTEIRO_AULA.md         # Roteiro didático passo a passo da aula
├── Referencias/                # Livros e materiais complementares em PDF
├── Slides/                     # Apresentações utilizadas nas aulas
├── plano_2016.2.pdf            # Plano de ensino da disciplina
└── README.md                   # Documentação do repositório
```

---

## 🗓️ Registro de Aulas

| Data | Tópico Abordado | Diretório / Arquivos | Material de Apoio |
| :--- | :--- | :--- | :--- |
| **Apresentação** | Plano de ensino e introdução à disciplina | — | `Slides/Aula 0_Plano de disciplina.pdf` |
| **07/08** | Fundamentos da Web & Estrutura Semântica HTML5 | [`Aula_0708/index.html`](Aula_0708/index.html) | `Slides/Aula_1_Fundamentos da web.pdf`<br>`Slides/Aula_2__fundamentos_de_HTML.pdf` |
| **19/08** | Formulários em HTML5 (campos, inputs, labels, métodos) | [`Aula_1908/form.html`](Aula_1908/form.html) | `Slides/Aula_3_HTML5_Forms.pdf` |
| **11/09** | Introdução ao CSS, Seletores, Combinadores, Box Model e Especificidade | [`Aula_1109_CSS/`](Aula_1109_CSS/) | `Aula_1109_CSS/conteúdo.md`<br>`Aula_1109_CSS/Aula 5.1: CSS e Seletores.pdf`<br>[`Aula_1109_CSS/gabarito/`](Aula_1109_CSS/gabarito/) |
| **07/10** | CSS Layouts e Responsividade: Flexbox, Caixas Coloridas e @media Mobile-First | [`Aula_0710_layout_responsivo/`](Aula_0710_layout_responsivo/) | `Slides/Aula_5.3_CSS__Layouts_e_Responsividade.pdf`<br>[`Aula_0710_layout_responsivo/ROTEIRO_AULA.md`](Aula_0710_layout_responsivo/ROTEIRO_AULA.md) |

---

## 📖 Material de Apoio e Referências

O diretório [`Referencias/`](Referencias/) reúne bibliografias e leituras complementares recomendadas:
- *Fundamentos de HTML5 e CSS3* — Maurício Samy Silva
- *HTML5: A linguagem de marcação que revolucionou a Web* — Maurício Samy Silva
- *CSS3* — Maurício Samy Silva
- *CSS Eficiente* — Casa do Código
- *Dive Into HTML5* — José Cristiano da Silva Lima

---

## 🚀 Como Utilizar

Para clonar o repositório localmente:

```bash
git clone https://github.com/profRonaldoIFPI/ProgramacaoParaInternet1_2026.2.git
cd ProgramacaoParaInternet1_2026.2
```

Para visualizar os arquivos HTML, basta abri-los em qualquer navegador web moderno ou utilizar a extensão **Live Server** no VS Code/IDE.

---

**Professor:** Ronaldo Borges  
**Instituição:** Instituto Federal do Piauí (IFPI) — Campus Floriano  
