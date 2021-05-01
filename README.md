# Desafio Cubos Academy - treino React

React é uma biblioteca/framework JavaScript para criar aplicações que rodam no navegador, porém os pacotes que 
iremos utilizar durante o desenvolvimento serão gerenciados pelo Node Package Manager (NPM), então precisaremos
instalá-lo, além de outras ferramentas.

<hr>

## Passo a passo para rodar esse projeto

### `clone`
Você pode clonar o repositório usando **git clone** no terminal:

    git clone https://github.com/MayllaRabay/desafio-modulo-1.git

Ou você pode baixar o arquivo clicando no botão verde **"Code"** - "Download .zip"

### `Node.js, npm e yarn install`
Como disse antes, o projeto depende de algumas ferramentas para funcionar, então primeiramente vamos até o site oficial do 
[**Node.js**](https://nodejs.org/en/) para instalar sua versão LTS.\
Quando instalamos o Node.js, o **NPM** também é instalado no computador como parte do mesmo pacote.\
Através do NPM iremos instalar o gerenciador de dependências **Yarn** usando o comando:

    npm install -g yarn

### `Typescript e Sass`
Uma vez dentro da pasta de nosso projeto, podemos instalar o **Typescript** (uma linguagem de programação parecida com Javascript,
porém com uma maior facilidade de manutenção no código, e por causa de certas regras e restrições ajuda a não cometer erros durante o
desenvolvimento) e [**Sass**](https://sass-lang.com/guide) (um CSS com super poderes!) com os seguintes comandos:

    yarn add typescript @types/react @types/node -D
    
    yarn add sass

### `yarn dev`
Agora que temos nossas ferramentas instaladas e prontas, podemos rodar nosso projeto em modo desenvolvimento!
Para vizualização, abra [http://localhost:3000](http://localhost:3000) no navegador.

    yarn dev

Para mais informações, veja a [documentação do Next](https://nextjs.org/docs) e a 
[documentação do React](https://create-react-app.dev/docs/getting-started/).
