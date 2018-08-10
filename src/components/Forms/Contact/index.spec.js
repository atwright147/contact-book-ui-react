import testUtils from '../../../../test/utils/redux.js';

import Container from './index.js';
import FormView from './Form.js';

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
});
