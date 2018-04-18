const controller = function ($scope, $timeout, sideMenuService) {
	$scope.searchValue = '';
	$scope.data = [];
	$scope.result = [];

	// Essa função foca o input ao clicar no search
	$scope.focusInput = () => {
		const element = document.getElementById('mb-tsi-input');
		element.focus();
	};

	$scope.blurInput = () => {
		$scope.autoCompleteActive = false;
		$timeout(() => {
			$scope.searchValue = '';
			$scope.autoCompleteHide = true;
		}, 500);
	};

	const makeAutocompleteObject = array => {
		const types = [];
		const autocomplete = [];

		/* Separa os tipos: */
		array.forEach(element => {
			if (types.indexOf(element.type) === -1) {
				types.push(element.type);
			}
		});

		/* Funções auxiliares */
		const transformElement = element => {
			const tmpElement = element;
			return tmpElement;
		};

		const allElementsOfType = type => {
			const elements = [];
			array.forEach(element => {
				if (element.type === type) {
					elements.push(transformElement(element));
				}
			});
			// TO-DO (Limitar resultados parando o algoritmo ao chegar no limite de resultados)
			return elements.slice(0, 5);
		};

		/* Para cada tipo, faz um elemento no array */
		types.forEach(type => {
			const children = allElementsOfType(type);
			let matchesCount = 0;
			children.forEach(element => { matchesCount += element.matchesCount; });
			autocomplete.push({ type, children, matchesCount });
		});
		return autocomplete;
	};

	const allOcurrencesOf = (index, string, ocurrence) => {
		const result = { index, matches: [] };
		let lastMatch = 0;
		for (let i = 0; i < string.length; i += 1) {
			if (i >= lastMatch) {
				if (string.substring(i, i + ocurrence.length).toLowerCase() === ocurrence.toLowerCase()) {
					result.matches.push([i, i + ocurrence.length]);
					lastMatch = i + ocurrence.length;
				}
			}
		}
		return result;
	};

	const search = (searchParam, fixedData, indexes) => {
		/* Retira espaços da search string */
		const searchString = searchParam.trim();

		/* Caso a search string seja maior que zero */
		if (searchString.length > 0) {
			const result = [];
			/* Para cada item do conteudo */
			$scope.data.forEach(element => {
				const elementTmp = element;
				elementTmp.matches = [];
				elementTmp.matchesCount = 0;
				/* Busca por cada tipo de dado indexável */
				indexes.forEach(index => {
					/* Caso tenha o dado indexável */
					if (index.name in element) {
						const string = element[index.name].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
						const tmpSearchString = searchString.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
						/* Procura pela string digitada */
						const searchAux = string.search(tmpSearchString);
						if (searchAux !== -1) {
							const allOcurrences = allOcurrencesOf(index, string, tmpSearchString);
							elementTmp.matchesCount += allOcurrences.matches.length;
							elementTmp.matches.push(allOcurrences);
						}
					}
				});
				if (elementTmp.matches.length > 0) {
					result.push(elementTmp);
				}
			});
			$scope.result = makeAutocompleteObject(result);
		}
	};

	$scope.onChangeSearch = text => {
		/* Não considera espaços */
		const inputText = text.trim();

		if (inputText.length > 0) {
			$scope.autoCompleteHide = false;
			$timeout(() => {
				$scope.autoCompleteActive = true;
			}, 50);
			search(text, $scope.data, $scope.indexFields);
			$scope.searchValue = text;
		} else {
			$scope.autoCompleteActive = false;
			$scope.autoCompleteHide = true;
		}
	};

	const extractMenuLinksFromConfig = config => {
		const links = [];

		const prepareLink = link => {
			if ((link.type === 'category' || link.type === 'sub-category') && link.children !== undefined && link.children.length > 0) {
				link.children.forEach(element => {
					prepareLink(element);
				});
			} else if (link.type === undefined || link.type === 'btn') {
				links.push({
					type: 'Menu',
					name: link.label,
					action: link.action,
					actionType: link.actionType
				});
			}
		};

		if (config.quickMenu !== undefined && config.quickMenu.links !== undefined && config.quickMenu.links.length > 0) {
			config.quickMenu.links.forEach(element => {
				prepareLink(element);
			});
		}
		if (config.structure !== undefined && config.structure.length > 0) {
			config.structure.forEach(element => {
				prepareLink(element);
			});
		}
		return links;
	};

	const prepareData = data => {
		const dataTmp = [];
		data.forEach(element => {
			if (element.type !== undefined) {
				if (element.type === 'static') {
					if (element.data === 'sideMenuLinks') {
						let sideMenuConfig;
						const getConfig = () => {
							$timeout(() => {
								sideMenuConfig = sideMenuService.getMenuConfig();
								if (sideMenuConfig === undefined) {
									getConfig();
								} else {
									const links = extractMenuLinksFromConfig(sideMenuConfig);
									links.forEach(item => {
										dataTmp.push(item);
									});
								}
							}, 10);
						};
						getConfig();
					} else if (typeof element.data !== 'string' && element.data.length > 0) {
						element.data.forEach(item => {
							dataTmp.push(item);
						});
					}
				}
			}
		});
		$scope.data = dataTmp;
	};

	this.$onInit = () => {
		$scope.indexFields = this.config.indexFields;
		prepareData(this.config.data);
	};
};

export default controller;
