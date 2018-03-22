const controller = $scope => {
	$scope.state = {
		searchValue: '',
		autoCompleteActive: false,
		result: []
	};

	const conteudoTeste = [
		{
			type: 'Clientes',
			name: 'Alfredo Peres',
			empresa: 'Mobiage',
			cpf: '029.202.594-54'
		},
		{
			type: 'Clientes',
			name: 'Thiago Martins',
			cpf: '208.290.390-45'
		},
		{
			type: 'Clientes',
			name: 'Cesar Baleco'
		},
		{
			type: 'Clientes',
			name: 'aaaaaaaaa Pereaaaaaas',
			empresa: 'Mobiage',
			cpf: '029.202.594-54'
		},
		{
			type: 'Clientes',
			name: 'Bruno Garcia'
		},
		{
			type: 'Empresa',
			name: 'Sicoob',
			cnpj: '029.202.594-54'
		},
		{
			type: 'Empresa',
			name: 'Mobiage',
			cnpj: '029.202.594-54'
		},
		{
			type: 'Empresa',
			name: 'Gumga',
			cnpj: '029.202.594-54'
		}
	];

	const camposIndexados = ['name', 'empresa', 'cnpj', 'cpf'];

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
			return elements;
		};

		/* Para cada tipo, faz um elemento no array */
		types.forEach(type => {
			autocomplete.push({ type, children: allElementsOfType(type) });
		});
		return autocomplete;
	};

	const allOcurrencesOf = (index, string, ocurrence) => {
		const result = { index, matches: [] };
		let actualString = string.toLowerCase();
		const searchSlice = () => {
			let indiceFinal;
			const indiceInicial = actualString.search(ocurrence.toLowerCase());
			if (indiceInicial !== -1) {
				indiceFinal = indiceInicial + ocurrence.length;
				result.matches.push([indiceInicial, indiceFinal]);
				actualString = actualString.replace(ocurrence.toLowerCase(), '');
				searchSlice();
			}
		};
		searchSlice();
		return result;
	};

	const search = (searchParam, fixedData, indexes) => {
		/* Inicia a variavel de resultados */
		const result = [];

		/* Retira espaços da search string */
		const searchString = searchParam.trim();

		/* Caso a search string seja maior que zero */
		if (searchString.length > 0) {
			/* Para cada item do conteudo */
			conteudoTeste.forEach(element => {
				const elementTmp = Object.assign({}, element);
				elementTmp.matches = [];
				elementTmp.matchesCount = 0;
				/* Busca por cada tipo de dado indexável */
				indexes.forEach(index => {
					/* Caso tenha o dado indexável */
					if (index in element) {
						const string = element[index];
						/* Procura pela string digitada */
						const searchAux = string.toLowerCase().search(searchString.toLowerCase());
						if (searchAux !== -1) {
							const allOcurrences = allOcurrencesOf(index, element[index], searchString);
							elementTmp.matchesCount += allOcurrences.matches.length;
							elementTmp.matches.push(allOcurrences);
						}
					}
				});
				if (elementTmp.matches.length > 0) {
					result.push(elementTmp);
				}
			});
		}
		console.log(result);
		$scope.state.result = makeAutocompleteObject(result.slice());
	};

	$scope.blurInput = () => {
		$scope.state.searchValue = '';
		// $scope.state.autoCompleteActive = false;
	};

	$scope.onChangeSearch = text => {
		if ($scope.state.searchValue.length === 0 && text.trim().length > 0) {
			$scope.state.autoCompleteActive = true;
		} else if (text.trim().length === 0) {
			$scope.state.autoCompleteActive = false;
		}
		search(text, conteudoTeste, camposIndexados);
		$scope.state.searchValue = text;
	};
};

export default controller;
