import HomePage from './index.js';
import List from '../List';

describe('HomePage', () => {
    let component;

    before(() => {
        component = shallow(<HomePage />);
    });

    it('should contain a heading, paragraph and List', () => {
        expect(component.find('h1')).to.have.lengthOf(1);
        expect(component.find('p')).to.have.lengthOf(1);
        expect(component.find(List)).to.have.lengthOf(1);
    });
});
