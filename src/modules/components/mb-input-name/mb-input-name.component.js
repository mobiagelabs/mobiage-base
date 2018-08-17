import './mb-input-name.style.scss';
import template from './mb-input-name.template.html';

class Controller {

    constructor($scope, $element, $attrs) {
        if ($attrs.ngRequired == '') { this.ngRequired = true; }
        if ($attrs.ngDisabled == '') { this.ngDisabled = true; }
        
        this.props = {
            placeholder: $attrs.placeholder || '',
        }
        this.prepositions = [
            'de', 'da', 'do', 'dos', 'de',
            'a', 'ante', 'após', 'até', 'com', 'contra', 'desde',
            'em', 'entre', 'para', 'per', 'perante', 'por', 'sem',
            'sob', 'sobre', 'trás'
        ];
    }

    onInit() {
        this.ngModel = this.capitalize(this.ngModel);
    }

    capitalize(str) {
        return (str || '')
            .replace(/  /g, '')
            .split(' ')
            .map((w) => this.prepositions.filter((e) => e.toLowerCase() == w.toLowerCase()).length == 0
                ? w.charAt(0).toUpperCase() + w.slice(1)
                : w.toLowerCase())
            .join(' ');
    }

    onChange() {
        this.ngModel = this.capitalize(this.ngModel);
        if (this.ngChange) { this.ngChange({}); }
    }

}

Controller.$inject = ['$scope', '$element', '$attrs'];

const mbInputNameComponent = {
    bindings: {
        ngModel: '=',
        ngChange: '&?',
        ngRequired: '=?',
        ngDisabled: '=?',
        ngBlur: '&?',
        ngFocus: '&?',
        ngKeyup: '&?',
        ngKeypress: '&?',
        ngKeydown: '&?',
    },
    template,
    controller: Controller,
}

export { mbInputNameComponent };