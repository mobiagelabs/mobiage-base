import 'angular-input-masks';
import { mbInputCpfComponent } from './mb-input-cpf.component';

const mbInputCpfModule = angular.module('mb.components.mbInputCpf', ['ui.utils.masks'])
    .component('mbInputCpf', mbInputCpfComponent)

export { mbInputCpfModule };