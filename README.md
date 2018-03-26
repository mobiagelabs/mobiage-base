# Mobiage-base

Módulo quem tem como objetivo servir de base para dashboards desenvolvidos para a Mobiage.
O *mobiage-base* é composto por 3 partes principais:
- Sidemenu
- Topbar
- Dashboard
************
Todo componente tem o seu próprio objeto de configuração e pode funcionar independente do restante do módulo se a opção `standalone: true` for adicionada.

## Side Menu
Objeto de Configuração de Exemplo:
```javascript
const config = {
  theme: 'theme1',
  standalone: false,
  structure: [{
    type: 'category',
    label: 'Categoria',
    children: [
      {
        type: 'sub-category',
        label: 'Sub-Categoria',
        children: [
          {
            type: 'btn',
            label: 'Item comum',
            link: 'http://www.google.com',
            hotkey: 'i'
          },
          {
            type: 'btn',
            label: 'Texto que quebra em duas linhas',
            link: '#'
          },
          {
            type: 'btn',
            iconSrc: 'fontawesome',
            icon: 'fas fa-heart',
            label: 'Font Awesome',
            link: '#'
          },
          {
            type: 'btn',
            iconSrc: 'material',
            icon: 'movie',
            label: 'Material Design',
            link: '#'
          },
          {
            type: 'btn',
            iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
            label: 'Custom Icon',
            link: '#'
          },
          {
            type: 'btn',
            iconSrc: 'data:image/png;base64,iVBORw0[..]KGgoAAA=',
            label: 'Custom Base 64 Icon',
            link: '#'
          },
          {
            type: 'btn',
            iconSrc: 'fontawesome',
            icon: 'fas fa-ambulance',
            iconSize: '25',
            label: 'Custom Size Icon FA',
            link: '#'
          },
          {
            type: 'btn',
            iconSrc: 'material',
            icon: 'weekend',
            iconSize: '25',
            label: 'Custom Size Icon MD',
            link: '#'
          }
        ]
      }
    ]
  }],
  quickMenu: {
    enabled: true,
    buttonText: 'Cadastro',
    hotkey: 'c',
    links: [{
      label: 'Clientes',
      iconSrc: 'fontawesome',
      icon: 'far fa-user',
      link: '#clientes'
    }, {
      label: 'Produtos',
      iconSrc: 'fontawesome',
      icon: 'far fa-sticky-note',
      link: '#produtos',
      hotkey: 'p'
    }]
  }
};
```
##### O menu lateral do mobiage-base recebe um objeto de configuração com os seguintes atributos:
- `string`:`theme`: Define o tema que será utilizado, consulte lista de temas disponveis.

- `boolean`:`standalone`: Altera entre configurações para uso somente do sidemenu ou de todo o módulo.

- `array`:`structure`: Define a estrutura de links do menu lateral, recebendo uma array de objetos. 
  Cada objeto define um item do menu lateral, cada item tem os seguintes atributos:
  - `string`:`type`: define o tipo de item, pode ser um entre `'category'`, `'sub-category'`, `'btn'`.
  - `string`:`label`: define o texto do item, nos itens do tipo `'category'` ou `'sub-category'` esse atributo define o título.
  - `array`:`children`: define os itens que estarão abaixo deste na hiearquia do menu, apenas o item  do tipo `'btn'` não aceita este atributo.
  ************
  **Atributos específicos para itens do tipo `'btn'`:**
  - `string`:`link`: Define o destino do link do botão.
  - `string`:`iconSrc`: Define a origem do ícone, pode ser uma das seguintes opções: 
    1. Link direto para imagem do ícone (ou link base64)
    2. `'material'`
    3. `'fontawesome'`
  - `string`:`icon`: Caso seja utilizado os valores `'material'` ou `'fontawesome'` no iconSrc, você deve informar neste atributo os seletores de classes do ícone (no caso do fontawesome) ou o nome (no caso do material design) que você deseja utilizar.
  por exemplo: 
  Para utilizar o ícone do android usando o *fontawesome*, precisamos passar o valor: `fab fa-android`. 
  Para utilizar o mesmo ícone, mas com a fonte do material design, precisamos passar o valor: `'android'`.
  - `string`:`iconSize:`: Define um tamanho personalizado para o ícone.
  
- `object`:`quickMenu`: Configurações do menu rápido:
  - `boolean`:`enabled`: Ativa ou desativa o menu rápido.
  - `string`:`buttonText`: Define o texto do botão.
  - `string`:`hotkey`: Atalho de teclado para abrir o menu rápido.
  - `array`:`links`: Array de objetos para configurar os links do menu rápido.
  
    **Cada link é configurado por um objeto com os mesmos atributos dos itens do tipo `'btn'` acima.**

************
    
   
