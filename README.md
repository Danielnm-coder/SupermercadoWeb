# SupermercadoWeb

**SupermercadoWeb** é a aplicação frontend desenvolvida para interação com a API **SupermercadoApp**. O projeto permite a gestão de produtos de um supermercado, oferecendo uma interface intuitiva para cadastro, consulta, edição e exclusão de produtos.

A API utilizada neste projeto está disponível em: [SupermercadoApp](https://github.com/Danielnm-coder/SupermercadoApp).

## Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias e bibliotecas:

- **Angular**: Framework principal para desenvolvimento da interface web. Saiba mais em [Angular](https://angular.io/).
- **TypeScript**: Linguagem utilizada para desenvolvimento do frontend. Saiba mais em [TypeScript](https://www.typescriptlang.org/).
- **Bootstrap**: Biblioteca de estilização para tornar a interface responsiva e agradável. Saiba mais em [Bootstrap](https://getbootstrap.com/).
- **HttpClient**: Serviço do Angular utilizado para realizar as requisições à API. Saiba mais em [HttpClient Angular](https://angular.io/guide/http).

## Funcionalidades

- Tela de cadastro de produtos.
- Tela de consulta de produtos.
- Edição e exclusão de produtos diretamente pelos botões na DataTable de consulta.
- Navbar com links para as telas de consulta e cadastro de produtos.
- Integração com a API **SupermercadoApp** para manipulação dos dados.

## Estrutura do Projeto

- **src/app/components**: Contém os componentes reutilizáveis da aplicação.
- **src/app/pages**: Contém as telas principais da aplicação.
- **src/app/layout**: Contém o layout principal da aplicação, incluindo o Navbar.
- **src/app/config**: Contém arquivos de configuração da aplicação.

## Como Executar o Projeto

1. Clone o repositório:
   ```sh
   git clone https://github.com/seuusuario/SupermercadoWeb.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd SupermercadoWeb
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Inicie a aplicação:
   ```sh
   ng serve
   ```
5. Acesse o frontend em `http://localhost:4200`.

## Autor
Desenvolvido por Daniel Nascimento.