import listIfExists from './listIfExists.js';

describe('#listIfExists', () => {
    it('should not render array items that are empty', () => {
        const testData = ['item1', '', 'item2'];
        expect(listIfExists(testData)).to.equal('item1, item2');
    });
});
