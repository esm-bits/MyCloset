/**
 * JestとEnzymeの設定を行う
 * グローバルでモックするモジュールなどもここに書く
 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
