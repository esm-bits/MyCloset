/**
 * JestとEnzymeの設定を行う
 * グローバルでモックするモジュールなどもここに書く
 */

import 'jest-enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('@react-native-community/async-storage', () => ({
  getItem: jest.fn(),
}));

jest.mock('react-native-device-info', () => {});
