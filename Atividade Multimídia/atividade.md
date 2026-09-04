# 📝 Laboratório Prático: Portal Turístico Floriano Cultural

**Disciplina:** Programação para Internet I (TEC.1045)  
**Professor:** Ronaldo Borges | **Carga Horária Estimada:** 4 horas (2h de desenvolvimento + 2h de refinamento/entrega)  
**Objetivo:** Aplicar de forma prática e semântica elementos de áudio, vídeo, imagens acessíveis e incorporação externa no HTML5.  

---

## 📂 Estrutura do Projeto (Preparação)

Antes de iniciar o código, os alunos deverão estruturar um diretório local organizado da seguinte forma:

```text
floriano-cultural/
├── index.html
├── img/
│   ├── logo-ifpi.png
│   ├── capela.jpg (ou outra atração local)
│   └── poster-video.jpg
├── media/
│   ├── audio-guia.mp3
│   ├── audio-guia.ogg
│   ├── documentario.mp4
│   └── documentario.webm
└── subtitles/
    └── legendas-pt.vtt
```

---

## 🛠️ Roteiro de Requisitos da Atividade

### Parte 1: Cabeçalho e Imagens Semânticas (Acessibilidade)

1. **Identificação Visual:** No topo da página, insira o logotipo do IFPI Campus Floriano usando a tag `<img>` com o atributo `alt` devidamente preenchido para leitores de tela.
2. **Galeria de Atrações:** Os alunos devem escolher 2 pontos turísticos da região (ex: Rio Parnaíba, Casarões Históricos, Capela do Padre Lira) e inseri-los no corpo do site.
3. **Marcação Semântica:** Cada imagem deve ser obrigatoriamente encapsulada pelo elemento `<figure>`, e conter uma legenda descritiva visível utilizando `<figcaption>`.
4. **Garantia de Acessibilidade:** O atributo `alt` das fotos não deve repetir a legenda; ele deve descrever brevemente o conteúdo visual para pessoas com deficiência visual.

---

### Parte 2: Áudio-Guia Turístico (Múltiplas Fontes)

Para guiar o visitante, os alunos incluirão um player de áudio nativo que descreve Floriano.

1. O reprodutor de áudio deve usar o elemento `<audio>` com os controles do navegador visíveis (`controls`).
2. **Compatibilidade Multi-browser:** Devem ser fornecidas duas fontes de áudio usando o elemento `<source>` dentro do player (um arquivo `.mp3` e um `.ogg`).
3. **Fallback Textual:** Caso o navegador do usuário seja muito antigo e não suporte o elemento `<audio>`, o código deve exibir uma mensagem alternativa amigável e um link direto para o usuário fazer o download do arquivo de áudio.

---

### Parte 3: Documentário Local com Legenda (Vídeo e Acessibilidade)

Os alunos deverão incluir um breve documentário em vídeo sobre a cultura da região.

1. O vídeo deve ser renderizado nativamente com a tag `<video>`, utilizando largura e altura definidas de forma proporcional (`width="100%"` ou similar) e controles ativos.
2. Defina uma imagem de capa personalizada usando o atributo `poster` (carregando a imagem `poster-video.jpg`), que aparecerá antes de o usuário dar o play.
3. Utilize o elemento `<source>` para oferecer o vídeo em múltiplos formatos para o navegador escolher o ideal (ex: `.mp4` e `.webm`).
4. **Acessibilidade Obrigatória (Legendas):** Adicione um arquivo de legenda no formato WebVTT (`.vtt`) usando o elemento `<track>`. Configure os atributos `kind="subtitles"`, `srclang="pt"`, `label="Português"` e `default`.

---

### Parte 4: Integração com Terceiros (Iframe)

No rodapé do portal, insira uma seção para ajudar o turista a se localizar.

1. Incorpore um **mapa interativo** do Google Maps mostrando a localização do *IFPI Campus Floriano*.
2. A incorporação deve ser feita utilizando o elemento `<iframe>`, configurado de forma segura e responsiva.

---

## 🎯 Critérios de Avaliação e Pontuação (Total: 10 pontos)

| Critério | Descrição | Pontuação |
| :--- | :--- | :---: |
| Semântica de Imagem | Uso correto de `<figure>`, `<figcaption>` e atributos alt descritivos e acessíveis. | 2,0 pts |
| Robustez de Áudio | Player funcional, múltiplo suporte (mp3/ogg) e mensagem de fallback. | 2,0 pts |
| Acessibilidade em Vídeo | Elemento `<video>` com poster, suporte de formatos e faixa de legenda .vtt funcional. | 3,0 pts |
| Integração Externa | Mapa incorporado corretamente com `<iframe>` sem quebrar o layout. | 1,5 pts |
| Organização do Código | Estrutura correta de pastas, indentação limpa e semântica de divisão (como `<header>`, `<main>` e `<footer>`). | 1,5 pts |

---

## 📦 Modelo de Entrega

Os alunos deverão compactar a pasta do projeto (`floriano-cultural.zip`) ou disponibilizar um link para um repositório no GitHub contendo todos os arquivos. Eles também deverão anexar um arquivo simples de legendas (`legendas-pt.vtt`) com pelo menos 3 marcações de tempo e textos simples.
