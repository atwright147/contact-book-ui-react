import React from 'react';
import { Control, Form } from 'react-redux-form';

import YesNoButtons from '../customControls/YesNoButtons';

class UserForm extends React.Component {
    render() {
        return (
            <Form model="dynamic">
                <h1>User Form</h1>

                <label htmlFor=".firstName">First name:</label>
                <Control.text model=".firstName" id=".firstName" /><br />

                <label htmlFor=".lastName">Last name:</label>
                <Control.text model=".lastName" id=".lastName" /><br />

                <p>Is Happy?</p>
                <YesNoButtons modelName="dynamic.isHappy" mapProps={{ model: ({ model }) => model }} /><br />

                <button type="submit">Save User</button>
            </Form>
        );
    }
}

export default UserForm;
