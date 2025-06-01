# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

# 🍅🕜 Projetos de Aprimoramento nos conhecimentos em React e TypeScript

O projeto consiste em um `temporizador do método pomodoro` e o controle dos temporizadores anteriores. O projeto foi feito para aprendizado com base nos conteudos da rocketseat disponibilizados na internet. 
Nele foram utilizados os conceitos de componentização, rotas entre páginas, hooks do React, como useEffect, useState e o useReducer, uso do local storage. Além disso foi utilizado o typescript com styled components para a estilização da página.

## 💻 Demonstração

Veja como funciona: 

![Tela Inicial](src/assets/readmeImages/TelaInicial.png)
![Tela de Histórico](src/assets/readmeImages/Historico.png)

## ▶️ Como executar o projeto localmente

No seu terminal 

```bash
# Clone o repositório
git clone https://github.com/yVictorK/ProjetoPomodoro.git

# Acesse a pasta do projeto
cd ProjetoPomodoro

# Instale as dependências
npm install
# ou, se preferir usar yarn
yarn install

# Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev

```

#ProjetoPomodoro



