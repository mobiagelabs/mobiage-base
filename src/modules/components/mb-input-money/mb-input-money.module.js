import 'jquery';
import 'jquery-maskmoney/dist/jquery.maskMoney.min';

import { mbInputMoneyComponent } from './mb-input-money.component';
import { mbInputMoneyDirective } from './mb-input-money.directive';

const mbInputMoneyModule = angular.module('mb.components.mbInputMoney', [])
    .component('mbInputMoney', mbInputMoneyComponent)
    .directive('mbInputMoney', mbInputMoneyDirective)

export { mbInputMoneyModule };