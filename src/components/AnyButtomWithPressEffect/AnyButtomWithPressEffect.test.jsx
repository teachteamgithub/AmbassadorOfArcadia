import React from 'react';
import { shallow } from 'enzyme';
import AnyButtomWithPressEffect from './AnyButtomWithPressEffect';

describe('Testing AnyButtomWithPressEffect Component', () => {
  it('should render correctly without props', done => {
    const wrapper = shallow(<AnyButtomWithPressEffect />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
