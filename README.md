# Quizz Eneagrama – Site estático

Este pacote contém um site **estático** (HTML/CSS/JS) com um quizz moderno do Eneagrama (19 questões).
Ele roda localmente e pode ser publicado facilmente no **GitHub Pages**.

## Como executar localmente
1. Baixe e extraia o `.zip`.
2. Abra o arquivo `index.html` no seu navegador (basta dar dois cliques).

> Dica: se você usar VS Code + a extensão *Live Server*, terá recarregamento automático ao editar.

## Publicar no GitHub Pages
1. Crie um repositório novo no GitHub (ex.: `eneagrama-quizz`).
2. **Envie** os três arquivos deste pacote (`index.html`, `styles.css`, `script.js`).
3. No repositório, vá em **Settings → Pages** e selecione **Deploy from a branch**; branch `main` e pasta `/root`.
4. Aguarde a página ficar disponível no endereço `https://seuusuario.github.io/eneagrama-quizz/`.

## Sobre o cálculo
- Cada questão possui 9 opções; cada opção soma 1 ponto ao tipo correspondente (1..9).
- O resultado mostra a pontuação final, os 3 tipos com maior escore e um gráfico radar (Chart.js via CDN).

## Personalização
- Ajuste textos/descrições em `script.js` (objeto `TYPE_DESCRIPTIONS`).
- Estilos em `styles.css`.
- Para traduzir ou alterar o número de questões, edite o array `QUESTIONS`.

> Conteúdo baseado nos PDFs fornecidos pela usuária. Use com responsabilidade e como instrumento de **autoconhecimento**, não como diagnóstico.
