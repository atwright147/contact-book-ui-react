import { Form, Control } from 'react-redux-form';

import ContactForm from './Form.js';

describe('Contact Form', () => {
    let component;

    before(() => {
        component = shallow(<ContactForm />);
    });

    it('should contain a Form element', () => {
        expect(component.find(Form)).to.have.lengthOf(1);
    });

    it('should have correct model prop on Form element', () => {
        expect(component.find(Form).prop('model')).to.equal('dynamic');
    });

    it('should have correct heading string', () => {
        expect(component.find('h1').text()).to.equal('Contact');
    });

    it('should have correct quantity of Controls', () => {
        expect(component.find(Control.text)).to.have.lengthOf(9);
    });
});
