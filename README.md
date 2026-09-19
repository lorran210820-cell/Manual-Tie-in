# Tie-in Digital — ENESA Engenharia

Landing page estática e responsiva para apresentação e acompanhamento executivo do Tie-in **TR-2091KS-03 × CT-2032KS-08**, no Projeto Serra Sul S11D.

## Estrutura
- `index.html` — interface principal
- `css/style.css` — identidade visual e responsividade
- `js/script.js` — dados demonstrativos e interações
- `assets/img/` — logos, mapa, planta e evidências
- `assets/docs/` — documentos oficiais disponibilizados para consulta

## Executar localmente
Abra `index.html` diretamente no navegador. Não há build, backend, banco ou framework.

## Imagens
Adicione os arquivos com os nomes esperados em `assets/img/`. Enquanto um arquivo não existir, a interface exibe um placeholder com o caminho esperado.

Arquivos previstos: `logo-vale.png`, `logo-enesa.png`, `hero-tiein.jpg`, `mapa-tiein.jpg`, `planta-geral.jpg`, `foto-local-01.jpg`, `foto-local-02.jpg`, `ponto-encontro.jpg`.

## Alterar dados
Os dados demonstrativos estão centralizados no objeto `data`, no início de `js/script.js`. Edite cronograma, prontidão, avanço, equipe, equipamentos, riscos, qualidade, documentos e evidências nesse objeto.

## Documentos
Coloque PDFs em `assets/docs/`. Os três caminhos já preparados são `manual-tiein.pdf`, `plano-trabalho.pdf` e `cronograma.pdf`. Itens sem arquivo exibem o aviso “Documento ainda não disponibilizado.”

## GitHub Pages
1. Envie a pasta para um repositório GitHub.
2. Em **Settings → Pages**, escolha **Deploy from a branch**.
3. Selecione a branch `main` e a pasta `/ (root)`.
4. Salve e aguarde a publicação.

## Observação
A página é uma central digital de apoio e **não substitui Manual de Tie-in, Plano de Trabalho, cronograma oficial, procedimentos, desenhos ou liberações formais**. Valores de prontidão, avanço e subdivisões do cronograma usados no protótipo são demonstrativos.
