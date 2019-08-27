/**
 * JestとEnzymeの設定を行う
 * グローバルでモックするモジュールなどもここに書く
 */

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
