# Roteiro Didático - Aula 5.3: CSS Layouts e Responsividade

Este documento serve como guia passo a passo para a condução da aula, alinhando os conceitos teóricos do slide `Aula_5.3_CSS__Layouts_e_Responsividade.pdf` com os arquivos práticos disponibilizados neste diretório.

---

## 🎯 Objetivos da Aula

1. Compreender a evolução do web design: **Da Rigidez à Fluidez** (o fim do padrão fixo de 960px e o uso de porcentagens e `box-sizing: border-box`).
2. Dominar o modelo **Flexbox** para alinhamentos unidimensionais:
   - Identificar o **Main Axis** (Eixo Principal) e o **Cross Axis** (Eixo Secundário).
   - Distribuir espaços com `justify-content` (`flex-start`, `center`, `space-between`).
   - Alinhar elementos verticalmente com `align-items` (`flex-start`, `center`, `stretch`).
   - Construir componentes do mundo real como uma **Navbar** responsiva com `gap`.
3. Compreender os **3 Pilares do Design Responsivo** (Ethan Marcotte):
   - Layouts Fluidos.
   - Imagens Flexíveis (`max-width: 100%`).
   - Media Queries (`@media`).
4. Dominar a anatomia das **Media Queries**:
   - Declaração condicional (`@media`), Tipo de mídia (`only screen`), Operador lógico (`and`), Breakpoint/condição (`min-width: 768px`).
5. Praticar o paradigma **Mobile-First** com o **Código Progressivo** (Slide 12):
   - Base padrão para dispositivos móveis (`flex-direction: column`).
   - Enriquecimento para Tablets (`@media (min-width: 768px) { flex-direction: row; }`).
   - Limitação para Desktops grandes (`@media (min-width: 1200px) { max-width: 1140px; margin: 0 auto; }`).

---

## 📁 Estrutura dos Arquivos Criados

