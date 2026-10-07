# ⚽ Quiz sobre Futebol

Quiz interativo de perguntas sobre futebol, feito com **React**, **Vite** e **Tailwind CSS**.

## Funcionalidades

- 10 perguntas de múltipla escolha sobre Copas do Mundo, clubes e jogadores
- Feedback na hora: a alternativa correta fica verde e a errada fica vermelha
- Barra de progresso e placar durante o jogo
- Tela final com a pontuação e uma mensagem de acordo com o desempenho
- Botão para jogar de novo

## Tecnologias

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) para lint

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
# clonar o repositório
git clone https://github.com/RikelmeMartins/QuizInterativo.git
cd QuizInterativo/quiz-interativo

# instalar as dependências
npm install

# rodar em modo de desenvolvimento
npm run dev
```

Depois abra o endereço mostrado no terminal (por padrão `http://localhost:5173`).

## Scripts

| Comando           | Descrição                                  |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Inicia o servidor de desenvolvimento       |
| `npm run build`   | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Serve localmente a versão de produção      |
| `npm run lint`    | Roda o Oxlint no código                    |

## Estrutura

```
src/
├── App.jsx                 # Lógica e telas do quiz (início, jogo, resultado)
├── components/
│   └── perguntas.jsx       # Lista de perguntas, alternativas e respostas
├── main.jsx                # Ponto de entrada da aplicação
└── index.css               # Importação do Tailwind
```

## Adicionando perguntas

Basta incluir um novo objeto no array em [src/components/perguntas.jsx](src/components/perguntas.jsx):

```js
{
    'id': 11,
    'pergunta': 'Qual jogador ganhou mais Bolas de Ouro?',
    'alternativas': ['Cristiano Ronaldo', 'Messi', 'Platini', 'Cruyff'],
    'correta': 'Messi'
}
```

O valor de `correta` precisa ser exatamente igual a uma das `alternativas`.
