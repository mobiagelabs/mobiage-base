# mobiage-base 
![awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)
![topage](https://img.shields.io/badge/top-age-a436e3.svg?longCache=true&style=flat)

Módulo que tem como objetivo servir de base para dashboards desenvolvidos pela Mobiage.
O *mobiage-base* é composto pelos seguintes componentes:
- Base (`<mbg-base>`)
- Topbar (`<mb-topbar>`)
- Container (`<mb-container>`) e (`<mb-content>`)
- Sidemenu (`<mb-sidemenu>`)
- PageLoader (`<mb-pageloader>`)
- TopNotifications (`<mb-notifications>`)

## Implementando o mobiage-base
Este módulo é privado, faça o login no npm com o comando `npm login` com uma conta autorizada e instale:
```shellscript
yarn add @mobiage/base
```
ou
```shellscript
npm i --save @mobiage/base
```
Faça o import do módulo com:
```javascript
/* Import do css */
import '@mobiage/base/dist/mobiage-base.min.css'
/* Import do javascript */
import '@mobiage/base/dist/mobiage-base.min'
```
Declare a dependência na sua aplicação:
```javascript
/* O módulo está identificado por 'mbg.base' */
angular.module('app', ['mbg.base'])
```
************
Os componentes do módulo foram desenvolvidos para serem utilizados em conjunto. Portanto, uma instalação típica do *mobiage-base* deverá se parecer com:
```html
<mbg-base config="configBase">
  <mb-topbar config="configTopbar"></mb-topbar>
  <mb-container>
    <mb-sidemenu config="configMenu"></mb-sidemenu>
    <mb-content>
      <!-- Conteúdo do sistema -->
    </mb-content>
  </mb-container>
  <mb-pageloader></mb-pageloader>
</mbg-base>
<mb-notifications></mb-notifications>
```
Inicialmente, é necessário configurar qual tema a base irá utilizar.
Para isso, passe um objeto de configuração com o atributo `theme` para a binding `config` no componente base.
Por exemplo, para definir que utilizaremos o *theme1*, precisamos configurar o objeto:
```javascript
$scope.configBase = {
  theme: 'theme1'
}
```
E depois passamos esse objeto para o base:
```html
<mbg-base config="configBase">
```
## Objeto de configuração do componente base (`<mbg-base>`)
| Tipo    | Nome    | Descrição   |
|------   | ------  | ----------  |
|`string` |`theme`  | Define o tema que será utilizado, consulte lista de temas disponveis no arquivo `'src/themes/themes.style.scss'`. |

************
O mesmo ocorre com os outros componentes. Portanto:
************
## Objeto de configuração do componente Topbar (`<mb-topbar>`)
Exemplo:
```javascript
$scope.configTopbar = {
  logo: 'assets/img/logo.png',
  logoActionType: 'state',
  logoAction: 'app.home',
  user: {
    name: 'Amália Fernandes',
    avatar: 'assets/img/perfil.png',
    links: [
      {
        label: 'Testar Loader',
        iconSrc: 'fontawesome',
        icon: 'fas fa-exchange-alt',
        iconSize: '22',
        actionType: 'function',
        action: () => {
          console.log('Ação personalizada')
        }
      },
      {
        label: 'Trocar de Conta',
        iconSrc: 'fontawesome',
        icon: 'fas fa-exchange-alt',
        iconSize: '22',
        actionType: 'internal',
        action: 'changeAccount'
      },
      {
        label: 'Sair',
        iconSrc: 'fontawesome',
        icon: 'fas fa-sign-out-alt',
        iconSize: '22',
        actionType: 'link',
        action: '#logout'
      }
    ],
    actualOrganization: {
      name: 'Spotify',
      subTitle: 'Spotify Limitada ME.',
      avatar: 'assets/img/logo_company.png',
      editAction: () => { 
        console.log('EDITAR');
      },
      editActionType: 'function',
      info: [
        { title: 'Razão Social', text: 'Spotify Stream Digital World' },
        { title: 'Nome Fantasia', text: 'Spotify Brasil' },
        { title: 'CNPJ', text: '910293.28201.1234' },
        { title: 'Inscrição Social', text: '910293.29201.1234' }
      ]
    },
    otherOrganizations: [
      {
        name: 'Apple Inc',
        logo: 'https://hcil.umd.edu/wp-content/uploads/2015/12/Apple-logo.png'
      }, {
        name: 'Dell',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg'
      }
    ],
    changeOrganizationAction: (organizationSelected) => {
      console.log(organizationSelected);
    }
  },
  search: {
    indexFields: [{ name: 'name' }],
    data: [
      {
        type: 'static',
        data: [
          {
            type: 'Clientes',
            name: 'Alfredo Peres',
            empresa: 'Mobiage',
            cpf: '029.202.594-54',
            action: '#clientes/029.202.594-54',
            actionType: 'link'
          },
          {
            type: 'Clientes',
            name: 'Thiago Martins',
            cpf: '208.290.390-45',
            actionType: 'function',
            action: () => {
              console.log('Thiago Martins');
            }
          }
        ]
      },
      {
        type: 'static',
        data: 'sideMenuLinks'
      }
    ]
  }
};
```
### A barra do topo recebe um objeto de configuração que pode ter os atributos:
| Tipo    | Nome    | Descrição   |
|---------|---------|-------------|
|`string`|`logo`| Link para a imagem que será utilizada como logo no topo |
|`string` | `logoActionType` | Tipo de ação que será feita ao clicar na imagem da logo, pode ser um entre: `'link'`, `'function'` ou `'state'`. |
|`string` ou `function`|`logoAction`| Define a ação da imagem da logo, o conteúdo deste atributo depende do tipo de ação que você escolheu no atributo `logoActionType`: <br> 1. `'link'`: String com uma url válida; <br> 2. `'state'`: String com o nome de um state (do ui-router) válido para transição; <br> 3. `'function'`: Função que será executada ao clicar no botão; |
|`object`|`user`| [Objeto de configuração](#user) do campo de usuário da barra do topo. |
|`object`|`search`| [Objeto de configuração](#search) do campo de busca da barra do topo. |

<div id="user">

### Atributos do objeto de configuração do `user`:
| Tipo    | Nome    | Descrição   |
|---------|---------|-------------|
|`string` | `name`| String com o nome do usuário. |
|`string` | `avatar`| Url para a imagem utilizada como avatar do usuário, mantenha undefined quando não houver avatar. |
|`array<Object>` | `links`| Array de Objetos que definirão os botões de ação do menu do usuário, esses objetos têm exatamente os mesmos atributos que o [botão do menu lateral](#btn), com um *actionType* adicional. Para realizar métodos internos do *mobiage-base* (como listar outras organizações), você deve usar `actionType:'internal'` e então definir o atributo `action` com uma ação interna: <br> 1. `'changeAccount'` |
|`Object` | `actualOrganization`| [Objeto de configuração](#actualOrg) para definir os dados da organização que estiver sendo usada na sessão |
|`array<Object>` | `otherOrganizations`| Array de [Objetos](#otherOrg) de outras empresas para tornar possível a listagem e troca de organização |
|`function(selectedOrganization)` | `changeOrganizationAction`| Função responsável por realizar a troca de organização em sua aplicação. Essa função recebe como parâmetro a organização selecionada. |

</div>

<div id="actualOrg">

### Atributos do objeto de configuração do `user.actualOrganization`:
| Tipo    | Nome    | Descrição   |
|---------|---------|-------------|
|`string` | `name`| String com o nome fantasia da organização. |
|`string`|`subTitle`| Texto que fica acima do nome da organização, geralmente a razão social é usada |
|`string`|`avatar`| Url para a imagem utilizada como avatar da organização, mantenha undefined quando não houver avatar. |
|`string` | `editActionType` | Tipo de ação que será feita ao clicar no botão de edição de organização, pode ser um entre: `'link'`, `'function'` ou `'state'`. |
|`string` ou `function`|`editAction`| Define a ação do botão de edição de organização, o conteúdo deste atributo depende do tipo de ação que você escolheu no atributo `editActionType`: <br> 1. `'link'`: String com uma url válida; <br> 2. `'state'`: String com o nome de um state (do ui-router) válido para transição; <br> 3. `'function'`: Função que será executada ao clicar no botão; |
|`array<Object>`|`info`| Array de [Objetos](#infoAcOrg) para exibição de informações sobre a empresa no menu da empresa.

</div>

<div id="infoAcOrg">

### Atributos dos objetos da array de objetos `user.actualOrganization.info`:
| Tipo    | Nome    | Descrição   |
|---------|---------|-------------|
|`string` | `title`| String com o título da informação á ser exibida. |
|`string` | `text`| String com o texto da informação. |

</div>

<div id="otherOrg">

### Atributos dos objetos da array de objetos `user.otherOrganizations`:
Apenas dois atributos são necessários. Você pode colocar mais informações no objeto como o id da organização, por exemplo, para uso posterior na `changeOrganizationAction`.

| Tipo    | Nome    | Descrição   |
|---------|---------|-------------|
|`string` | `name`| String com o nome fantasia da organização. |
|`string`|`avatar`| Url para a imagem utilizada como avatar da organização, mantenha undefined quando não houver avatar. |

</div>

<div id="search">

### Atributos do objeto de configuração do `search`:
O search precisa de dois atributos, um com informações á serem buscadas e outro com os índices da busca

| Tipo    | Nome    | Descrição   |
|---------|---------|-------------|
|`array<Object>` | `data`| Array de [objetos](#searchData) com os dados á serem buscados |
|`array<Object>` | `indexFields`| Array de [objetos](#indexFields) com os índices que serão utilizados na busca. |

</div>

<div id="searchData">

W.I.P BEGINS

### Atributos dos objetos da array de objetos do `search.data`:

| Tipo    | Nome    | Descrição   |
|---------|---------|-------------|
|`string` | `type` | tipo |
|`string` | `data` | tipo |

W.I.P ENDS

</div>

<div id="indexFields">

### Atributos dos objetos da array de objetos `search.indexFields`:

| Tipo    | Nome    | Descrição   |
|---------|---------|-------------|
|`string` | `name` | Único atributo obrigatório, é o nome que será usado ao procurar o índice nas informações á serem buscadas. |

</div>

************
## Objeto de configuração do componente Side Menu (`<mb-sidemenu>`)
Exemplo:
```javascript
const config = {
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
            actionType: 'link',
            action: 'http://www.google.com',
          },
          {
            type: 'btn',
            label: 'Texto que quebra em duas linhas',
            actionType: 'state',
            action: 'app.home'
          },
          {
            type: 'btn',
            iconSrc: 'fontawesome',
            icon: 'fas fa-heart',
            label: 'Font Awesome',
            actionType: 'function',
            action: () => {
              console.log('Olá mundo!')
            }
          },
          {
            type: 'btn',
            iconSrc: 'material',
            icon: 'movie',
            label: 'Material Design',
            actionType: 'link',
            action: '#'
          },
          {
            type: 'btn',
            iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
            label: 'Custom Icon',
            actionType: 'link',
            action: '#'
          },
          {
            type: 'btn',
            iconSrc: 'data:image/png;base64,iVBORw0[..]KGgoAAA=',
            label: 'Custom Base 64 Icon',
            actionType: 'link',
            action: '#'
          },
          {
            type: 'btn',
            iconSrc: 'fontawesome',
            icon: 'fas fa-ambulance',
            iconSize: '25',
            label: 'Custom Size Icon FA',
            actionType: 'link',
            action: '#'
          },
          {
            type: 'btn',
            iconSrc: 'material',
            icon: 'weekend',
            iconSize: '25',
            label: 'Custom Size Icon MD',
            actionType: 'link',
            action: '#'
          }
        ]
      }
    ]
  }],
  quickMenu: {
    enabled: true,
    buttonText: 'Cadastro',
    links: [
      {
        label: 'Clientes',
        iconSrc: 'fontawesome',
        icon: 'far fa-user',
        actionType: 'link',
        action: '#'
      },
      {
        label: 'Produtos',
        iconSrc: 'fontawesome',
        icon: 'far fa-sticky-note',
        actionType: 'link',
        action: '#'
      }
    ]
  }
};
```
************
## O menu lateral recebe um objeto de configuração que pode ter os atributos:
| Tipo    | Nome    | Descrição   |
|---------|---------|-------------|
|`array <Object>`| `structure`| Define a estrutura de links do menu lateral, recebendo uma array de objetos. Cada objeto define um item do menu lateral. |
|`object`|`quickMenu`| Objeto de configurações do menu rápido. |

************

### Cada item do atributo `structure` tem os seguintes atributos: ##

| Tipo    | Nome    | Descrição   |
|---------|---------|-------------|
|`string`|`type`| define o tipo de item, pode ser um entre `'category'`, `'sub-category'`, `'btn'`. |
|`string`|`label`| define o texto do item, nos itens do tipo `'category'` ou `'sub-category'` esse atributo define o título. |
|`array <Object>`|`children`| define os itens que estarão abaixo deste na hiearquia do menu, apenas o item  do tipo `'btn'` não aceita este atributo. |

<div id='btn'>

#### Atributos específicos para itens do tipo `'btn'`:

| Tipo    | Nome    | Descrição   |
|---------|---------|-------------|
|`string`|`iconSrc`| Define a origem do ícone, pode ser uma das seguintes opções: <br> 1. Link direto para imagem do ícone (ou string base64) <br> 2.`'material'` <br> 3.`'fontawesome'` |
|`string`|`icon`| Caso seja utilizado os valores `'material'` ou `'fontawesome'` no iconSrc, você deve informar neste atributo os seletores de classes do ícone (no caso do fontawesome) ou o nome do ícone (no caso do material design) que você deseja utilizar. <br> **Por exemplo**: Para utilizar o ícone do android usando o *fontawesome*, precisamos passar o valor: `'fab fa-android'`. Para utilizar o mesmo ícone, mas com a fonte do *material design*, precisamos passar o valor: `'android'`. | 
|`string`|`iconSize`| Define um tamanho personalizado para o ícone. |
|`string`|`actionType`| Define o tipo de ação do botão, pode ser um entre: `'link'`, `'function'` ou `'state'`. |
|`string` ou `function`|`action`| Define a ação do botão, o conteúdo deste atributo depende do tipo de ação que você escolheu no atributo `actionType`: <br> 1. `link`: String com uma url válida; <br> 2. `state`: String com o nome de um state válido para transição. <br> 3. `function`: Função que será executada ao clicar no botão; |

************

</div>

### Atributos do objeto de configuração do `quickMenu`:

| Tipo    | Nome    | Descrição   |
|------   | ------  | ----------  |
|`boolean`|`enabled`| Ativa ou desativa o menu rápido; |
|`string`|`buttonText`| Define o texto do botão; |
|`array <Object>`|`links`| Array de objetos para configurar os links do menu rápido. (**Cada link é configurado por um objeto com os mesmos atributos dos itens do tipo `'btn'` acima**). |