| Arquivo | Descrição |
| :--- | :--- |
| [`index.html`](file:///home/rpb/IFPI_26.2/Programação%20para%20Web%20I/ProgramacaoParaInternet1_2026.2/Aula_0710_layout_responsivo/index.html) | **Laboratório Completo e Integrado**: reúne todos os tópicos dos slides, navbar funcional, demonstrador dinâmico de breakpoints, caixas coloridas nos eixos Flexbox e macro-estrutura. |
| [`style.css`](file:///home/rpb/IFPI_26.2/Programação%20para%20Web%20I/ProgramacaoParaInternet1_2026.2/Aula_0710_layout_responsivo/style.css) | Folha de estilo completa com a paleta exata dos slides (Roxo `#8E7BB0`, Verde `#74B49B`, Âmbar `#DDA15E`), reset moderno e regras Mobile-First comentadas. |
| [`exemplo1_caixas_flexbox.html`](file:///home/rpb/IFPI_26.2/Programação%20para%20Web%20I/ProgramacaoParaInternet1_2026.2/Aula_0710_layout_responsivo/exemplo1_caixas_flexbox.html) | **Exemplo 1 Isolado**: Foco estrito no Flexbox, navbar e alinhamentos das 3 caixas coloridas (Slides 4 e 5). |
| [`exemplo1_caixas_flexbox.css`](file:///home/rpb/IFPI_26.2/Programação%20para%20Web%20I/ProgramacaoParaInternet1_2026.2/Aula_0710_layout_responsivo/exemplo1_caixas_flexbox.css) | Estilização minimalista e didática das caixas flexíveis. |
| [`exemplo2_media_queries.html`](file:///home/rpb/IFPI_26.2/Programação%20para%20Web%20I/ProgramacaoParaInternet1_2026.2/Aula_0710_layout_responsivo/exemplo2_media_queries.html) | **Exemplo 2 Isolado**: Demonstração literal do Código Progressivo do Slide 12 (`.painel`) com `@media` Mobile-First. |
| [`exemplo2_media_queries.css`](file:///home/rpb/IFPI_26.2/Programação%20para%20Web%20I/ProgramacaoParaInternet1_2026.2/Aula_0710_layout_responsivo/exemplo2_media_queries.css) | Estilização com os 3 estágios de escalonamento (Mobile &rarr; Tablet &rarr; Desktop). |

---

## ⏱️ Roteiro Passo a Passo Sugerido para a Aula

### 1. Introdução Teórica: O Fim do Padrão Rígido (15 min)
- **Problema histórico (Slide 2)**: Sites projetados fixos em 960px geravam barras de rolagem horizontais em telas menores ou ficavam "ilhados" em monitores maiores.
- **A Solução moderna**: Proporções (`%`), `box-sizing: border-box` e Flexbox.
- **A tag obrigatória (Slide 13)**:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
  *Explicação*: Sem essa tag, dispositivos móveis emulam uma tela desktop de 980px aplicando zoom-out.

---

### 2. Mão na Massa: O Modelo Flexbox e as Caixas Coloridas (30 min)
Abra os arquivos [`exemplo1_caixas_flexbox.html`](file:///home/rpb/IFPI_26.2/Programação%20para%20Web%20I/ProgramacaoParaInternet1_2026.2/Aula_0710_layout_responsivo/exemplo1_caixas_flexbox.html) e [`exemplo1_caixas_flexbox.css`](file:///home/rpb/IFPI_26.2/Programação%20para%20Web%20I/ProgramacaoParaInternet1_2026.2/Aula_0710_layout_responsivo/exemplo1_caixas_flexbox.css).

1. **Apresente o contêiner**:
   ```css
   .box-container {
       display: flex;
   }
   ```
2. **Explore as 3 caixas coloridas**:
   - Caixa 1: Roxo (`#8E7BB0`)
   - Caixa 2: Verde-menta (`#74B49B`)
   - Caixa 3: Âmbar (`#DDA15E`)
3. **Demonstre o Eixo Principal (`justify-content`)**:
   - `flex-start`: caixas no início.
   - `center`: caixas centralizadas.
   - `space-between`: primeira no início, última no fim, espaço igual entre elas.
4. **Demonstre o Eixo Secundário (`align-items`)**:
   - `flex-start` vs `center` vs `stretch` (observe como a caixa com altura automática preenche a altura total).
5. **Navbar na Prática (Slide 6)**:
   ```css
   .navbar {
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       align-items: center;
       padding: 1rem;
   }
   .nav-links {
       display: flex;
       gap: 1.5rem;
   }
   ```

---

### 3. Media Queries e Mobile-First (35 min)
Abra os arquivos [`exemplo2_media_queries.html`](file:///home/rpb/IFPI_26.2/Programação%20para%20Web%20I/ProgramacaoParaInternet1_2026.2/Aula_0710_layout_responsivo/exemplo2_media_queries.html) e [`exemplo2_media_queries.css`](file:///home/rpb/IFPI_26.2/Programação%20para%20Web%20I/ProgramacaoParaInternet1_2026.2/Aula_0710_layout_responsivo/exemplo2_media_queries.css).

1. **Anatomia da Regra (Slide 8)**:
   ```css
   @media only screen and (min-width: 768px)
   ```
2. **A Falácia dos Breakpoints por Aparelho (Slide 9)**:
   - Não crie breakpoints específicos para marcas de celulares ("iPhone 14", "Galaxy S22").
   - Crie breakpoints baseados no conteúdo (*Content-driven*): estique a janela; se o layout quebrou, ali está o breakpoint exato!
3. **Construindo o Código Progressivo (Slide 12)**:
   ```css
   /* 1. Base: Celular por padrão */
   .painel {
       width: 100%;
       display: flex;
       flex-direction: column;
       gap: 1.5rem;
   }

   /* 2. Tablets & Telas Médias */
   @media (min-width: 768px) {
       .painel {
           flex-direction: row;
       }
   }

   /* 3. Desktops & Telas Grandes */
   @media (min-width: 1200px) {
       .painel {
           max-width: 1140px;
           margin: 0 auto;
       }
   }
   ```
4. **Teste Prático**:
   - Abra as Ferramentas do Desenvolvedor do navegador (`F12` ou `Ctrl + Shift + I`).
   - Ative a barra de simulação de dispositivos (`Ctrl + Shift + M`).
   - Arraste a largura da tela de 320px até 1400px e observe os saltos visuais nos breakpoints 768px e 1200px.

---

### 4. Desafios Propostos para os Alunos

1. **Desafio 1 (Inversão no Mobile)**:
   Modifique o `.painel` para que no mobile os itens apareçam na ordem inversa (`flex-direction: column-reverse;`), mantendo a ordem normal no Desktop.
2. **Desafio 2 (Novo Breakpoint)**:
   Adicione um breakpoint intermediário em `992px` para mudar a cor de fundo das caixas ou o espaçamento (`gap: 2rem;`).
3. **Desafio 3 (Menu Hambúrguer com Flexbox)**:
   Na navbar, oculte os links (`display: none;`) em telas menores que `768px` e exiba-os em linha (`display: flex;`) apenas acima de `768px`.
