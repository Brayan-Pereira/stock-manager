# Gerenciador de Estoque - React.js

Uma aplicação SPA em react.js- "puro" que tem como principal objetivo, o gerenciamento de estoque.

A aplicação consiste em 5 Pages:

• Home-Page: Tela inicial apresenta um dashbord simples e funcional com duas partes:
     • Primeira-parte são componentes com informações em quantidade referente a  °diversidade de itens(leva em consideração a diferença entre as categorias de cada item),  °inventário total (a soma da quantidade de todos os itens em estoque), °itens recentes - função ainda em teste (consiste em analisar a quantidade de dias em que o item foi cadastrado, sendo este um intervalo de 5 dias), °itens acabando (analisa a quantidade de cada item em estoque e retorna a quantidade de itens que tem a quantidade de menor ou igual 10).
     • Segunda-parte: consiste em duas tabelas que integradas com os dois últimos componentes da primeira parte, que retornaram os itens adicionados recentemente e os itens que estão acabando.

• Itens-Page: tela acessada através da barra de navegação que traz todos os itens em estoque, com os dados de índice, nome, quantidade e categoria; Além de cada item na tabela possuir seus próprios botões de ação, sendo elas: VER, ATUALIZAR, EXCLUIR. A Itens-Page também possui uma barra de navegação própria onde é possível acessar a °NewItem-Page, que permite a criação de novos itens, que serão salvos no LocalStorage.

• Item-Page: página acessada através de qualquer botão " ver ", presente em qualquer tabela da aplicação. Permite ver o dados específicos de cada item do estoque.

• UpdateItem-Page: assim com a anterior, pode ser acessada através de qualquer botão "atualizar", consiste em um formulário onde se pode atualizar determinados dados de um item.