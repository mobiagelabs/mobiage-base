import './mb-input-money.style.scss';
import template from './mb-input-money.template.html';

class Controller {
    constructor($scope, $element, $attrs) {
        if ($attrs.ngRequired == '') { this.ngRequired = true; }
        if ($attrs.ngDisabled == '') { this.ngDisabled = true; }
        
        this.props = {
            prefix: $attrs.prefix || 'R$ ',
            decimal: $attrs.decimal || ',',
            thousands: $attrs.decimal || '.',
            precision: $attrs.precision || 2,
            allowNegative: $attrs.allowNegative ? JSON.parse($attrs.allowNegative) : true,
            placeholder: $attrs.placeholder || '',
        }
    }

    onChange() {
        if (this.ngChange) {
            this.ngChange({});
        }
    }

}

Controller.$inject = ['$scope', '$element', '$attrs'];

const mbInputMoneyComponent = {
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

export { mbInputMoneyComponent };