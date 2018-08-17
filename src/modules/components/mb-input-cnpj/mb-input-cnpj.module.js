import 'angular-input-masks';
import { mbInputCnpjComponent } from './mb-input-cnpj.component';

const mbInputCnpjModule = angular.module('mb.components.mbInputCnpj', ['ui.utils.masks'])
    .component('mbInputCnpj', mbInputCnpjComponent)

export { mbInputCnpjModule };