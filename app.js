angular.module('app', ['mbg.base', 'ui.router'])
	.controller('appController', (baseNotificationService, $scope, MbgNotification, MbgPageLoader, $timeout, MbgSideContent, CashierService, $state, environmentService) => {

		environmentService.setIsDemo(false)

		baseNotificationService.setNotifications([
			{
				time: `17 de abril 2019`,
				icon: `far fa-envelope`,
				title: `Nova transferencia`,
				body: `<b>Miranda SDK</b> te enviou <b>18</b> itens`,
				actions: [
					{
						label: `Conferir`,
					},
					{
						label: `Aceitar`
					},
					{
						label: `Recusar`
					}
				],
				onClick: (notification, action) => {
					console.log(notification, action)
				}
			},
			{
				time: `17 de abril 2019`,
				icon: `far fa-envelope`,
				title: `Uma nova transferencia`,
				body: `Recebemos 5 itens da marisa filial 05`,
				onClick: (notification) => {
					console.log(`foi`, notification)
				}
			},
			{
				time: `17 de abril 2019`,
				icon: `far fa-envelope`,
				title: `Uma nova transferencia`,
				body: `Recebemos 5 itens da marisa filial 05`,
				onClick: (notification) => {
					console.log(`foi`, notification)
				}
			}
		])

		$scope.configBase = {
			theme: 'cssVariable'
		};

		const logoutOption = {
			label: 'Sair',
			iconSrc: 'fontawesome',
			icon: 'fas fa-sign-out-alt',
			iconSize: '22',
			actionType: 'link',
			action: '#logout'
		};

		$scope.configTopbar = {
			logo: 'assets/img/logo.png',
			logoActionType: 'state',
			logoAction: 'app.teste',
			usersBirthday: {
				countShow: () => true,
				getUsers: async () => {
					return [{}, {}]
				},
				onClick: (users) => {
					console.log(users)
				}
			},
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
							$timeout(() => {
								MbgPageLoader.createPromise();

								$timeout(() => {
									MbgPageLoader.endPromise();
								}, 3000000);
							}, 10);
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
						label: 'Ir para o Finance',
						iconSrc: 'fontawesome',
						icon: 'fas fa-suitcase',
						iconSize: '22',
						actionType: 'link',
						action: '#trocarconta'
					},
					logoutOption
				],
				actualOrganization: {
					name: 'Spotify',
					subTitle: 'Spotify Limitada ME.',
					avatar: 'assets/img/logo_company.png',
					editAction: () => {
						console.log('EDITAR');
					},
					inviteAction: 'app.home',
					editActionType: 'function',
					inviteActionType: 'state',
					info: [
						{ title: 'Razão Social', text: 'Spotify Stream Digital World' },
						{ title: 'Nome Fantasia', text: 'Spotify Brasil' }
					],
					links: [
						{
							label: 'Ir para o Finance',
							iconSrc: 'fontawesome',
							icon: 'fas fa-suitcase',
							iconSize: '22',
							actionType: 'link',
							action: '#trocarconta'
						},
						logoutOption
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
								action: () => {
									// console.log('Thiago Martins');
								},
								actionType: 'function'
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

		$scope.teste = () => {
			CashierService.updateCashier({
				open: true,
				date: '12/07/18',
				name: 'PDV do Luis',
				openState: (() => {
					$state.go('app.teste');
				}),
				closeState: (() => {
					$state.go('app.home');
				})
			});
		};

		$timeout(() => {
			$scope.configMenu.keys = ['CRUD_NOTIFICATION', 'Tributação']
			console.log('ATUALIZOU')
		}, 5000)

		$scope.configMenu = {
			keys: ['CRUD_NOTIFICATION', 'CAIXA', 'Tributação'],
			quickMenu: {
				enabled: true,
				buttonText: 'Cadastro',
				links: [{
					label: 'Clientes',
					iconSrc: 'fontawesome',
					icon: 'far fa-user',
					action: '#clientes',
					actionType: 'link'
				}, {
					label: 'Produtos',
					iconSrc: 'fontawesome',
					icon: 'far fa-sticky-note',
					action: '#produtos',
					actionType: 'link'
				}]
			},
			structure: [
				{
					type: 'sub-category',
					iconSrc: 'fontawesome',
					icon: 'fas fa-ambulance',
					label: 'Estoque',
					showItens: 2,
					children: [
						{
							type: 'btn',
							label: 'Notificação',
							key: 'CRUD_NOTIFICATION',
							tag: {
								label: 'Novo',
								color: '#8600b8'
							},
							actionType: 'function',
							action: () => {
								MbgNotification.openNotification({
									type: 'info',
									variation: 'fixed',
									message: 'Olá Mundo',
									duration: 4000
								});
							}
						},
						{
							type: 'btn',
							label: 'Notificação Float',
							actionType: 'function',
							action: () => {
								MbgNotification.openNotification({
									type: 'info',
									variation: 'float',
									message: 'Olá Mundo',
									duration: 4000
								});
							}
						},
						{
							type: 'btn',
							label: 'Notificação Toast',
							actionType: 'function',
							action: () => {
								MbgNotification.openNotification({
									type: 'info',
									variation: 'toast',
									message: 'Olá Mundo',
									duration: 4000
								});
							}
						},
						{
							type: 'btn',
							label: 'Notificação',
							actionType: 'function',
							action: () => {
								window.servico_de_correios_da_topage = 1;
								// window.servico_de_correios_da_topage = window.servico_de_correios_da_topage || 0;
								switch (window.servico_de_correios_da_topage) {
									case 0: {
										MbgNotification.openNotification({
											type: 'info',
											variation: 'fixed',
											duration: 'fixed',
											text: 'Olá Mundo',
											actionButton: true,
											actionText: 'fechar',
											action: (teste) => {
												MbgNotification.closeFixedNotif(teste.id);
											}
										});
										break;
									}
									case 1: {
										MbgNotification.openNotification({
											type: 'warn',
											variation: 'fixed',
											duration: 99999999999,
											actionText: 'Ir para retransmissão',
											text: 'É necessário realizar a retransmissão.',
											actionButton: true
										});
										break;
									}
									case 2: {
										MbgNotification.openNotification({
											type: 'error',
											variation: 'fixed',
											duration: 4000,
											text: 'Olá Mundo'
										});
										break;
									}
									case 3: {
										MbgNotification.openNotification({
											type: 'success',
											variation: 'float',
											duration: 6000,
											text: 'Olá Mundo'
										});
										break;
									}
									default: {
										MbgNotification.openNotification({
											type: 'info',
											variation: 'float',
											message: 'Olá Mundo',
											duration: 4000
										});
									}
								}
								window.servico_de_correios_da_topage += 1;
							}
						},
						{
							type: 'btn', label: 'Teste', actionType: 'state', action: 'app.teste'
						},
						{
							type: 'btn', label: 'Footer', actionType: 'state', action: 'app.footer'
						},
						{
							type: 'btn', label: 'Promoções', actionType: 'link', action: '#5'
						},
						{
							type: 'btn', label: 'Troca', actionType: 'link', action: '#6'
						},
						{
							type: 'btn', label: 'Consignado', actionType: 'link', action: '#7'
						},
						{
							type: 'btn', label: 'Catálogo', actionType: 'link', action: '#8'
						},
						{
							type: 'btn', label: 'Consulta', actionType: 'link', action: '#9'
						}
					]
				},
				{
					type: 'category',
					label: 'Menu',
					children: [
						{
							type: 'sub-category',
							label: 'Financeiro',
							children: [
								{
									type: 'btn', key: 'CAIXA', label: 'Conta caixa', actionType: 'link', action: '#10'
								},
								{
									type: 'btn', label: 'Abertura PDV', actionType: 'link', action: '#11'
								},
								{
									type: 'btn', label: 'Fechamento', actionType: 'link', action: '#12'
								},
								{
									type: 'btn', label: 'Pagar', actionType: 'link', action: '#13'
								},
								{
									type: 'btn', label: 'Receber', actionType: 'link', action: '#14'
								}
							]
						},
						{
							type: 'sub-category',
							label: 'Fiscal',
							children: [
								{
									type: 'btn', key: 'Tributação', label: 'Tributação', actionType: 'link', action: '#15'
								},
								{
									type: 'btn', key: 'Notas', label: 'Notas', actionType: 'link', action: '#16'
								}
							]
						}
					]
				},
				{
					type: 'category',
					label: '',
				},
				{
					type: 'html',
					html:
						`<div class="suporte">
							<i class="far fa-question-circle"></i><br>
							<strong> Suporte 24hrs </strong>
							<a href="mailto:contato@kigi.com.br"> contato@kigi.com.br </a></br>
							<a href="tel:08800 989 0803"> 08800 989 0803 </a>
						</div>
						`
				},
				{
					type: 'html',
					html: '<div class="versao">1.21.1-SNAPSHOT</div>'
				},
				{
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
									action: 'http://www.google.com',
									actionType: 'link'
								},
								{
									type: 'btn',
									label: 'Texto que quebra em duas linhas',
									action: '#',
									actionType: 'link'
								},
								{
									type: 'btn',
									iconSrc: 'fontawesome',
									icon: 'fas fa-heart',
									label: 'Font Awesome',
									action: '#',
									actionType: 'link'
								},
								{
									type: 'btn',
									iconSrc: 'material',
									icon: 'movie',
									label: 'Material Design',
									action: '#',
									actionType: 'link'
								},
								{
									type: 'btn',
									iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
									label: 'Custom Icon',
									action: '#',
									actionType: 'link'
								},
								{
									type: 'btn',
									iconSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADMCAYAAAA/IkzyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQwMkEzNzY1MUZDRjExRTg4QkVCRThDQTAyMDczOTM5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQwMkEzNzY2MUZDRjExRTg4QkVCRThDQTAyMDczOTM5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDAyQTM3NjMxRkNGMTFFODhCRUJFOENBMDIwNzM5MzkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDAyQTM3NjQxRkNGMTFFODhCRUJFOENBMDIwNzM5MzkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7qGJ44AAAOmUlEQVR42uydT2xc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',
									label: 'Custom Base 64 Icon',
									action: '#',
									actionType: 'link'
								},
								{
									type: 'btn',
									iconSrc: 'fontawesome',
									icon: 'fas fa-ambulance',
									iconSize: '25',
									label: 'Custom Size Icon FA',
									action: '#',
									actionType: 'link'
								},
								{
									type: 'btn',
									iconSrc: 'material',
									icon: 'weekend',
									iconSize: '25',
									label: 'Custom Size Icon MD',
									action: '#',
									actionType: 'link'
								}
							]
						}
					]
				}
			]
		};
	})
	.run(($state, $timeout, MbgSideContent, CashierService) => {
		$state.go('app.components');
		$timeout(() => {
			CashierService.updateCashier({
				open: false,
				date: '12/07/18',
				openState: (() => {
					$state.go('app.teste');
				}),
				closeState: (() => {
					$state.go('app.home');
				})
			});
		}, 2000);
		MbgSideContent.add({
			iconColor: 'white',
			btnBgColor: '#d6df24',
			onOpen: () => {
				console.log('Abriu');
			},
			onClose: () => {
				console.log('Fechou');
			}
		});
		MbgSideContent.add({
			template: '<h3> Example Template 2 </h3>',
			iconColor: 'white',
			onOpen: () => {
				console.log('Abriu');
			},
			onClose: () => {
				console.log('Fechou');
			},
			bgHide: false,
		});
	})
	.config(($stateProvider) => {
		$stateProvider.state({
			name: 'app',
			abstract: true,
			template: `
				<mbg-base config="configBase">
					<mb-topbar config="configTopbar"></mb-topbar>
					<mb-container>
						<mb-sidemenu config="configMenu"></mb-sidemenu>
						<mb-content>
							<ui-view></ui-view>
						</mb-content>
					</mb-container>
					<mb-side-content></mb-side-content>
					<mb-pageloader></mb-pageloader>
				</mbg-base>
				<mb-notifications></mb-notifications>
			`
		});
		$stateProvider.state({
			name: 'app.home',
			url: '/',
			template: `
				
			`
		});
		$stateProvider.state({
			name: 'app.components',
			url: '/components',
			controller: function ($scope) {
			},
			template: ` <br><br><br><br>
			<form name="myForm" style="padding: 0 54px;">
				<div class="row">
				
					<div class="col-md-3">
						<label>Money: {{ valor }}</label>				
						<mb-input-money 
							ng-model="valor"
							ng-required="true"
							placeholder="Digite o valor total">
						</mb-input-money>
					</div>

					<div class="col-md-3">
						<label>CPF: {{ cpf }}</label>
						<mb-input-cpf 
							ng-model="cpf"
							ng-required="true"
							placeholder="Digite o número do CPF">
						</mb-input-cpf>
					</div>

					<div class="col-md-3">
						<label>CNPJ: {{ cnpj }}</label>
						<mb-input-cnpj 
							ng-model="cnpj"
							ng-required="true"
							placeholder="Digite o número do CNPJ">
						</mb-input-cnpj>
					</div>

					<div class="col-md-3">
						<label>CPF/CNPJ: {{ cpfcnpj }}</label>
						<mb-input-cpfcnpj 
							ng-model="cpfcnpj"
							ng-required="true"
							placeholder="Digite o número do CPF ou CNPJ">
						</mb-input-cpfcnpj>
					</div>

				</div>

				<div class="row" style="margin-top: 34px;">
				
					<div class="col-md-3">
						<label>Telefone: {{ phone }}</label>				
						<mb-input-phone 
							ng-model="phone"
							ng-required="true"
							placeholder="Digite seu número de telefone">
						</mb-input-phone>
					</div>

					<div class="col-md-3">
						<label>Nome: {{ name }}</label>				
						<mb-input-name 
							ng-model="name"
							ng-init="name = 'block'"
							ng-required="true"
							placeholder="Digite seu nome completo">
						</mb-input-name>
					</div>

					<div class="col-md-3">
						<label>Texto: {{ text }}</label>

						<mb-input-text 
							ng-model="text"
							ng-required="true"
							ng-disabled="name === 'Block'"
							placeholder="Digite qualquer texto">
						</mb-input-text>

					</div>

				</div>
			</form>
			`
		});
		$stateProvider.state({
			name: 'app.teste',
			url: '/teste',
			template: `
			<button ng-click="teste()">clica ae</button>
				<div class="conteudoTeste">TESTE</div>
				<div class="conteudoTeste"></div>
				<div class="conteudoTeste"></div>
				<div class="conteudoTeste"></div>
				<div class="conteudoTeste"></div>
			`
		});
		$stateProvider.state({
			name: 'app.footer',
			url: '/footer',
			template: `
				<div class="conteudoTeste">Footer</div>
				<mb-footer></mb-footer>
			`
		});
	});
