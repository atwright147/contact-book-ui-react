import Header from './index.js';

describe('Header', () => {
    let component;

    before(() => {
        component = shallow(<Header />);
    });

    it('should contain a header element', () => {
        expect(component.find('header')).to.have.lengthOf(1);
    });

    it('should have correct text inside header element', () => {
        expect(component.find('header').prop('children')).to.equal('Header');
    });
});
