import './mb-input-text.style.scss';
import template from './mb-input-text.template.html';

class Controller {

    constructor($scope, $element, $attrs) {
        if ($attrs.ngRequired == '') { this.ngRequired = true; }
        if ($attrs.ngDisabled == '') { this.ngDisabled = true; }

        this.props = {
            placeholder: $attrs.placeholder || '',
        }
    }

    onChange() {
        if (this.ngChange) { this.ngChange({}); }
    }

}

Controller.$inject = ['$scope', '$element', '$attrs'];

const mbInputTextComponent = {
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

export { mbInputTextComponent };