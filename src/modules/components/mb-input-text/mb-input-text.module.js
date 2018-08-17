import 'angular-input-masks';
import { mbInputTextComponent } from './mb-input-text.component';

const mbInputTextModule = angular.module('mb.components.mbInputText', ['ui.utils.masks'])
    .component('mbInputText', mbInputTextComponent)

export { mbInputTextModule };