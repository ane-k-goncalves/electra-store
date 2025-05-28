# Electra Store

## Sobre o app
Electra Store é um aplicativo mobile desenvolvido com React Native e Expo, que consome dados da Fake Store API. O foco principal da aplicação é apresentar uma vitrine digital de produtos eletrônicos, permitindo que o usuário visualize detalhes, preços e imagens de produtos em um layout moderno, responsivo e agradável.
Este projeto tem como objetivo principal a prática de consumo de APIs REST em aplicações mobile, aplicar conceitos como navegação, estilização e organização de componente, persistência de dados. 

### Checkpoint

- [ ] Tela inicial com título e descrição do app

- [ ] Consumo da API https://fakestoreapi.com/products/category/electronics

- [ ] Listagem dos produtos eletrônicos com imagem, título e preço

- [ ] Layout responsivo com estilo agradável

- [ ] Sistema de navegação entre telas (EXPO ROUTER)

- [ ] Tela de detalhes do produto (ao clicar em um item da lista)

- [ ] Tratamento de erros na requisição da API

- [ ] Filtro por categorias

- [ ] Tela de favoritos ou "lista de desejos"

- [ ] Tema escuro/claro 

- [ ]  Armazenamento local de dados

- [ ] Workflow

- [ ] Tela de detalhes ao clicar em um produto
      

## Protótipos de tela: 

https://www.figma.com/design/eT8yitBxfFd9F4buGciMga/Untitled?node-id=1-324&t=msGYTCIQAWKEQyeC-1

## Modelagem do banco

O aplicativo consome dados da Fake Store API. Abaixo está o diagrama de entidade-relacionamento representando a estrutura dos dados manipulados:

https://drive.google.com/file/d/1lXAbbA4FzE01QoedFyS9kq16gPI_PXmb/view?usp=sharing

## Planejamento de sprints: 

### Sprint 1 (Semana 1)
- [x] Definição do tema e funcionalidades do app

- [x] Criação do repositório e setup inicial com Expo

- [x] Criação do protótipo no Figma

- [x] Modelagem do banco baseada na API

- [x] Estrutura do README

### Sprint 2 (Semana 2)
- [x] Tela inicial com título e descrição

- [x] Implementar navegação entre telas

- [x] Exibição de cards com imagem, nome e preço

### Sprint 3 (Semana 3)
- [ ] Consumo da API de produtos eletrônicos

- [ ] Criar tela de detalhes do produto

- [ ] Adicionar loader e tratamento de erros

- [ ] Otimizar components

- [ ] Revisar design


### Sprint 4 (Semana 4)
- [ ] Implementar funcionalidades adicionais (ex: favoritos, busca)

- [ ] Melhorias visuais (tema escuro, animações)

- [ ] Testes finais e ajustes

## Atualizações desde o último checkpoint

- Implementado suporte completo ao Tailwind CSS via NativeWind para estilização declarativa.

- Ajustes na responsividade e alinhamento dos elementos com Tailwind nas telas de produtos e no componente Header.

- Integração com o contexto de autenticação (useAuth) para controle de login e logout.

## Vídeo

https://drive.google.com/file/d/1WtPue4vDarsIkjFyCQf5nuztCg4TmLGx/view?usp=sharing
