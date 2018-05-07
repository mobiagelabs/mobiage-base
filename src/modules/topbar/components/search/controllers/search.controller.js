const controller = function ($scope, $timeout, sideMenuService, hotkeys) {
	$scope.searchValue = '';
	$scope.data = [];
	$scope.result = [];
	$scope.selected = undefined;

	$scope.onSelect = (index) => {
		$scope.selected = index.slice();
	};

	// Essa função foca o input ao clicar no search
	$scope.focusInput = () => {
		const element = document.getElementById('mb-tsi-input');
		element.focus();
	};

	const incrementSelected = () => {
		if ($scope.selected === undefined) {
			$scope.selected = [0, 0];
		} else if ($scope.selected[0] < $scope.result.length) {
			if ($scope.selected[1] < $scope.result[$scope.selected[0]].children.length - 1) {
				$scope.selected[1] += 1;
			} else if (!($scope.selected[0] === $scope.result.length - 1 && $scope.selected[1] === $scope.result[$scope.selected[0]].children.length - 1)) {
				$scope.selected[0] += 1;
				$scope.selected[1] = 0;
			}
		}
	};

	const decrementSelected = () => {
		if ($scope.selected !== undefined) {
			if ($scope.selected[1] > 0) {
				$scope.selected[1] -= 1;
			} else if ($scope.selected[0] > 0) {
				$scope.selected[0] -= 1;
				$scope.selected[1] = $scope.result[$scope.selected[0]].children.length - 1;
			}
		}
	};

	const executeSelected = () => {
		const element = angular.element('.mb-tsal-link-active a')[0];
		$timeout(() => { element.click(); });
		const inputElement = document.getElementById('mb-tsi-input');
		$timeout(() => { inputElement.blur(); });
	};

	const setHotkeys = () => {
		hotkeys.bindTo($scope).add({
			combo: 'up',
			callback(event) {
				event.preventDefault();
				decrementSelected();
			},
			allowIn: ['INPUT']
		});
		hotkeys.bindTo($scope).add({
			combo: 'down',
			callback(event) {
				event.preventDefault();
				incrementSelected();
			},
			allowIn: ['INPUT']
		});
		hotkeys.bindTo($scope).add({
			combo: 'enter',
			callback(event) {
				event.preventDefault();
				executeSelected();
			},
			allowIn: ['INPUT']
		});
		hotkeys.bindTo($scope).add({
			combo: 'esc',
			callback(event) {
				event.preventDefault();
				const inputElement = document.getElementById('mb-tsi-input');
				$timeout(() => { inputElement.blur(); });
			},
			allowIn: ['INPUT']
		});
	};

	const removeHotkeys = () => {
		hotkeys.del('down');
		hotkeys.del('up');
		hotkeys.del('enter');
	};

	$scope.openAutocomplete = () => {
		$scope.autoCompleteHide = false;
		$timeout(() => {
			$scope.autoCompleteActive = true;
		}, 50);
		setHotkeys();
	};

	$scope.closeAutoComplete = () => {
		removeHotkeys();
		$scope.selected = undefined;
		$scope.autoCompleteActive = false;
		$timeout(() => { $scope.autoCompleteHide = true; }, 500);
	};

	$scope.blurInput = () => {
		$scope.closeAutoComplete();
		$timeout(() => { $scope.searchValue = ''; }, 500);
	};

	const makeAutocompleteObject = (array) => {
		const types = [];
		const autocomplete = [];

		/* Separa os tipos: */
		array.forEach((element) => {
			if (types.indexOf(element.type) === -1) {
				types.push(element.type);
			}
		});

		/* Funções auxiliares */
		const transformElement = (element) => {
			const tmpElement = element;
			return tmpElement;
		};

		const allElementsOfType = (type) => {
			const elements = [];
			array.forEach((element) => {
				if (element.type === type) {
					elements.push(transformElement(element));
				}
			});
			// TO-DO (Limitar resultados parando o algoritmo ao chegar no limite de resultados)
			return elements.slice(0, 5).sort((a, b) => a.matchesCount > b.matchesCount).reverse();
		};

		/* Para cada tipo, faz um elemento no array */
		types.forEach((type) => {
			const children = allElementsOfType(type);
			let matchesCount = 0;
			children.forEach((element) => { matchesCount += element.matchesCount; });
			autocomplete.push({ type, children, matchesCount });
		});
		return autocomplete.sort((a, b) => a.matchesCount > b.matchesCount).reverse();
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
			$scope.data.forEach((element) => {
				const elementTmp = element;
				elementTmp.matches = [];
				elementTmp.matchesCount = 0;
				/* Busca por cada tipo de dado indexável */
				indexes.forEach((index) => {
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
			$scope.selected = [0, 0];
		}
	};

	$scope.onChangeSearch = (text) => {
		/* Não considera espaços */
		const inputText = text.toString().replace(/\\/g, '').replace(/\//ig, '').trim();
		$scope.selected = undefined;

		if (inputText.length > 0) {
			$scope.openAutocomplete();
			search(inputText, $scope.data, $scope.indexFields);
			$scope.searchValue = inputText;
		} else {
			$scope.autoCompleteActive = false;
			$scope.autoCompleteHide = true;
		}
	};

	const extractMenuLinksFromConfig = (config) => {
		const links = [];

		const prepareLink = (link) => {
			if ((link.type === 'category' || link.type === 'sub-category') && link.children !== undefined && link.children.length > 0) {
				link.children.forEach((element) => {
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
			config.quickMenu.links.forEach((element) => {
				prepareLink(element);
			});
		}
		if (config.structure !== undefined && config.structure.length > 0) {
			config.structure.forEach((element) => {
				prepareLink(element);
			});
		}
		return links;
	};

	const prepareData = (data) => {
		const dataTmp = [];
		data.forEach((element) => {
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
									links.forEach((item) => {
										dataTmp.push(item);
									});
								}
							}, 10);
						};
						getConfig();
					} else if (typeof element.data !== 'string' && element.data.length > 0) {
						element.data.forEach((item) => {
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

		hotkeys.bindTo($scope).add({
			combo: 'ctrl+b',
			callback() {
				$scope.focusInput();
			}
		});
	};
};

export default controller;
