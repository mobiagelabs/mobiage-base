import './common.scss';
import { mbInputMoneyModule } from './mb-input-money/mb-input-money.module';
import { mbInputCpfModule } from './mb-input-cpf/mb-input-cpf.module';
import { mbInputCnpjModule } from './mb-input-cnpj/mb-input-cnpj.module';
import { mbInputCpfCnpjModule } from './mb-input-cpfcnpj/mb-input-cpfcnpj.module';
import { mbInputPhoneModule } from './mb-input-phone/mb-input-phone.module';
import { mbInputNameModule } from './mb-input-name/mb-input-name.module';
import { mbInputTextModule } from './mb-input-text/mb-input-text.module';

angular.module('mb.components', [
    mbInputMoneyModule.name,
    mbInputCpfModule.name,
    mbInputCnpjModule.name,
    mbInputCpfCnpjModule.name,
    mbInputPhoneModule.name,
    mbInputNameModule.name,
    mbInputTextModule.name,
]);