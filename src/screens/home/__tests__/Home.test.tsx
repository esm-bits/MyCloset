import { shallow } from 'enzyme';
import React from 'react';

import Home from '../Home';

test('dummy test', async () => {
  const wrapper = shallow(<Home componentId="" />);
  expect(wrapper).toBeTruthy();
});
