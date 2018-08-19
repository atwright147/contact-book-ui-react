import testUtils from '../../../../test/utils/redux.js';
import Container, { mapDispatchToProps } from './index.js';
import FormView from './Form.js';
import contactsActions from '../../../actions/contactsActions.js';

describe('Contact Form Container', () => {
    let initialState;
    const sandbox = sinon.createSandbox();

    beforeEach(() => {
        initialState = {};
    });

    afterEach(() => {
        initialState = {};
        sandbox.restore();
    });

    it('should render a Form View component with ...', () => {
        const store = testUtils.setupMockStore(initialState);
        const renderedContainer = shallow(<Container store={store} />);
        const viewComponent = renderedContainer.find(FormView);
        expect(viewComponent.find(FormView)).to.have.lengthOf(1);
    });

    describe.skip('mapDispatchToProps', () => {
        it('should dispatch the correct action creator', () => {
            const promise = new Promise((resolve) => {
                resolve();
            });
            const dispatchStub = sinon.stub().returns(promise);
            mapDispatchToProps(dispatchStub);
            console.info(dispatchStub);
            expect(dispatchStub).to.equal(1);
        });
    });
});
