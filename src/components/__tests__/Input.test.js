
import React from 'react';
import {shallow, mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import {InputComponent} from '../Input'

// test('Input renders', () => {
//     const result = mount(
//       <InputComponent onChange={() => {}} value={123}/>
//     );
//     expect(result).toEqual(null)
//   });
