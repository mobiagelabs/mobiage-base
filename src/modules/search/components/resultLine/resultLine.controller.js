const controller = function ($scope) {
	$scope.maintext = '';

	const highLightMatches = line => {
		const hightLighted = [];
		const name = line.name.trim();
		line.matches.forEach(match => {
			if (match.index.name === 'name') {
				for (let i = 0; i < match.matches.length; i += 1) {
					const indiceInicial = match.matches[i][0];
					const indiceFinal = match.matches[i][1];
					if (i === 0) {
						/* Caso esteja no início */
						if (indiceInicial === 0) {
							hightLighted.push({ text: name.substring(indiceInicial, indiceFinal), highLight: true });
							/* Caso o indice final não seja o fim da palavra */
							if (indiceFinal < name.length) {
								if (i === match.matches.length - 1) {
									hightLighted.push({ text: name.substring(indiceFinal, name.length), highLight: false });
								} else {
									const indiceInicialProx = match.matches[i + 1][0];
									if (name.substring(indiceFinal, indiceInicialProx).length > 0) {
										hightLighted.push({ text: name.substring(indiceFinal, indiceInicialProx), highLight: false });
									}
								}
							}
						} else {
							hightLighted.push({ text: name.substring(0, indiceInicial), highLight: false });
							hightLighted.push({ text: name.substring(indiceInicial, indiceFinal), highLight: true });
							if (i === match.matches.length - 1) {
								if (name.substring(indiceFinal, name.length).length > 0) {
									hightLighted.push({ text: name.substring(indiceFinal, name.length), highLight: false });
								}
							} else {
								const indiceInicialProx = match.matches[i + 1][0];
								if (name.substring(indiceFinal, indiceInicialProx).length > 0) {
									hightLighted.push({ text: name.substring(indiceFinal, indiceInicialProx), highLight: false });
								}
							}
						}
						/* Caso esteja no final da lista de matches */
					} else if (i === match.matches.length - 1) {
						hightLighted.push({ text: name.substring(indiceInicial, indiceFinal), highLight: true });
						if (name.substring(indiceFinal, name.length).length > 0) {
							hightLighted.push({ text: name.substring(indiceFinal, name.length), highLight: false });
						}
					} else {
						hightLighted.push({ text: name.substring(indiceInicial, indiceFinal), highLight: true });
						const indiceInicialProx = match.matches[i + 1][0];
						if (name.substring(indiceFinal, indiceInicialProx).length > 0) {
							hightLighted.push({ text: name.substring(indiceFinal, indiceInicialProx), highLight: false });
						}
					}
				}
			}
			$scope.maintext = hightLighted;
		});
	};

	this.$onInit = () => {
		highLightMatches(this.line);
	};
};

export default controller;
