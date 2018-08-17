import 'angular-input-masks';
import { mbInputPhoneComponent } from './mb-input-phone.component';

const mbInputPhoneModule = angular.module('mb.components.mbInputPhone', ['ui.utils.masks'])
    .component('mbInputPhone', mbInputPhoneComponent)

export { mbInputPhoneModule };