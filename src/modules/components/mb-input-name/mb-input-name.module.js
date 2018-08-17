import 'angular-input-masks';
import { mbInputNameComponent } from './mb-input-name.component';

const mbInputNameModule = angular.module('mb.components.mbInputName', ['ui.utils.masks'])
    .component('mbInputName', mbInputNameComponent)

export { mbInputNameModule };