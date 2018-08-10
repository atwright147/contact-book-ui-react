import Footer from './index.js';

describe('Footer', () => {
    let component;

    before(() => {
        component = shallow(<Footer />);
    });

    it('should contain a footer element', () => {
        expect(component.find('footer')).to.have.lengthOf(1);
    });

    it('should have correct text inside footer element', () => {
        expect(component.find('footer').prop('children')).to.equal('Footer');
    });
});
