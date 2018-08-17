import 'angular-input-masks';
import { mbInputCpfCnpjComponent } from './mb-input-cpfcnpj.component';

const mbInputCpfCnpjModule = angular.module('mb.components.mbInputCpfCnpj', ['ui.utils.masks'])
    .component('mbInputCpfcnpj', mbInputCpfCnpjComponent)

export { mbInputCpfCnpjModule };