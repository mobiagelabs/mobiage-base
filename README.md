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
            iconSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADMCAYAAAA/IkzyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQwMkEzNzY1MUZDRjExRTg4QkVCRThDQTAyMDczOTM5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQwMkEzNzY2MUZDRjExRTg4QkVCRThDQTAyMDczOTM5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDAyQTM3NjMxRkNGMTFFODhCRUJFOENBMDIwNzM5MzkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDAyQTM3NjQxRkNGMTFFODhCRUJFOENBMDIwNzM5MzkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7qGJ44AAAOmUlEQVR42uydT2xc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',
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
    
   
